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