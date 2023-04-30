import LayoutWithMenu from "<import>/components/LayoutWithMenu";
import { Doc, section } from "../../api/index";
import NewsList from "<import>/components/NewsList";

interface SectionArticles {
  results: Doc[];
  query: string;
}
export default function SectionArticles({
  results,
  query,
}: SectionArticles): JSX.Element {
  if (results.length === 0) {
    return <div>Loading...</div>;
  }
  return (
    <LayoutWithMenu>
      <h1 className="mt-4 mb-4 text-4xl font-bold leading-none tracking-tight text-gray-800 md:text-5xl lg:text-5xl dark:text-white text-center">
        Articles about {query}
      </h1>
      <NewsList resource={results} />
    </LayoutWithMenu>
  );
}

const KEY = process.env.API_KEY;
export async function getServerSideProps({ params }: any) {
  const sectionName = params.sectionName.replaceAll(" ", "%20");
  console.log(sectionName);
  const results = await section(
    `https://api.nytimes.com/svc/news/v3/content/nyt/${sectionName}.json?api-key=${KEY}`
  );
  console.log(results);
  return {
    props: { results, query: params.sectionName }, // will be passed to the page component as props
  };
}
