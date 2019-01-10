<template>
  <div id="app">
    <div id="nav">
      <router-link to="/enmoLogin">Home</router-link> |
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  color: #2c3e50;
  text-align: center;
  font-family: "Avenir", Helvetica, Arial, sans-serif;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
#nav {
  padding: 30px;
  a {
    color: #2c3e50;
    font-weight: bold;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
