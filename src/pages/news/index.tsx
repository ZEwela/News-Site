import LayoutWithMenu from "<import>/components/LayoutWithMenu";
import Search from "<import>/components/Search";
import { useRef } from "react";
import { useRouter } from "next/router";
import { handler } from "../api/index";
import NewsList from "<import>/components/NewsList";
const KEY = process.env.API_KEY;

export default function News({ results }: any) {
  const router = useRouter();
  const topic: any = useRef();
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const topicValue = topic.current.value;
    router.push(`/news/${topicValue}`);
    topic.current.value = "";
  };
  return (
    <LayoutWithMenu>
      <Search
        onSubmitHandler={handleSubmit}
        reference={topic}
        placeholder="Search topic"
      />
      <h1 className="mt-4 mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white text-center">
        Top Stories
      </h1>
      <NewsList resource={results} />
      {/* <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {results.map((result: any) => {
          return (
            <li
              key={result.uri}
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 flex flex-wrap"
            >
              <a href={result.url} target="_blank" rel="noopener norefferer">
                {result.title}
              </a>
              <img
                src={result.multimedia[0].url}
                alt={result.multimedia[0].caption}
                width={500}
                height={500}
              />
            </li>
          );
        })}
      </ul> */}
    </LayoutWithMenu>
  );
}

export async function getStaticProps() {
  const results = await handler(
    `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${KEY}`
  );

  return {
    props: {
      results,
    },
  };
}
