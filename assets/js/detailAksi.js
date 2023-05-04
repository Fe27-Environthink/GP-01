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

// form petisi
const formPetisi = document.getElementById("form-petisi");
const modalPetisi = document.getElementById("modal-petisi");
const modalError = document.getElementById("modal-email-error");

// modal
var modalInstance = new bootstrap.Modal(modalPetisi);
var modalErr = new bootstrap.Modal(modalError);
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
  var jumlah = parseInt(document.getElementById("caption-bar").textContent);
  console.log();
  if (formValidation()) {
    var url = `https://64506cd6e1f6f1bb22977ba9.mockapi.io/aksi/${aksiId}/kontributor`;
    var urlAksi = `https://64506cd6e1f6f1bb22977ba9.mockapi.io/aksi/${aksiId}`;

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
          //menampilkan modal error
          modalErr.show();
          setTimeout(function () {
            modalErr.hide();
           
          }, 3000);
        } else {
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
