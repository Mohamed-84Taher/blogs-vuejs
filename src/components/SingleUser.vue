<template>
  <div class="a-box">
    <div class="img-container">
      <div class="img-inner">
        <div class="inner-skew"><img :src="imageUrl" /></div>
      </div>
    </div>
    <div class="text-container">
      <h3>{{ user.name }}</h3>
      <h3>{{ user.email }}</h3>
      <div>{{ description }}</div>
      <router-link :to="{ name: 'DetailsUser', params: { id: user.id } }"
        ><button class="btn btn-card">details</button></router-link
      >
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
export default {
  props: ["user"],
  setup(props) {
    let description = ref("");
    let imageUrl = ref("");
    description.value = props.user.description.substring(0, 100) + "...";
    imageUrl.value =
      props.user.gender === "male"
        ? "https://thumbs.dreamstime.com/b/guest-avatar-vector-illustration-default-male-profile-icon-image-profile-guest-avatar-vector-illustration-default-male-profile-182095612.jpg"
        : " https://cdn4.vectorstock.com/i/1000x1000/18/98/user-icon-female-person-symbol-profile-avatar-sign-vector-18991898.jpg";
    return {
      description,
      imageUrl,
    };
  },
};
</script>

<style>
/* body {
  text-align: center;
  padding: 30px;
  background: #f8f4f2;
  font-family: Arial;
} */

.a-box {
  display: inline-block;
  width: 240px;
  text-align: center;
}

.img-container {
  height: 230px;
  width: 200px;
  overflow: hidden;
  border-radius: 0px 0px 20px 20px;
  display: inline-block;
}

.img-container img {
  transform: skew(0deg, -13deg);
  height: 250px;
  margin: -35px 0px 0px -70px;
}

.inner-skew {
  display: inline-block;
  border-radius: 20px;
  overflow: hidden;
  padding: 0px;
  transform: skew(0deg, 13deg);
  font-size: 0px;
  margin: 30px 0px 0px 0px;
  background: #c8c2c2;
  height: 250px;
  width: 200px;
}

.text-container {
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
  padding: 120px 20px 20px 20px;
  border-radius: 20px;
  background: #fff;
  margin: -120px 0px 0px 0px;
  line-height: 19px;
  font-size: 14px;
}

.text-container h3 {
  margin: 20px 0px 10px 0px;
  color: #04bcff;
  font-size: 16px;
}
</style>