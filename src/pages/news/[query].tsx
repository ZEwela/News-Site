import LayoutWithMenu from "<import>/components/LayoutWithMenu";
import { search } from "../api/index";
import NewsList from "<import>/components/NewsList";

const KEY = process.env.API_KEY;

export default function News({ results, query }: any) {
  return (
    <LayoutWithMenu>
      <h1 className="mt-4 mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white text-center">
        Strories about {query}
      </h1>
      <NewsList resource={results} />
    </LayoutWithMenu>
  );
}

export async function getServerSideProps({ params }: any) {
  const URL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${params.query}&api-key=${KEY}`;
  const results = await search(URL);

  return {
    props: { results, query: params.query },
  };
}
