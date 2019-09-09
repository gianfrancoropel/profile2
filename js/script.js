if(window.screen.width >=1024){
    pc =  document.querySelector('.pc');
    pc.innerHTML=`
    <div class="navbar navbar-expand navbar-dark sub text-nav colornav3">
    <ul class="navbar-nav">
      <li class=" active">
        <a class="nav-link" href="#">INICIO<span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">CONTACTO</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button"
          data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          PORTAFOLIO
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="https://google.com">PROGRAMACION</a>
          <a class="dropdown-item" href="https://pixelart.io">DISEÑO</a>
          <a class="dropdown-item" href="#">MARKETING</a>
        </div>
      </li>
    </ul>
  </div>                
    `
}else{
    phones = document.querySelector('.phones');
    phones.innerHTML=`
    <div class="row">

    <div class="justify-content-center  col-12 d-flex">
    
      <nav class="navbar navbar-expand navbar-dark sub text-nav colornav2">
        <ul class="navbar-nav">
          <li class=" active">
            <a class="nav-link" href="#">INICIO<span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">CONTACTO</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button"
              data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              PORTAFOLIO
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <a class="dropdown-item" href="https://google.com">PROGRAMACION</a>
              <a class="dropdown-item" href="https://pixelart.io">DISEÑO</a>
              <a class="dropdown-item" href="#">MARKETING</a>
            </div>
          </li>
        </ul>
      </nav>
    </div>
    </div>`;
}


