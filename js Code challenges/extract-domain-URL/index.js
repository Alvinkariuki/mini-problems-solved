function extractURL(url) {
  url = url.replace("https://", " ");
  url = url.replace("http://", " ");
  url = url.replace("www.", " ");

  return url.split(".")[0];
}

console.log(extractURL("http://example2.comContent-Length/"));
