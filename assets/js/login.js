const apiUrl = 'https://6451afe5a2860c9ed4f8f500.mockapi.io/users';

const loginForm = document.querySelector('#login-form');
const usernameInput = document.querySelector('#username');
const passwordInput = document.querySelector('#password');

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const username = usernameInput.value;
  const password = passwordInput.value;

  fetch(apiUrl)
    .then(response => response.json())
    .then(users => {
      const user = users.find(user => user.username === username && user.password === password);
      console.log(user);

      if (user) {
        localStorage.setItem('user', user.username);
    localStorage.setItem('isLoggedIn', true);
    localStorage.setItem('avatar',user.avatar)

    // Redirect ke halaman utama
    window.location.href = 'index.html';
      } else {
        alert('Username atau password salah.');
      }
    })
    .catch(error => console.error(error));
});

function isLoggedIn() {
    return localStorage.getItem('user') && localStorage.getItem('session');
  }



function cekLogin() {
  let valid = true
  const isLoggedIn = localStorage.getItem('isLoggedIn');
  if (!isLoggedIn) {
    // jika status belum login, arahkan ke halaman login
    valid= false
  } else {
   valid = true
  }

  return valid
}
// mengambil data user yang login dari local storage
const username = localStorage.getItem('user');
const avatar = localStorage.getItem('avatar');
// menampilasi tampilan navbar sesuai status login
const btnLogin = document.getElementById('button-login')

 if (cekLogin()) {
  btnLogin.innerHTML=`
  <li class="nav-item dropdown m-0">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          <img src="${avatar}" alt="" class = "rounded-circle m-0" width="35px" srcset="">
          </a>
          <ul class="dropdown-menu dropdown-menu-end text-center">
          <li><h6 class="dropdown-header">${username}</h6></li>
           
            <li><hr class="dropdown-divider"></li>
            <li><a class="btn-danger m-2 text-white btn nav-link active ps-3 pe-3" href="#" onclick="logout()"
            >Logout</a
          ></li>
          </ul>
        </li>
  `
 }
function logout() {
  localStorage.removeItem('isLoggedIn');
  localStorage.removeItem('user');
  localStorage.removeItem('avatar');
 window.location.reload();


}

  