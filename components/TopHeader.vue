<template>
  <header class="main-header">  
  <nav class="main-navbar">
        <ul class="nav-links">
        <nuxt-link to="/"  tag="li" class="nav-link"><a>Home</a></nuxt-link>
        <nuxt-link to="/en/portfolio"  tag="li" class="nav-link"><a>Portfolio</a></nuxt-link>
        </ul>

      <div class="logo">
        <h6>Kamil Trojnar</h6>
        <img src="~/assets/logo2.svg" alt="face">
        
      </div>      
        <ul class="nav-links">
        <nuxt-link to="/en/blog"  tag="li" class="nav-link"><a>English</a></nuxt-link>
        <nuxt-link to="/pl/blog"  tag="li" class="nav-link"><a>Polski</a></nuxt-link>
        </ul>    
  </nav>
  </header>

</template>

<style lang="scss">
$color1: #608060;
$color2: #3D3D34;
$color3: #f3f3e5;
$color4: #cebe9f;
$color5: #030301;

h6{
  color: $color3;
}

*{
  margin:0px;
  padding:0px;
  box-sizing:border-box;
}

header{
  background-color: $color1;
  width:100%; 
  height:4rem;
}

nav{
  display:flex; 
  justify-content: space-around;
  height:100%;
}

.nav-links{
  list-style: none;
  height:100%;
  display:flex;
  justify-content: center;
  align-items: center;
}

.nav-link{
  height:100%;
  display:flex;
  justify-content: center;
  align-items: center;
  margin:0 1rem;
}

.nav-link{ 
  &:hover{  
    border-bottom: 3px solid $color2;
  }
  
  a{
  display: block;
  text-decoration: none;
  color: $color4;} 
}

.nuxt-link-exact-active{
    border-bottom: 5px solid $color2;    
    a{
      color: $color2;
    }}

.logo {
text-align: center;
align-items: flex-end;
  img{
    height:2.35rem;
    bottom: 0;    
}}

@media screen and (max-width: 768px) {
    nav{
      display: flex;
      flex-direction: column-reverse;
    }
    
    header{
      height: 12rem;

    }
    .nav-link{ 
  &:hover{  
    border: 3px solid $color2;
  }}
  .nuxt-link-exact-active{
    border: 5px solid $color2; }
    
    .nav-links{
      display: inline-flex;
    }

    li{
      width: 100%;

    }
    .logo{
      display: none;
    }
}
</style>
