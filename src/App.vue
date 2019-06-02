<template>
  <div id="app">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">

                  <router-link tag="li" class="nav-item" exact to="/" active-class="active" >
                      <a class="nav-link">Home</a>
                  </router-link>
                  <router-link tag="li" class="nav-item " to="/authorization" active-class="active" >
                      <a class="nav-link">Authorization</a>
                  </router-link>
                  <router-link tag="li" class="nav-item " to="/registration" active-class="active" >
                      <a class="nav-link">Registration</a>
                  </router-link>
                  <router-link tag="li" class="nav-item " to="/cart" active-class="active" >
                      <a class="nav-link">Cart</a>
                  </router-link>
                  <router-link tag="li" class="nav-item " to="/catalog" active-class="active" >
                      <a class="nav-link">Catalog</a>
                  </router-link>


              </ul>
          </div>
      </nav>
      <router-view></router-view>

  </div>
</template>

<script>

export default {
  name: 'app',

}
</script>

<style lang="scss">

</style>
