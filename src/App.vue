<template>
  <div id="app">
    <div id="nav">
      <b-container>
      <b-button-group class="fixed-bottom">
        <router-link to="/">
          <b-button><font-awesome-icon size=lg :icon = "['fas', 'home']"></font-awesome-icon><p class="icon">Home</p></b-button>
        </router-link>
        <router-link to="/list">
          <b-button><font-awesome-icon size=lg :icon = "['fas', 'list']"></font-awesome-icon><p class="icon">List</p></b-button>
        </router-link>
        <router-link to="/settings">
          <b-button><font-awesome-icon size=lg :icon = "['fas', 'cog']"></font-awesome-icon><p class="icon">Settings</p></b-button>
        </router-link>
        <router-link to="/history">
        <b-button><font-awesome-icon size=lg :icon = "['fas', 'history']"></font-awesome-icon><p class="icon">History</p></b-button>
        </router-link>
        </b-button-group>
    </b-container>
    </div>
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<style lang="stylus">
#app
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px
</style>
