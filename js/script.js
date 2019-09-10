if(window.screen.width >=1024){
    pc =  document.querySelector('.pc');
    pc.innerHTML=`
    <div class="navbar navbar-expand navbar-dark sub text-nav colornav3">
    <ul class="navbar-nav">
      <li class=" active">
        <a class="nav-link" href="#">INICIO<span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="https://api.whatsapp.com/send?phone=542616506810&text=Gdesign">CONTACTO</a>
        <li class="nav-item">
        <a class="nav-link" href="#portafoliu">PORTAFOLIO</a>
      </li>
    </ul>
  </div>                
    `
}else{
    phones = document.querySelector('.phones');
    phones.innerHTML=`
    <div class="row">

    <div class="justify-content-center  col-12 d-flex">
    
      <nav class="navbar  navbar-expand navbar-dark sub text-nav colornav2">
        <ul class="navbar-nav">
          <li class=" active">
            <a class="nav-link" href="#">INICIO<span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="https://api.whatsapp.com/send?phone=542616506810&text=Gdesign">CONTACTO</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#portafoliu">PORTAFOLIO</a>
          </li>
        </ul>
      </nav>
    </div>
    </div>`;
}


