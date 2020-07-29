

let jj = document.getElementById('js_header').outerHTML = 
`<nav class="navbar navbar-expand-lg navbar-light color-darkBlue nav-background-gradiant">

<img src="/images/evercharter.svg"  height="30" class="d-inline-block align-top pr-2" style="margin-left: -1em;" alt="">

<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
  <span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse justify-content-between" id="navbarNavDropdown">
  <ul class="navbar-nav">
    <li class="nav-item active">
      <a class="nav-link" href="index.html">Home <span class="sr-only">(current)</span></a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="portal.html">Portal</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="clubs.html">Clubs</a>
    </li>
    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        About
      </a>
      <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
        <a class="dropdown-item" href="faculty.html">Faculty and Staff</a> 
        <a class="dropdown-item" href="why-charter.html">Why Charter</a>
        <a class="dropdown-item" href="register.html">Register</a>
        <a class="dropdown-item" href="#" disabled>Contact Us</a>
      </div>
    </li>
  </ul>
  <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search">
    </form>
</div> 
</nav>
<body>`


let j = document.getElementById('js_footer').outerHTML =
`<div class="jumbotron jumbotron-fluid main-color mb-0">
<div class="container">
  <h1 class="display-5">footer</h1>
  <p class="lead">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis soluta quas incidunt? 
    Dolores nostrum autem ad ipsum exercitationem earum, recusandae asperiores porro delectus, mollitia veritatis
    quam unde explicabo cumque tenetur!</p>`
    
