export async function handler(url: any) {
  const response = await fetch(url);
  const data = await response.json();
  return data.results;
}

export async function search(url: string) {
  const response = await fetch(url);
  const data = await response.json();
  const docs = data.response.docs ?? [];
  const results = docs.map((doc: any) => {
    return {
      title: doc?.headline?.main,
      url: doc.web_url,
      uri: doc.uri,
      multimediaURL: `https://static01.nyt.com/${doc.multimedia[0].url}`,
      multimediaCaption: doc.multimedia[0].caption || "image",
    };
  });
  return results;
}
