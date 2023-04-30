let article = document.getElementById('artikelContent')
const endpoint = "https://644b56f917e2663b9ded34b8.mockapi.io/articel"

fetch(endpoint)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
    data.map((el) => {
        article.innerHTML += `
            <div class="col-sm-4 mb-3 pt-4 col-artikel">
                <div class="card card-artikel">
                    <img src=${el.images} class="card-img-top" alt="artikel">
                    <div class="card-body">
                        <h5 class="card-title">${el.titleArticle}</h5>
                        <p class="card-text" style="color: #595959; text-align: justify;">${el.descArticle}</p>
                        <p class="fw-bold" style="color: #6F7376;">
                            <span class="author">${el.author}</span> <span class="dot">.</span>
                            <span class="date">${el.date}</span>
                        </p>
                    </div>
                </div>
            </div>
        
        `
    })
 })