import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

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
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div>
        <div className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit ">
          <h1 className="mt-4 mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white text-center">
            News
          </h1>
        </div>
        <div className="fixed bottom-4 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black  lg:h-auto  lg:bg-none">
          By Ewelina - 2023
        </div>
      </div>

      {links.map((link) => {
        return (
          <>
            <Link key={link.path} href={`/news${link.path}`}>
              <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 text-center">
                <strong>{link.title}</strong>{" "}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
                <p>{link.desc}</p>
              </div>
            </Link>
          </>
        );
      })}
    </main>
  );
}
