const axios = require("axios");

let titleArr = [];
async function getData() {
  try {
    const initialData = await axios.get(
      "https://jsonmock.hackerrank.com/api/articles?author=epaga&page=1"
    );
    const totalPages = initialData.data.total_pages;

    for (let i = 0; i < totalPages; i++) {
      let perPageData = await axios.get(
        `https://jsonmock.hackerrank.com/api/articles?author=epaga&page=${i}`
      );
      perPageData.data.data.forEach((elem) => {
        if (elem.title !== null) {
          titleArr.push(elem.title);
        } else if (elem.title === null && story_title !== null) {
          titleArr.push(elem.story_title);
        }
      });
    }

    console.log(titleArr);
  } catch (err) {
    console.log(err);
  }
}

getData();
