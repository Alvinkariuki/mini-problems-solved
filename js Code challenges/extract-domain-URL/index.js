import express from "express";

const app = express();

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  let url = "https://hyphen-site.org";
  url = url.replace("https://", " ");
  url = url.replace("http://", " ");
  url = url.replace("www.", " ");

  res.send(url.split(".")[0]);
});

app.listen(PORT, () => console.log(`Currently running on port ${PORT}`));
