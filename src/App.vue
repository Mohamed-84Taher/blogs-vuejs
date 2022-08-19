<template>
  <NavBar />
  <router-view />
</template>
<script>
import NavBar from "./components/NavBar.vue";

export default {
  name: "App",
  components: { NavBar },
  setup() {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
* {
  margin: 0;
  padding: 0;
}
.btn {
  padding: 8px 20px;
  background-color: black;
  color: white;
  border: none;
  border-radius: 5px;
  font-weight: 500;
  font-size: 18px;
}
.btn:hover {
  cursor: pointer;
}
</style>
