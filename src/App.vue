<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Element</router-link>
      <span class="line"></span>
      <router-link to="/about">Antdesign</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 20px;
  .line{
    display: inline-block;
    width:1px;
    height:15px;
    background: #333;
    margin:0 5px;
  }

  a {
    font-size: 24px;
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #32CA49;
    }
  }
}
</style>
