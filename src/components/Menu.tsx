import { useRouter } from "next/router";
import Link from "next/link";
import { AiOutlineArrowLeft } from "react-icons/ai";

export default function Menu(): JSX.Element {
  const router = useRouter();
  return (
    <>
      <ul className="flex mt-20 mx-2 md:pt-6">
        <li className="flex-1 mr-2">
          <button
            className="group rounded-lg border border-transparent  px-2 py-1 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            type="button"
            onClick={() => router.back()}
          >
            <AiOutlineArrowLeft size={25} />
          </button>
        </li>
      </ul>
    </>
  );
}
