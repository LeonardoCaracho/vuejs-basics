<template>
    <div class="nav">
        <ul>
            <li><router-link :to="{name: 'transition-modal'}">  Modal  </router-link></li>
            <li><router-link :to="{name: 'transition-list'}">  List   </router-link></li>
            <li><router-link :to="{name: 'transition-drawer'}">  Drawer   </router-link></li>
        </ul>
    </div>
</template>

<script>

export default {
}

</script>

<style>
.nav {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 60px;
}

.nav ul {
    list-style: none;
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