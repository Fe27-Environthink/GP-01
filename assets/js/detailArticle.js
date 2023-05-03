const article = document.getElementById("articlesContent")

const urlParams = new URLSearchParams(window.location.search);
const articleId = urlParams.get('id');
console.log(articleId);
const fetchDetailArticle = fetch(`https://644b56f917e2663b9ded34b8.mockapi.io/article/${articleId}`)

fetchDetailArticle.then(response => response.json())
.then(data=>{
  document.getElementById("cathegory").textContent=data.cathegory;
  document.getElementById("hashTag").textContent=data.hashTag;
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