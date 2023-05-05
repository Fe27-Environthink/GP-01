// $(document).ready(function() {
//     $('#register-form').submit(function(e) {
//       e.preventDefault();
//       var formdata = new FormData(this);
//       $.ajax({
//         url: 'https://mockapi.io/api/v1/users',
//         method: 'POST',
//         data: formdata,
//         contentType: false,
//         processData: false,
//         success: function(response) {
//           console.log(response);
//           alert('Registration success');
//           // redirect to login page or do something else
//         },
//         error: function(error) {
//           console.log(error);
//           alert('Registration failed');
//         }
//       });
//     });
//   });

const register=document.getElementById("register-form")
const inputNama = document.getElementById("username")
const inputEmail = document.getElementById("email")
const inputPassword = document.getElementById("password")
const inputKota = document.getElementById("kota")
const inputTelepon = document.getElementById("telepon")
register.addEventListener("submit",(e)=>{
    e.preventDefault()
    var data = {
        email: inputEmail.value,
        username: inputNama.value,
        password: inputPassword.value,
        address: inputKota.value,
        telp: inputTelepon.value,
        avatar:"./assets/images/unknown.png"

      };
    const urlUser="https://6451afe5a2860c9ed4f8f500.mockapi.io/users"
      fetch(urlUser, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  alert("register berhasil, silahkan login")
  window.location.href="login.html"
})