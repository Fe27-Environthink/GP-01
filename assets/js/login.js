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
    localStorage.setItem('email',user.email)
    localStorage.setItem('telp',user.telp)
    localStorage.setItem('city',user.address)

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
