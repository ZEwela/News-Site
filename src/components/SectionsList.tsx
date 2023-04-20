import { useRouter } from "next/router";
import { Section } from "../pages/news/sections/index";
interface Props {
  resource: Section[];
}

export default function SectionsList({ resource }: Props): JSX.Element {
  const router = useRouter();
  const onClickHandler = (section: string): void => {
    router.push(`/news/sections/${section}`);
  };
  return (
    <>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {resource.map((result: Section) => {
          if (
            result.section === "admin" ||
            result.section === "crosswords & games" ||
            result.section === "home & garden"
          )
            return;
          return (
            <li key={result.section} className="flex">
              <button
                onClick={() => {
                  onClickHandler(result.section);
                }}
              >
                <div className="group rounded-lg border border-transparent px-1 py-1 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
                  {result.display_name}
                </div>
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
