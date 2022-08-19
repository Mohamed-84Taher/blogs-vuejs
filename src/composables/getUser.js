import { ref } from "@vue/reactivity";

const getUser = id => {
  let user = ref(null);
  let error = ref(null);
  const load = async () => {
    try {
      const data = await fetch("http://localhost:3000/users/" + id);
      if (!data.ok) {
        throw Error("no data available");
      }
      user.value = await data.json();
    } catch (err) {
      error.value = err.message;
      console.log(error.value);
    }
  };

  return { user, error, load };
};
export default getUser;
