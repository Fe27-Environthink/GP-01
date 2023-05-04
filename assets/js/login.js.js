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
        localStorage.setItem('user', JSON.stringify(user.username));
    localStorage.setItem('session', 'login');

    // Redirect ke halaman utama
    window.location.href = window.location.href;
      } else {
        alert('Username atau password salah.');
      }
    })
    .catch(error => console.error(error));
});

function isLoggedIn() {
    return localStorage.getItem('user') && localStorage.getItem('session');
  }