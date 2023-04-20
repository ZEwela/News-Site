export default function NewsList({ resource }: any) {
  return (
    <>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {resource.map((result: any) => {
          return (
            <li key={result.uri} className="flex">
              <a
                href={result.url}
                target="_blank"
                rel="noopener norefferer"
                className="flex"
              >
                <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 flex flex-wrap justify-center">
                  {result.title}
                  {result.multimedia || result.multimediaURL ? (
                    <img
                      src={
                        result.multimedia
                          ? result.multimedia[0].url
                          : result.multimediaURL
                      }
                      alt={result.multimediaCaption || "image"}
                      width={500}
                      height={500}
                    />
                  ) : (
                    ""
                  )}
                </div>
              </a>
            </li>
          );
        })}
      </ul>
    </>
  );
}
