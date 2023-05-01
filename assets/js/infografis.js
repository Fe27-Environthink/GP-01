let infografis = document.getElementById('infografisContent')

fetch("https://644d177e57f12a1d3dd777a1.mockapi.io/infografis")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
        // menampilkan data dengan index 0-2
        for (let i = 0; i < 3; i++) {
                 infografis.innerHTML += `
        <div class="col-sm-4 mb-3">
            <div class="card">
                <img src=${data[i].image} class="card-img-top" data-bs-toggle="modal" data-bs-target="#${data[i].id}Backdrop" alt="artikel">
                <div class="card-body">
                    <h1 class="card-title fs-6" style="cursor: pointer;" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                        ${data[i].titleInfografis}
                    </h1>
                    <div class="modal fade" id="${data[i].id}Backdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="staticBackdropLabel">${data[i].titleInfografis}</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <img src=${data[i].image} class="card-img-top" alt="infografis">
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        `
        console.log(data[i]);    
        }
        let btnInfografis= document.getElementById("infografis-lainnya");

        let index=3
        // menambahkan 3 infografis setiap menekan tombol infografis lainnya
        btnInfografis.addEventListener("click",()=>{
           for (let i = index; i < index+3 &&  i < data.length ; i++) {
            infografis.innerHTML += `
            <div class="col-sm-4 mb-3">
                <div class="card">
                    <img src=${data[i].image} class="card-img-top" data-bs-toggle="modal" data-bs-target="#${data[i].id}Backdrop" alt="artikel">
                    <div class="card-body">
                        <h1 class="card-title fs-6" style="cursor: pointer;" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                            ${data[i].titleInfografis}
                        </h1>
                        <div class="modal fade" id="${data[i].id}Backdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                            <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="staticBackdropLabel">${data[i].titleInfografis}</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <img src=${data[i].image} class="card-img-top" alt="infografis">
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            `
           }
           index=index+3
        })
   
 })

//  code original
 // data.map((el) => {
    //     infografis.innerHTML += `
    //     <div class="col-sm-4 mb-3">
    //         <div class="card">
    //             <img src=${el.image} class="card-img-top" data-bs-toggle="modal" data-bs-target="#staticBackdrop" alt="artikel">
    //             <div class="card-body">
    //                 <h1 class="card-title fs-6" style="cursor: pointer;" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
    //                     ${el.titleInfografis}
    //                 </h1>
    //                 <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    //                     <div class="modal-dialog">
    //                     <div class="modal-content">
    //                         <div class="modal-header">
    //                             <h1 class="modal-title fs-5" id="staticBackdropLabel">${el.titleInfografis}</h1>
    //                             <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    //                         </div>
    //                         <div class="modal-body">
    //                             <img src=${el.image} class="card-img-top" alt="infografis">
    //                         </div>
    //                     </div>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
        
    //     `
    // })