import LayoutWithMenu from "<import>/components/LayoutWithMenu";

const KEY = process.env.API_KEY;

export default function News({ results }: any) {
  return (
    <LayoutWithMenu>
      <h1>Top Stories</h1>
      <ul className="grid grid-cols-4 gap-4">
        {results.map((result: any) => {
          return (
            <li
              key={result.uri}
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 flex flex-wrap"
            >
              <a href={result.url} target="_blank" rel="noopener norefferer">
                {result.title}
              </a>
              {/* <Image
                src={result.multimedia[0].url}
                alt={result.multimedia[0].caption}
                width={500}
                height={500}
              /> */}
              <img
                src={result.multimedia[0].url}
                alt={result.multimedia[0].caption}
                width={500}
                height={500}
              />

              <br />
              <br />
            </li>
          );
        })}
      </ul>
    </LayoutWithMenu>
  );
}

export async function getStaticProps() {
  const URL = `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${KEY}`;
  const response = await fetch(URL);
  const data = await response.json();
  console.log(data.results);

  return {
    props: {
      results: data.results,
    },
  };
}
