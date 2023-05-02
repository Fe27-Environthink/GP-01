

function fetchData() {
    const aksiList = document.getElementById("aksi-list");
const fetchAksi = fetch("https://64506cd6e1f6f1bb22977ba9.mockapi.io/aksi")

fetchAksi
.then(response =>response.json())
.then(data =>{
    for (let i = 0; i < 3; i++) {
        
        aksiList.innerHTML +=`
        <div class="col-md-4 col-sm-6 mb-4 ">
            <div class="card" >
                <img src="${data[i].image}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${data[i].nama}</h5>
                  <p class="card-text text-secondary"><icon class="fa fa-users text-secondary me-2 "> </icon>${data[i].jumlahDukungan} orang mendukung</p>
                  <a href="detailAksi.html?id=${data[i].id}" id="btn-aksi"   class="btn btn-success bg-main d-block ">Pelajari Selengkapnya</a>
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
            aksiList.innerHTML +=`
        <div class="col-md-4 col-sm-6 mb-4 ">
            <div class="card" >
                <img src="${data[i].image}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${data[i].nama}</h5>
                  <p class="card-text text-secondary"><icon class="fa fa-users text-secondary me-2 "> </icon>${data[i].jumlahDukungan} orang mendukung</p>
                  <a href="detailAksi.html?id=${data[i].id}" id="btn-aksi"   class="btn btn-success bg-main d-block ">Pelajari Selengkapnya</a>
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
    // data.map((index) =>{
    //     aksiList.innerHTML +=`
    //     <div class="col-md-4 col-sm-6 mb-4 ">
    //         <div class="card" >
    //             <img src="${index.image}" class="card-img-top" alt="...">
    //             <div class="card-body">
    //               <h5 class="card-title">${index.nama}</h5>
    //               <p class="card-text text-secondary"><icon class="fa fa-users text-secondary me-2 "> </icon>${index.jumlahDukungan} orang mendukung</p>
    //               <a href="detailAksi.html?id=${index.id}" id="btn-aksi"   class="btn btn-success bg-main d-block ">Pelajari Selengkapnya</a>
    //             </div>
    //           </div>
              
    //     </div>
    //     `
    // })
})
}
window.addEventListener('load', fetchData);



