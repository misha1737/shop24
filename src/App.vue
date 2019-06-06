<template>
  <div id="app">
      <div class="container">
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
          <app-catalog></app-catalog>
          <app-breadcrumbs></app-breadcrumbs>
          <app-user-menu></app-user-menu>
          <router-view></router-view>
      </div>
  </div>
</template>

<script>
    import userMenu from './components/UserMenu'
    import catalog from './components/CatalogMenu'
    import breadcrumbs from './components/Breadcrumbs'
export default {
  name: 'app',
    components: {
        appUserMenu:userMenu,
        appCatalog:catalog,
        appBreadcrumbs: breadcrumbs
    },


    }


</script>

<style lang="scss">

</style>
