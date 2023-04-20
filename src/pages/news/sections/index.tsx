import LayoutWithMenu from "<import>/components/LayoutWithMenu";
import Head from "next/head";
import { handler } from "<import>/pages/api";
import SectionsList from "<import>/components/SectionsList";
const KEY = process.env.API_KEY;

export interface Section {
  section: string;
  display_name: string;
}

type SectionsProps = {
  results: Section[];
  title: string;
};

export default function Sections({ results, title }: SectionsProps) {
  return (
    <LayoutWithMenu>
      <Head>
        <title>{title}</title>
        <meta name="description" content={title} />
      </Head>

      <h1 className="mt-4 mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white text-center">
        {title}
      </h1>
      <SectionsList resource={results} />
    </LayoutWithMenu>
  );
}

export async function getStaticProps(): Promise<{ props: SectionsProps }> {
  const sections_url = `https://api.nytimes.com/svc/news/v3/content/section-list.json?api-key=${KEY}`;

  return {
    props: {
      results: await handler(sections_url),
      title: "Sections",
    },
  };
}
