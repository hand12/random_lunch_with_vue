<template>
  <div id="app">
    <router-view/>
    <img src="./assets/logo.png">
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

body {
  margin: 0;
}

input {
  border-style: none;
  outline: none;
  outline-style: none;
  box-shadow: none;
  color: #2c3e50;
}

button {
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
	appearance: none;
}

a {
  color: #2c3e50;
  text-decoration: none;
}
</style>
