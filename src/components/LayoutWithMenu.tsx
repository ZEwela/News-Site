import { useRouter } from "next/router";
import Link from "next/link";
export default function LayoutWithMenu() {
  const router = useRouter();
  return (
    <>
      <ul className="flex">
        <li className="flex-1 mr-2">
          <Link
            href="/"
            className="group rounded-lg border border-transparent px-1 py-1 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          >
            {" "}
            HOME{" "}
          </Link>
        </li>
        <li className="flex-1 mr-2">
          <button
            className="group rounded-lg border border-transparent px-1 py-1 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            type="button"
            onClick={() => router.back()}
          >
            BACK
          </button>
        </li>
      </ul>
    </>
  );
}
