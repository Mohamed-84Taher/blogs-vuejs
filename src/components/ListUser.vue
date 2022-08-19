<template>
  <div v-if="error">{{ error }}</div>
  <div class="list">
    <div v-for="user in users" :key="user.id">
      <SingleUser :user="user" />
    </div>
  </div>
</template>

<script>
import getUsers from "../composables/getUsers";
import SingleUser from "./SingleUser.vue";
export default {
  components: { SingleUser },
  setup() {
    const { users, error, load } = getUsers();
    load();
    return {
      users,
      error,
    };
  },
};
</script>

<style>
.list {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 50px;
  width: 90%;
  margin: 50px auto;
}
</style>