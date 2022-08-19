<template>
  <header>
    <h3>logo</h3>
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/addUser">Add User</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {};
</script>

<style>
nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: #42b983;
}
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  padding: 0 50px;
  height: 80px;
  background-color: #f6f6f6;
}
nav ul {
  list-style: none;
  display: flex;
  justify-content: space-around;
}
nav {
  width: 30%;
}
</style>