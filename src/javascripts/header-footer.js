

document.getElementById('js_header').outerHTML = 
`<nav class="navbar navbar-expand-lg navbar-light color-darkBlue nav-background-gradiant ">
<a href="/"><img src="/images/evercharter.svg" type="button" href="index.html"  height="30" class="d-inline-block align-top pr-2" style="margin-left: -1em;" alt=""></a>

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

</nav >
<body>`


document.getElementById('js_footer').outerHTML =
`<div class="jumbotron jumbotron-fluid main-color mb-0">
<div class="container">
    <div class="row">
      <div class="col-md-4  mb-2">
          <div class="text-center"><button class="btn main-color bgO-hover text-white  border border-2 border-white p-2 mb-2 col-6">Facebook</button></div>
          <div class="text-center"><button class="btn main-color bgO-hover text-white  border border-2 border-white p-2 mb-2 col-6">Twitter</button></div>
          <div class="text-center"><button class="btn main-color bgO-hover text-white  border border-2 border-white p-2 col-6">Blog</button></div>
      </div>
      <div class="col-md-4 mb-2 px-0  pt-2  pb-2 border border-white border-2 w-50 mx-auto">
      <div class="text-center">Address</div>
      <div class="text-center">1111 s School ln</div>
      <div class="text-center">Ogden, Ut 84401</div>
      <div class="text-center mt-3">everchart@gmail.com</div>
      </div>
      <div class="col-md-4">
          <div class="text-center" style="text-decoration: underline;">Office Phone</div>
          <div class="text-center">Phone: 555-555-555</div>
          <div class="text-center" style="text-decoration: underline;">Nurse</div>
          <div class="text-center">Phone: 535-551-6666</div>
          <div class="text-center" style="text-decoration: underline;">Sheriff</div>
          <div class="text-center">Phone: 555-5556-2221</div>
      </div>
    </div>  
</div>`
    
