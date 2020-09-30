<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark" style="margin-bottom: 20px;">
      <a class="navbar-brand" href="/">Cryptocurency</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item" v-bind:class="{'active': getActive('Home')}">
              <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item" v-bind:class="{'active': getActive('Transfer')}">
              <a class="nav-link" href="/transfer">Transfer</a>
            </li>
            <li class="nav-item" v-bind:class="{'active': getActive('Mine')}">
              <a class="nav-link" href="/mine">Mine coins</a>
            </li>
          </ul>
        </div>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods:{
    getActive(expected) {
      if (expected == this.$route.name) return true;
      return false;
    }
  }
}


</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
