import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
        <footer className="m-4 dark:bg-gray-800 ">
          <div className="w-full mx-auto max-w-screen-xl p-4 flex items-center justify-center ">
            By Ewelina - 2023
          </div>
        </footer>
      </body>
    </Html>
  );
}
