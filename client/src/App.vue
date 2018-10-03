<template>
  <div id="app">
    <h1>Hello, {{ name }}</h1>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      name: 'Ivan'
    }
  }
}
</script>

<style lang="css">
  #app {
    color: #56b983;
  }
</style>