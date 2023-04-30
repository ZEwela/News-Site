export interface Doc {
  title: string;
  url: string;
  uri: string;
  multimediaURL?: string;
  multimediaCaption?: string;
}

export async function handler(url: string): Promise<any[]> {
  const response = await fetch(url);
  const data = await response.json();
  const results = await data.results;
  return results;
}

export async function search(url: string): Promise<any[]> {
  const response = await fetch(url);
  const data = await response.json();
  const docs = await data.response.docs;

  const results: Doc[] = docs
    ? docs?.map((doc: any) => {
        return {
          title: doc?.headline?.main,
          url: doc.web_url,
          uri: doc.uri,
          multimediaURL: doc.multimedia[0]
            ? `https://static01.nyt.com/${doc.multimedia[0].url}`
            : null,
          multimediaCaption: doc.multimedia[0]
            ? doc.multimedia[0].caption
            : null,
        };
      })
    : [];
  return results;
}

export async function section(url: string): Promise<any[]> {
  const response = await fetch(url);
  const data = await response.json();
  const docs = await data.results;

  const results: Doc[] = docs
    ? docs?.map((doc: any) => {
        return {
          title: doc?.title,
          url: doc.url,
          uri: doc.uri,
          multimediaURL: doc.multimedia ? doc.multimedia[1].url : null,
          multimediaCaption: doc.multimedia ? doc.multimedia[0].caption : null,
        };
      })
    : [];
  return results;
}
