<template>
  <div id="nav" class="nav">
      <router-link to="/" class="brand">Real World Events</router-link>

      <nav>
        <router-link style="padding-right: 10px;" :to="{name: 'event-create'}">New user</router-link>
        <router-link style="padding-right: 10px;" :to="{name: 'event-list'}">List</router-link>
        <router-link style="padding-right: 10px;" :to="{name: 'event-create'}">Create</router-link>
        <router-link style="padding-right: 10px;" :to="{name: 'event-create'}">Logout</router-link>
      </nav>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.nav {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 60px;
  background: #F0F0F0;
  width: 100%;
}

.nav > .brand {
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 1.5em;
  color: #39b982;
  text-decoration: none;
}

.nav .nav-item {
  box-sizing: border-box;
  margin: 0 5px;
  color: rgba(0, 0, 0, 0.5);
  text-decoration: none;
}

.nav .nav-item.router-link-exact-active {
  color: #39b982;
  border-bottom: solid 2px #39b982;
}
</style>