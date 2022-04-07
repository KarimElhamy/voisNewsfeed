const url =
  'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=8fc6c5d7968f4c3ea04a1d1fd1f39a3b';

const urlLang =
  'https://newsapi.org/v2/top-headlines/sources?language=ar&apiKey=8fc6c5d7968f4c3ea04a1d1fd1f39a3b';

const urlLang2 =
  'https://newsapi.org/v2/top-headlines?country=eg&apiKey=8fc6c5d7968f4c3ea04a1d1fd1f39a3b';

export async function getNews() {
  let result = await fetch(url).then(response => response.json());
  return result.articles;
}

export async function getNewsLang() {
  let result = await fetch(urlLang2).then(response => response.json());
  return result.articles;
}
