<template>
  <div id="app">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">

                  <router-link tag="li" class="nav-item" exact to="/" active-class="active" >
                      <a class="nav-link">Home</a>
                  </router-link>
                  <router-link tag="li" class="nav-item " to="/Authorization" active-class="active" >
                      <a class="nav-link">Authorization</a>
                  </router-link>
                  <router-link tag="li" class="nav-item " to="/Registration" active-class="active" >
                      <a class="nav-link">Registration</a>
                  </router-link>
                  <router-link tag="li" class="nav-item " to="/Cart" active-class="active" >
                      <a class="nav-link">Cart</a>
                  </router-link>
                  <router-link tag="li" class="nav-item " to="/Catalog" active-class="active" >
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
