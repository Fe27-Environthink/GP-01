function fetchData() {
const aksiList = document.getElementById("aksi-list");
const fetchAksi = fetch("https://64506cd6e1f6f1bb22977ba9.mockapi.io/aksi")

fetchAksi
.then(response =>response.json())
.then(data =>{
    for (let i = 0; i < 3; i++) {
       let link =`detailAksi.html?id=${data[i].id}`
       let  classLink="btn-success bg-main" 
       let desc =`${data[i].jumlahDukungan} orang mendukung`

        if (data[i].Target-data[i].jumlahDukungan==0) {
            classLink= "btn-secondary"
            desc = "Petisi Mencapai Kemenangan"
        }
        else if (data[i].jumlahDukungan==0) {
            desc = "belum ada dukungan" 
        }
  
        aksiList.innerHTML +=`
        <div class="col-md-4 col-sm-6 mb-4 ">
            <div class="card card-aksi h-100" >
                <img src="${data[i].image}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h6 class="card-title">${data[i].nama}</h6>
                  <p class="card-text text-secondary"><icon class="fa fa-users text-secondary me-2 "> </icon>${desc}</p>
                  <a href="${link}" id="btn-aksi" class="btn d-block ${classLink} ">Pelajari Selengkapnya</a>
                </div>
              </div>
              
        </div>
        `
    }
    console.log(data);
    const btnAksi = document.getElementById("btn-aksi-lainnya");
    
    console.log(btnAksi);
    index=3
       btnAksi.addEventListener("click",()=>{
        for (let i = index; i < index+3 && i <data.length; i++) {
            let link =`detailAksi.html?id=${data[i].id}`
            let  classLink="btn-success bg-main" 
            let desc =`${data[i].jumlahDukungan} orang mendukung`
     
             if (data[i].Target-data[i].jumlahDukungan==0) {
                 classLink= "btn-secondary"
                 desc = "Petisi Mencapai Kemenangan"
             }
             else if (data[i].jumlahDukungan==0) {
                 desc = "belum ada dukungan"
                 
             }
            aksiList.innerHTML +=`
            <div class="col-md-4 col-sm-6 mb-4 ">
            <div class="card h-100" >
                <img src="${data[i].image}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h6 class="card-title">${data[i].nama}</h6>
                  <p class="card-text text-secondary"><icon class="fa fa-users text-secondary me-2 "> </icon>${desc}</p>
                  <a href="${link}" id="btn-aksi"    class="btn d-block ${classLink} ">Pelajari Selengkapnya</a>
                </div>
              </div>
              
        </div>
        `
        }
        index=index+3
        if (index>=data.length) {
            btnAksi.style.visibility="hidden"
        }
    })
})
}

window.addEventListener('load', fetchData);



