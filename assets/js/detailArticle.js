const article = document.getElementById("articlesContent")

const urlParams = new URLSearchParams(window.location.search);
const articleId = urlParams.get('id');
console.log(articleId);
const fetchDetailArticle = fetch(`https://644b56f917e2663b9ded34b8.mockapi.io/article/${articleId}`)

fetchDetailArticle.then(response => response.json())
.then(data=>{
  document.getElementById("cathegory").textContent=data.cathegory;
  document.getElementById("hashTag").textContent=data.hashTag.join(" ");
  document.getElementById("titleArticle").textContent=data.titleArticle;
  document.getElementById("author").textContent=data.author;
  document.getElementById("date").textContent=data.date;
  document.getElementById("images").src=data.images;
  document.getElementById("paragraf1").textContent=data.paragraf1;
  document.getElementById("paragraf2").textContent=data.paragraf2;
  document.getElementById("paragraf3").textContent=data.paragraf3;
  document.getElementById("paragraf4").textContent=data.paragraf4;
  document.getElementById("paragraf5").textContent=data.paragraf5;
  document.getElementById("paragraf6").textContent=data.paragraf6;
  document.getElementById("paragraf7").textContent=data.paragraf7;
  document.getElementById("paragraf8").textContent=data.paragraf8;
  document.getElementById("paragraf9").textContent=data.paragraf9;
  document.getElementById("paragraf10").textContent=data.paragraf10;
    
})

//form
const modalKomentar = document.getElementById("modal-komentar");
const postsList = document.getElementById('posts-list');
const addPostForm = document.querySelector('.add-post-form');

// modal
var modalInstance = new bootstrap.Modal(modalKomentar);

// form inputan
const emailValue = document.getElementById('email-value');
const nameValue = document.getElementById('name-value');
const komentarValue = document.getElementById('komentar-value');
const endpoint = "https://644b56f917e2663b9ded34b8.mockapi.io/komentar";

const renderPosts = (posts) => {
    posts.map((post) => {
        postsList.innerHTML += `
        <div class="card bg-light mt-4" style="width: 50rem;">
            <div class="card-body">
                <h5 class="card-title">${post.name}</h5>
                <h6 class="card-subtitle mb-2 text-body-secondary">${post.createdAt} <span id="dot2"></span> <span> ${post.email}</span></h6>
                <p class="card-text text-dark">${post.komentar}</p>
                <!-- <a href="#" class="card-link">Card link</a>
                <a href="#" class="card-link">Another link</a> -->
            </div>
        </div>
      `;
    });
}

// Get dan Read posts
// GET

fetch(endpoint)
    .then((res) => {
        return res.json();
    })
    .then((data) => renderPosts(data));

// create new post
// POST
addPostForm.addEventListener('submit', (e) => {
    e.preventDefault();

    fetch(endpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: emailValue.value,
            name: nameValue.value,
            komentar: komentarValue.value
        })
    })
        .then(res => res.json())
        .then(data => {
          const dataArr = [];
          dataArr.push(data);
          renderPosts(dataArr);

          modalInstance.show();
          setTimeout(function () {
            modalInstance.hide();
            window.location.href = window.location.href;
          }, 1000);
        })
})