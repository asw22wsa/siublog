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
              <router-link class="nav-link" :to="{name : 'study.php'}">PHP</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{name : 'study.html'}">HTML</router-link>
            </li>
            <!-- <li class="nav-item">
              <a class="nav-link" href="#">CSS</a>
            </li> -->
            <li class="nav-item">
              <router-link class="nav-link" :to="{name : 'study.javascript'}">JAVASCRIPT</router-link>
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
                <li><router-link class="dropdown-item" :to="{name : 'community.free'}">FREE</router-link></li>
                <li><router-link class="dropdown-item" :to="{name : 'community.qna'}">Q&A</router-link></li>
                <li><router-link class="dropdown-item" :to="{name : 'community.notice'}">NOTICE</router-link></li>
              </ul>
            </li>
          </ul>
          <ul class="navbar-nav ms-auto d-none d-lg-flex">
            <li class="nav-item dropdown">
              <a class="nav-link dropdown" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <i class="bi bi-person-circle"></i>
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li><router-link class="dropdown-item" :to="{name:'login'}">LOGIN</router-link></li>
                <li><router-link class="dropdown-item" :to="{name:'register'}">JOIN</router-link></li>
              </ul>
            </li>
          </ul>
          <ul class="navbar-nav ms-auto d-flex d-lg-none">
            <li class="nav-item dropdown">
              <a class="nav-link dropdown" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                MEMBER
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li><router-link class="dropdown-item" :to="{name:'login'}">LOGIN</router-link></li>
                <li><router-link class="dropdown-item" :to="{name:'register'}">JOIN</router-link></li>
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
@media(min-width: 992px){
  .nav .wide > li.dropdown.open {
    position: static;
  }
  .nav .wide > li.dropdown.open .dropdown-menu {
    display:table; width: 100%; text-align: center; left:0; right:0;
  }
  .wide .dropdown-menu>li {
    display: table-cell;
  }
}
.bi-person-circle{
  font-size: 1.5rem;
}
.dropdown-item.active, .dropdown-item:active{
  border-radius: 5px;
}
</style>