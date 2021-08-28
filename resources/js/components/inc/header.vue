<template>
  <div class="header bg-dark menu sticky-top">
    <nav class="navbar navbar-expand-lg navbar-dark container">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">SIU BLOG</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav wide">
            <!-- <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li> -->
            <li class="nav-item">
              <a class="nav-link" href="#">PHP</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">HTML</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">CSS</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">JAVASCRIPT</a>
            </li>
            <!-- <li class="nav-item dropdown">
              <a class="nav-link dropdown" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                STUDY
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li><a class="dropdown-item" href="#">PHP</a></li>
                <li><a class="dropdown-item" href="#">HTML</a></li>
                <li><a class="dropdown-item" href="#">CSS</a></li>
                <li><a class="dropdown-item" href="#">JAVASCRIPT</a></li>
              </ul>
            </li> -->
            <li class="nav-item dropdown">
              <a class="nav-link dropdown" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                COMMUNITY
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li><a class="dropdown-item" href="#">FREE</a></li>
                <li><a class="dropdown-item" href="#">Q&A</a></li>
                <li><a class="dropdown-item" href="#">NOTICE</a></li>
              </ul>
            </li>
          </ul>
          <ul class="navbar-nav ms-auto">
            <li class="nav-item dropdown">
              <a class="nav-link dropdown" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <i class="bi bi-person-circle"></i>
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li><a class="dropdown-item" href="#">LOGIN</a></li>
                <li><a class="dropdown-item" href="#">JOIN</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
$(document).ready(function(){
    $(window).scroll(function(){
        if($(window).scrollTop() != 0){
            $(".menu").css({"opacity":"0.8"});  
        }
        else{
            $(".menu").css({"opacity":"1"});
        }

    })
})

export default {
  name:'',
  components : {},
  data(){
    return {
      sampleData:''
    };
  },
  setup(){},
  created(){},
  mounted(){},
  methods: {
  },
}
</script>
<style scoped>
.nav .wide > li.dropdown.open {
  position: static;
}
.nav .wide > li.dropdown.open .dropdown-menu {
  display:table; width: 100%; text-align: center; left:0; right:0;
}
.wide .dropdown-menu>li {
  display: table-cell;
}
.bi-person-circle{
  font-size: 1.5rem;
}
</style>