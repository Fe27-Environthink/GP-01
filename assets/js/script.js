const article = document.getElementById("articlesContent");
const endpoint = "https://644b56f917e2663b9ded34b8.mockapi.io/article";

fetch(endpoint)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    for (let i = 0; i < 3 && i < data.length; i++) {
      // console.log(data[i].hashTag);
      article.innerHTML += `
        <div class="row ms-1 me-1 mt-4 mb-5 ">
            <div class="col-md-4 p-0 me-4">
                <img
                    class="articlesImage"
                    src="${data[i].images}"
                    alt=""
                />
            </div>
            <div id="detailPreviewArticles" class="col-md-7 ps-0 pe-0">
                <p class="hashTag mb-1 mt-2 p-0">
                    <span id="category">${
                      data[i].cathegory
                    }</span> <span id="dot"></span>
                    <a href="" class="hashTagArticle text-decoration-none" >${data[
                      i
                    ].hashTag.join(" ")}</a>
                </p>
                <a class="wrapperLinkTitleArticles" href="/assets/page/detailArticlepage/detailArticle.html?id=${
                  data[i].id
                }">
                    <h3 class="titleArticles">${data[i].titleArticle}</h3>
                </a>
                <p class="descArticles text-dark">
                    ${data[i].descArticle}
                </p>
                <p class="AuthorAndDate ">
                    <span id="authorArticle"> ${data[i].author}</span>
                    <span id="dot2"></span> <span id="dateArticle">${
                      data[i].date
                    }</span>
                </p>
            </div>
        </div>`;
    }
  });

// let article = document.getElementById("articlesContent");

// const detailArticle = (id) => {
//   localStorage.removeItem("idContent");
//   localStorage.setItem("idContent", `${id}`);
//   window.location.href = "/assets/page/detailArticlepage/detailArticle.html";
// };

// fetch("https://644b56f917e2663b9ded34b8.mockapi.io/article")
//   .then((res) => {
//     return res.json();
//   })
//   .then((data) => {
//     data.map((datas) => {
// article.innerHTML += `
//       <div class="row ms-1 me-1 mt-4 mb-5 " onclick="detailArticle(${
//         datas.id
//       })">
//           <div class="col-md-4 p-0 me-4">
//               <img
//                   class="articlesImage"
//                   src="${datas.images}"
//                   alt=""
//               />
//           </div>
//           <div id="detailPreviewArticles" class="col-md-7 ps-0 pe-0">
//               <p class="hashTag mb-1 mt-2 p-0">
//                   <span id="category">${
//                     datas.cathegory
//                   }</span> <span id="dot"></span>
//                   <a href="#" class="hashTagArticle text-decoration-none" >${datas.hashTag.join(
//                     " "
//                   )}</a>

//               </p>
//               <a class="wrapperLinkTitleArticles" href="#">
//                   <h3 class="titleArticles">${datas.titleArticle}</h3>
//               </a>
//               <p class="descArticles text-dark">
//                   ${datas.descArticle}
//               </p>
//               <p class="AuthorAndDate ">
//                   <span id="authorArticle"> ${datas.author}</span>
//                   <span id="dot2"></span> <span id="dateArticle">${
//                     datas.date
//                   }</span>
//               </p>
//           </div>
//       </div>`;
//     });
//   });
