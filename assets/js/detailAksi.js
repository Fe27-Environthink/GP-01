const detailAksi = document.getElementById("aksi");

const urlParams = new URLSearchParams(window.location.search);
const aksiId = urlParams.get("id");
// console.log(aksiId);
const fetchDetailAksi = fetch(
  `https://64506cd6e1f6f1bb22977ba9.mockapi.io/aksi/${aksiId}`
);

fetchDetailAksi
  .then((response) => response.json())
  .then((data) => {
    document.getElementById("title").textContent = data.nama;
    document.getElementById("image").src = data.image;
    document.getElementById("paragraf1").textContent = data.paragraf1;
    document.getElementById("paragraf2").textContent = data.paragraf2;
    document.getElementById("paragraf-konklusi").textContent =
      data.paragrafKonklusi;
    document.getElementById("heading-form").textContent =
      data.jumlahDukungan + " orang yang sudah mendukung";
    document.getElementById("caption-bar").textContent = data.jumlahDukungan;
    document.getElementById("target").textContent = data.Target;
    let Persentase = (data.jumlahDukungan / data.Target) * 100;
    
    document.getElementById("bar-petisi").style.width = Persentase + "%";
  });

// form petisi
const formPetisi = document.getElementById("form-petisi");
const modalPetisi = document.getElementById("modal-petisi");
var modalInstance = new bootstrap.Modal(modalPetisi);
// mengambil form inputan
const checkPetisi = document.getElementById("flexCheckDefault");
const inputNama = document.getElementById("namaLengkap");

const inputanEmail = document.getElementById("email");
const inputanTelepon = document.getElementById("nomorTelepone");
const inputanKota = document.getElementById("kota");
// mengirim hasil inputan ke api
formPetisi.addEventListener("submit", (event) => {
  event.preventDefault();
//   mengambil nilai jumlah dukungan terakhir
  var jumlah = parseInt(document.getElementById("caption-bar").textContent)
    console.log();
  if (formValidation()) {
    var url = `https://64506cd6e1f6f1bb22977ba9.mockapi.io/aksi/${aksiId}/kontributor`;
    var urlAksi =`https://64506cd6e1f6f1bb22977ba9.mockapi.io/aksi/${aksiId}`
    
    var data = {
        email: inputanEmail.value,
        name: inputNama.value,
        kota: inputanKota.value,
        telepon: inputanTelepon.value,
        aksiId: aksiId
    };
    var dataAksi = {
        jumlahDukungan :jumlah+1
    }
    // $.post(url, data, function (data, status) {
    //   console.log("data berhasil dikirim");
    // });
    fetch(urlAksi,{
        method :"PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(dataAksi), 

    })

    fetch(url, {
        method: "POST", 

        headers: {
            "Content-Type": "application/json",
           
        },
  
        body: JSON.stringify(data), 
    })
    .then(response => response.json())
    .then(data => console.log(data))
  .catch(error => console.error(error));



    modalInstance.show();
    formPetisi.reload()
  }
});

function formReload() {
    window.location.href = window.location.href;
}
// form validation
function formValidation() {
  let valid = true;
  // validasi check box di form perisi
  if (!checkPetisi.checked) {
    valid = false;
    console.log("belum dicentang");
  }
  // else{
  //     console.log("sukes  dicetak");
  // }
  return valid;
}
