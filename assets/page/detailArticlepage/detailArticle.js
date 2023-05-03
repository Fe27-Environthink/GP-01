const article = document.getElementById("articlesContent");

const urlParams = new URLSearchParams(window.location.search);
const articleId = urlParams.get("id");
console.log(articleId);
const fetchDetailArticle = fetch(
  `https://644b56f917e2663b9ded34b8.mockapi.io/article/${articleId}`
);

fetchDetailArticle
  .then((response) => response.json())
  .then((data) => {
    document.getElementById("cathegory").textContent = data.cathegory;
    document.getElementById("hashTag").textContent = data.hashTag;
    document.getElementById("titleArticle").textContent = data.titleArticle;
    document.getElementById("author").textContent = data.author;
    document.getElementById("date").textContent = data.date;
    document.getElementById("images").src = data.images;
    document.getElementById("paragraf1").textContent = data.paragraf1;
    document.getElementById("paragraf2").textContent = data.paragraf2;
    document.getElementById("paragraf3").textContent = data.paragraf3;
    document.getElementById("paragraf4").textContent = data.paragraf4;
    document.getElementById("paragraf5").textContent = data.paragraf5;
    document.getElementById("paragraf6").textContent = data.paragraf6;
    document.getElementById("paragraf7").textContent = data.paragraf7;
    document.getElementById("paragraf8").textContent = data.paragraf8;
    document.getElementById("paragraf9").textContent = data.paragraf9;
    document.getElementById("paragraf10").textContent = data.paragraf10;
  });

// let article = document.getElementById("articlesContent");

// const getData = async () => {
//   const response = await fetch(
//     "https://64401a47b9e6d064be0800c9.mockapi.io/test"
//   );
//   const data = await response.json();
//   fetchContent(data);
// };

// const fetchContent = (getApi1) => {
//   // console.log(getApi1);

//   if (typeof getApi1 != "undefined") {
//     let contentId = parseInt(localStorage.getItem("idContent")) - 1;

//     fetch("https://64401a47b9e6d064be0800c9.mockapi.io/test/1/detailArticle")
//       .then((res) => {
//         return res.json();
//       })
//       .then((data) => {
//         // console.log(data[0].detailArticle1)
//         // console.log(data[contentId]);
//         article.innerHTML += `
//           <div class="row ms-1 me-1 mt-5">
//           <div class="col-md 12 mb-3">
//             <p class="hashTag m-0 p-0">
//               <span id="category">${
//                 getApi1[contentId].cathegory
//               }</span> <span id="dot"></span>
//               <span id="hashTagArticle">${getApi1[contentId].hashTag.join(
//                 " "
//               )}</span>
//             </p>
//             <h1 class="Judul">${getApi1[contentId].titleArticles}</h1>
//             <p class="text-dark">
//               By <span id="Author " class="fw-bold">${
//                 getApi1[contentId].Author
//               }</span>
//               <i class="bi bi-clock ms-1 me-1"></i>
//               <span id="dateArticle">${getApi1[contentId].date}</span>
//             </p>
//           </div>
//           <div class="col-md-12 p-0 me-4 text-center">
//             <img
//               class="articlesImage"
//               src="${getApi1[contentId].images}"
//               alt=""
//             />
//           </div>
//           <div id="detailPreviewArticles" class="col-md-12 ps-0 pe-0 mt-5 mb-5">
//             <p class="detailArticle text-dark">
//               ${data[contentId].detailArticle1}
//             </p>
//             <p class="detailArticle text-dark">
//             ${data[contentId].detailArticle2}
//             </p>
//             <p class="detailArticle text-dark">
//             ${data[contentId].detailArticle3}
//             </p>
//             <p class="detailArticle text-dark">${
//               data[contentId].detailArticle4
//             }</p>
//             <p class="detailArticle text-dark">${
//               data[contentId].detailArticle5
//             }</p>
//             <p class="detailArticle text-dark">${
//               data[contentId].detailArticle6
//             }</p>
//             <p class="detailArticle text-dark">${
//               data[contentId].detailArticle7
//             }</p>
//             <p class="detailArticle text-dark">${
//               data[contentId].detailArticle8
//             }</p>
//             <p class="detailArticle text-dark">${
//               data[contentId].detailArticle9
//             }</p>
//             <p class="detailArticle text-dark">${
//               data[contentId].detailArticle10
//             }</p>
//             </div>
//         </div>`;
//       });
//   }
// };

// getData();
// fetchContent();
