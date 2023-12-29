<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-black px-3" >
    <router-link class="navbar-brand d-flex" :to="{ name: 'Home' }">
      <div class="d-flex flex-column align-items-center p-2">
        <img alt="logo" src="../assets/img/logo.png" height="45" />
      </div>
    </router-link>
  </nav>
</template>

<script>

</script>






<style scoped>
a:hover {
  text-decoration: none;
}

.nav-link {
  text-transform: uppercase;
}

.navbar-nav .router-link-exact-active {
  border-bottom: 2px solid var(--bs-white);
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}
.btn-power {
  background-color: #f00; /* Red for power off, green for on */
  color: #fff;
}
.btn-power.on {
  background-color: #0f0; /* Green when active */
}
@media screen and (min-width: 768px) {
  nav {
    height: 64px;
  }
}
</style>
