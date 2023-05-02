const detailAksi = document.getElementById("aksi")

const urlParams = new URLSearchParams(window.location.search);
const aksiId = urlParams.get('id');
console.log(aksiId);
const fetchDetailAksi = fetch(`https://64506cd6e1f6f1bb22977ba9.mockapi.io/aksi/${aksiId}`)


fetchDetailAksi.then(response => response.json())
.then(data=>{
    document.getElementById("title").textContent=data.nama;
    document.getElementById("image").src=data.image
    document.getElementById("paragraf1").textContent=data.paragraf1;
    document.getElementById("paragraf2").textContent=data.paragraf2
    document.getElementById("paragraf-konklusi").textContent=data.paragrafKonklusi
    document.getElementById("heading-form").textContent=data.jumlahDukungan +" orang yang sudah mendukung"
    document.getElementById("caption-bar").textContent=data.jumlahDukungan 
    document.getElementById("target").textContent=data.Target
    let Persentase = (data.jumlahDukungan  / data.Target) * 100
    document.getElementById("bar-petisi").style.width=Persentase+"%"
})


// form petisi
const formPetisi = document.getElementById("form-petisi");
const modalPetisi = document.getElementById("modal-petisi")
var modalInstance = new bootstrap.Modal(modalPetisi);
const inputCheck = document.getElementById

formPetisi.addEventListener("submit",(event)=>{
    event.preventDefault();
       
    if (formValidation()) {
        modalInstance.show();
      }
      
    
})

// validasi check box di form perisi
const checkPetisi = document.getElementById("flexCheckDefault")

function formValidation() {
    let valid=true
    if (!checkPetisi.checked) {
        valid = false
        console.log("belum dicetak");
    }
    // else{
    //     console.log("sukes  dicetak");
    // }
    return valid;
    
}