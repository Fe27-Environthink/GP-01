const article = document.getElementById("articlesContent");
const inputValue = document.getElementById("inputSearchArticle");
const btnCari = document.getElementById("btnCari");

const endpoint = "https://644b56f917e2663b9ded34b8.mockapi.io/article";

const searchArticle = () => {
  // console.log(inputValue.value);
  fetch(endpoint)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(inputValue.value);
      const searchResult = data.filter((obj) =>
        obj.titleArticle.includes(inputValue.value)
      );

      console.log(searchResult);
      if (searchResult.length == 0 || inputValue.value == "") {
        article.innerHTML = "";
        article.innerHTML += `
          <div class="wrapperNotFound col-md-6 col-11 mx-auto mb-5 pt-3 pb-5 ps-4 pe-4">
            <p class="titleNotFoundArticle text-dark mb-2">
              Maaf, kami tidak dapat menemukan apa yang anda cari.
            </p>
            <ul class="bg-dangesr m-0">
              <li class="possibleNotFoundKeyword1 text-secondary">
                Cek kesalahan dalam penulisan, dan coba pencarian lagi
              </li>
              <li class="possibleNotFoundKeyword2 text-secondary">
                Coba lakukan pencarian lain
              </li>
            </ul>
          </div>
        `;
      } else {
        article.innerHTML = "";
        searchResult.map((datas, indexs) => {
          article.innerHTML += `
          <div class="col-sm-4 mb-3 pt-4">
            <div class="card card-artikel">
              <img
                src="${datas.images}"
                class="card-img-top"
                alt="artikel"
              />
              <div class="card-body">
                <a
                  class="wrapperLinkTitleArticles"
                  href="detailArticle.html?id=${indexs + 1}"
                >
                  <h5 class="card-title">${datas.titleArticle}</h5>
                </a>
                <p class="card-text" style="color: #595959; text-align: justify">
                  ${datas.descArticle}
                </p>
                <p class="fw-bold" style="color: #6f7376">
                  <span class="author">${datas.author}</span>
                  <span id="dot2"></span>
                  <span class="date">${datas.date}</span>
                </p>
              </div>
            </div>
          </div>`;
        });
      }
    });
};

btnCari.addEventListener("click", searchArticle);
