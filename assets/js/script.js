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
        <div class="row ms-1 me-1 mt-5 mb-5">
            <div class="col-md-4 p-0 me-4">
                <img
                    class="articlesImage"
                    src="${data[i].images}"
                    alt=""
                />
            </div>
            <div id="detailPreviewArticles" class="col-md-7 ps-0 pe-0 mt-3">
                <p class="hashTag mb-1 mt-2 p-0">
                    <span id="category">${
                      data[i].cathegory
                    }</span> <span id="dot"></span>
                    <a href="" class="hashTagArticle text-decoration-none" >${data[
                      i
                    ].hashTag.join(" ")}</a>
                </p>
                <a class="wrapperLinkTitleArticles" href="../../detailArticle.html?id=${
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

    let btnArtikel= document.getElementById("artikel-lainnya");

    console.log(btnArtikel);
    let index=3
    // menambahkan 3 artikel setiap menekan tombol artikel lainnya
    btnArtikel.addEventListener("click",()=>{
        for (let i = index; i < index+3 &&  i < data.length; i++) {
        article.innerHTML += `
        <div class="row ms-1 me-1 mt-5 mb-5">
            <div class="col-md-4 p-0 me-4">
                <img
                    class="articlesImage"
                    src="${data[i].images}"
                    alt=""
                />
            </div>
            <div id="detailPreviewArticles" class="col-md-7 ps-0 pe-0 mt-3">
                <p class="hashTag mb-1 mt-2 p-0">
                    <span id="category">${
                      data[i].cathegory
                    }</span> <span id="dot"></span>
                    <a href="" class="hashTagArticle text-decoration-none" >${data[
                      i
                    ].hashTag.join(" ")}</a>
                </p>
                <a class="wrapperLinkTitleArticles" href="../../detailArticle.html?id=${
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
        index=index+3
        if (index >= data.length) {
        btnArtikel.style.visibility="hidden"
      }
    })
  });

// login
// fungsi pengecekan status login
function checkLoginStatus() {
  const isLoggedIn = localStorage.getItem('isLoggedIn');
  if (!isLoggedIn) {
    // jika status belum login, arahkan ke halaman login
    window.location.href = 'login.html';
  } else {
  
  }
}

function cekLogin() {
  let valid = true
  const isLoggedIn = localStorage.getItem('isLoggedIn');
  if (!isLoggedIn) {
    // jika status belum login, arahkan ke halaman login
    valid= false
  } else {
   valid = true
  }

  return valid
}
// mengambil data user yang login dari local storage
const username = localStorage.getItem('user');
const avatar = localStorage.getItem('avatar');
// menampilasi tampilan navbar sesuai status login
const btnLogin = document.getElementById('button-login')

 if (cekLogin()) {
  btnLogin.innerHTML=`
  <li class="nav-item dropdown m-0">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          <img src="${avatar}" alt="" class = "" width="35px" srcset="">
          </a>
          <ul class="dropdown-menu dropdown-menu-end text-center">
          <li><h6 class="dropdown-header">${username}</h6></li>
           
            <li><hr class="dropdown-divider"></li>
            <li><a class="btn-danger m-2 text-white btn nav-link active ps-3 pe-3" href="#" onclick="logout()"
            >Logout</a
          ></li>
          </ul>
        </li>
  `
 }
function logout() {
  localStorage.removeItem('isLoggedIn');
  localStorage.removeItem('user');
  localStorage.removeItem('avatar');
 window.location.reload();


}
