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
    let link = `detailAksi.html?id=${data.id}`;

    let desc = `${data.jumlahDukungan}  orang yang sudah mendukung`;
    let paragrafPetisi = data.paragrafPetisi;
    // dom aksi sesuai dengan jumlah orang yang sudah mengisi
    if (data.Target - data.jumlahDukungan == 0) {
      desc = "Petisi Mencapai Kemenangan";
      document.getElementById("caption-bar").textContent = 0;
      document.getElementById("bar").style.visibility = "hidden";
      document.getElementById("figcaption").innerHTML = "";
      document.getElementById(
        "form-petisi"
      ).innerHTML = `<a class="btn btn-success bg-main d-block fw-bold" href="aksi.html">Ikuti Aksi Yang Lainnya</a>`;
      paragrafPetisi =
        "mari kita lanjutkan perjuangan kita dengan bergabung dalam aksi-aksi lain yang sejenis untuk terus memperjuangkan hak-hak kita dan membawa perubahan positif bagi masyarakat. Bersama-sama kita bisa mewujudkan perubahan yang kita inginkan!";
    } else if (data.jumlahDukungan == 0) {
      desc = "belum ada dukungan";
    }

  
    
    document.getElementById("title").textContent = data.nama;
    document.getElementById("image").src = data.image;
    document.getElementById("paragraf1").textContent = data.paragraf1;
    document.getElementById("paragraf2").textContent = data.paragraf2;
    document.getElementById("paragraf-konklusi").textContent =
      data.paragrafKonklusi;
    document.getElementById("paragarfPetisi").textContent = paragrafPetisi;
    document.getElementById("heading-form").textContent = desc;
    document.getElementById("caption-bar").textContent = data.jumlahDukungan;
    document.getElementById("target").textContent = data.Target;
    let Persentase = (data.jumlahDukungan / data.Target) * 100;

    document.getElementById("bar-petisi").style.width = Persentase + "%";
  });



// modal

const modalPetisi = document.getElementById("modal-petisi");
var modalInstance = new bootstrap.Modal(modalPetisi);
// form petisi
const formPetisi = document.getElementById("form-petisi");
// mengambil form inputan
const checkPetisi = document.getElementById("flexCheckDefault");
const inputNama = document.getElementById("namaLengkap");
const inputanEmail = document.getElementById("email");
const inputanTelepon = document.getElementById("nomorTelepone");
const inputanKota = document.getElementById("kota");

  
  // mengambil data user dari local storage
inputNama.addEventListener("click",(event)=>{
  event.preventDefault()
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const nama = localStorage.getItem("user");
  const email = localStorage.getItem("email");
  const kota = localStorage.getItem("city"); 
  const nomor = localStorage.getItem("telp"); 
  // mengisi form sesuai data user jika user sudah login
  if (isLoggedIn) {
    inputNama.value = nama;
    inputanEmail.value = email;
    inputanTelepon.value = nomor;
    inputanKota.value = kota;


    
  }
})
// mengirim hasil inputan ke api
formPetisi.addEventListener("submit", (event) => {
  event.preventDefault();
  //   mengambil nilai jumlah dukungan terakhir
  var jumlah = parseInt(document.getElementById("caption-bar").textContent);
  console.log();
  if (formValidation()) {
    var url = `https://64506cd6e1f6f1bb22977ba9.mockapi.io/aksi/${aksiId}/kontributor`;
    var urlAksi = `https://64506cd6e1f6f1bb22977ba9.mockapi.io/aksi/${aksiId}`;
    // data yang akan dikirim ke API
    var data = {
      email: inputanEmail.value,
      name: inputNama.value,
      kota: inputanKota.value,
      telepon: inputanTelepon.value,
      aksiId: aksiId,
    };
    var dataAksi = {
      jumlahDukungan: jumlah + 1,
    };
    //  pengecekan email yang sama
    fetch(url)
      .then((response) => response.json())
      .then((kontributor) => {
        const email = kontributor.find(
          (email) => email.email === inputanEmail.value
        );
        if (email) {
          
          showError("Email sudah digunakan !","Silahkan gunakan email yang lain untuk menandatangai petisi ini")
        } else {
          // menyimpan data kontributor ke api dan mengupdate data petisi
          fetch(urlAksi, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(dataAksi),
          });

          fetch(url, {
            method: "POST",

            headers: {
              "Content-Type": "application/json",
            },

            body: JSON.stringify(data),
          })
            .then((response) => response.json())
            .then((data) => console.log(data))
            .catch((error) => console.error(error));

          modalInstance.show();
          setTimeout(function () {
            modalInstance.hide();
            window.location.href = window.location.href;
          }, 1000);
        }
      });
  }
});

// fungsi popup modal error
function showError(heading,pesan) {
    const Err = document.getElementById("modal-error");
    var showErr = new bootstrap.Modal(Err);
    const pesanErr = document.getElementById("pesan-error")
    const headingErr = document.getElementById("heading-error")
    headingErr.textContent = heading;
    pesanErr.textContent = pesan;
    
    showErr.show();
          setTimeout(function () {
            showErr.hide();
          }, 3000);
}

// form validation
function formValidation() {
  let valid = true;
  // validasi check box di form perisi
  if (!checkPetisi.checked) {
    valid = false;
    console.log("belum dicentang");
  }

  // mengecek apakah user sudah login saat mensubmit petisi
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  if (!isLoggedIn) {
    showError("Akses ditolak: Login dibutuhkan","Silahkan Login untuk dapat mengisi petisi")
    valid = false;
    
  }
 
  return valid;
}
