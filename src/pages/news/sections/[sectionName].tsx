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
  return (
    <LayoutWithMenu>
      <h1 className="mt-4 mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white text-center">
        Articles about {query}
      </h1>
      <NewsList resource={results} />
    </LayoutWithMenu>
  );
}

const KEY = process.env.API_KEY;
export async function getServerSideProps({ params }: any) {
  const sectionName = params.sectionName.replaceAll(" ", "%20");
  const results = await section(
    `https://api.nytimes.com/svc/news/v3/content/nyt/${sectionName}.json?api-key=${KEY}`
  );
  return {
    props: { results, query: params.sectionName }, // will be passed to the page component as props
  };
}
