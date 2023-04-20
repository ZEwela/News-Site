import LayoutWithMenu from "<import>/components/LayoutWithMenu";
import Search from "<import>/components/Search";
import Head from "next/head";
import { useRef } from "react";
import { useRouter } from "next/router";
import { Doc, handler } from "../api/index";
import NewsList from "<import>/components/NewsList";
const KEY = process.env.API_KEY as string;

type NewsProps = {
  results: Doc[];
  title: string;
};

export default function News({ results, title }: NewsProps) {
  const router = useRouter();
  const topic = useRef<HTMLInputElement>(null!);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const topicValue = topic.current.value;
    router.push(`/news/search/${topicValue}`);
    topic.current.value = "";
  };

  return (
    <LayoutWithMenu>
      <Head>
        <title>{title}</title>
        <meta name="description" content={title} />
        <link rel="icon" href="favicon.ico" />
      </Head>
      <Search
        onSubmitHandler={handleSubmit}
        reference={topic}
        placeholder="Search topic"
      />

      <h1 className="mt-4 mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white text-center">
        {title}
      </h1>

      <NewsList resource={results} />
    </LayoutWithMenu>
  );
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { path: "top-stories" } },
      { params: { path: "popular" } },
      { params: { path: "sections" } },
    ],
    fallback: false, // can also be true or 'blocking'
  };
}

export async function getStaticProps({ params }: any) {
  const top_stories_url = `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${KEY}`;
  const popular_url = `https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${KEY}`;
  const sections_url = `https://api.nytimes.com/svc/news/v3/content/section-list.json?api-key=${KEY}`;

  switch (params.path) {
    case "top-stories":
      return {
        props: {
          results: await handler(top_stories_url),
          title: "Top Stories",
        },
      };
    case "popular":
      return {
        props: {
          results: await handler(popular_url),
          title: "Popular",
        },
      };
    case "sections":
      return {
        props: {
          results: await handler(sections_url),
          title: "Sections",
        },
      };
    default:
      return {
        props: null,
      };
  }
}
