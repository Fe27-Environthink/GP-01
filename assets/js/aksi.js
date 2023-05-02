const aksiList = document.getElementById("aksi-list");
const fetchAksi = fetch("https://64506cd6e1f6f1bb22977ba9.mockapi.io/aksi")

fetchAksi
.then(response =>response.json())
.then(data =>{
    data.map((index) =>{
        aksiList.innerHTML +=`
        <div class="col-md-4 col-sm-6 mb-4 ">
            <div class="card" >
                <img src="https://i.ibb.co/hVRwTrJ/perbudakan-modern-di-laut-terus-berlanjut-polri-gagal-lindungi-abk-ikan-indonesia.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${index.nama}</h5>
                  <p class="card-text text-secondary"><icon class="fa fa-users text-secondary me-2 "> </icon>${index.jumlahDukungan} orang mendukung</p>
                  <a href="detailAksi.html?id=${index.id}" id="btn-aksi"   class="btn btn-success bg-main d-block ">Pelajari Selengkapnya</a>
                </div>
              </div>
              
        </div>
        `
    })
})



