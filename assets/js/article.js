const article = document.getElementById("articlesContent");
const endpoint = "https://644b56f917e2663b9ded34b8.mockapi.io/article";

fetch(endpoint)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    // menampilkan data dengan index 0-2
    for (let i = 0; i < 3 && i < data.length; i++) {
      article.innerHTML += `
        <div class="col-md-6 col-lg-4 mb-3 pt-4">
            <div class="card card-artikel h-100" >
                <img src=${data[i].images} class="card-img-top" alt="artikel">
                <div class="card-body">
                    <a class="wrapperLinkTitleArticles" href="detailArticle.html?id=${data[i].id}">
                        <h5 class="card-title">${data[i].titleArticle}</h5>
                    </a>
                    <p class="card-text" style="color: #595959; text-align: justify;">${data[i].descArticle}</p>
                    <p class="fw-bold" style="color: #6F7376;">
                        <span class="author">${data[i].author}</span> <span id="dot2"></span>
                        <span class="date">${data[i].date}</span>
                    </p>
                </div>
            </div>
        </div>
        `;
    }
    let btnArtikel = document.getElementById("artikel-lainnya");

    console.log(btnArtikel);
    let index = 3;
    // menambahkan 3 artikel setiap menekan tombol artikel lainnya
    btnArtikel.addEventListener("click", () => {
      for (let i = index; i < index + 3 && i < data.length; i++) {
        article.innerHTML += `
          <div class="col-lg-4 col-md-6 mb-3 pt-4">
              <div class="card card-artikel h-100" >
                  <img src=${data[i].images} class="card-img-top" alt="artikel">
                  <div class="card-body">
                      <a class="wrapperLinkTitleArticles" href="detailArticle.html?id=${data[i].id}">
                          <h5 class="card-title">${data[i].titleArticle}</h5>
                      </a>
                      <p class="card-text" style="color: #595959; text-align: justify;">${data[i].descArticle}</p>
                      <p class="fw-bold" style="color: #6F7376;">
                          <span class="author">${data[i].author}</span> <span id="dot2"></span>
                          <span class="date">${data[i].date}</span>
                      </p>
                  </div>
              </div>
          </div>
        `;
      }
      index = index + 3;
      if (index >= data.length) {
        btnArtikel.style.visibility = "hidden";
      }
    });
  });