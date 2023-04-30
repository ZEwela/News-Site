import Link from "next/link";

export default function Home(): JSX.Element {
  interface LinksELement {
    title: string;
    desc: string;
    path: string;
  }

  const links: LinksELement[] = [
    {
      title: "Top Stories",
      desc: "Read articles currently on the homepage of the New York Times",
      path: "/top-stories",
    },
    {
      title: "Popular",
      desc: "Read the most popular articles  on the New York Times",
      path: "/popular",
    },
    {
      title: "Sections",
      desc: "Get an up-to-the-minute stream of pubished articles",
      path: "/sections",
    },
  ];
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center p-24 mt-6">
        {links.map((link) => {
          return (
            <Link key={link.path} href={`/news${link.path}`}>
              <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-400 hover:dark:bg-neutral-400/30 text-center">
                <strong>{link.title}</strong>{" "}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
                <p>{link.desc}</p>
              </div>
            </Link>
          );
        })}
      </main>
    </>
  );
}
