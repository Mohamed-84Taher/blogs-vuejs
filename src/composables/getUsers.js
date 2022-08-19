import { ref } from "@vue/reactivity";

const getUsers = () => {
  let users = ref([]);
  let error = ref(null);
  const load = async () => {
    try {
      const data = await fetch("http://localhost:3000/users");
      if (!data.ok) {
        throw Error("no data available");
      }
      users.value = await data.json();
    } catch (err) {
      error.value = err.message;
      console.log(error.value);
    }
  };

  return { users, error, load };
};
export default getUsers;
