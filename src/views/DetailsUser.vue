<template>
  <h1>Deatails</h1>
  <div v-if="error">{{ error }}</div>
  <div v-if="user">
    <div id="gradient"></div>
    <div id="card">
      <img
        :src="
          user.gender === 'male'
            ? 'https://thumbs.dreamstime.com/b/guest-avatar-vector-illustration-default-male-profile-icon-image-profile-guest-avatar-vector-illustration-default-male-profile-182095612.jpg'
            : 'https://cdn4.vectorstock.com/i/1000x1000/18/98/user-icon-female-person-symbol-profile-avatar-sign-vector-18991898.jpg'
        "
      />
      <h2>{{ user.name }}</h2>

      <p>Love Codepen.io and respect Chris Coyier. ;)</p>
      <span class="left bottom">tel: 731 366 ***</span>
      <span class="right bottom">Email: {{ user.email }}</span>
    </div>
    <div class="description">
      <p>
        {{ user.description }}
      </p>
    </div>
  </div>
  <button class="btn" @click="goBack">Go Back</button>
</template>

<script>
import { useRouter } from "vue-router";
import getUser from "../composables/getUser";
export default {
  props: ["id"],
  setup(props) {
    const router = useRouter();
    const { user, error, load } = getUser(props.id);
    load();
    const goBack = () => {
      router.go(-1);
    };
    return {
      user,
      error,
      goBack,
    };
  },
};
</script>

<style>
/* body {
  margin: 0 auto;
  padding: 0;
  background: #222;
} */

.left {
  left: 25px;
}

.right {
  right: 25px;
}

.center {
  text-align: center;
}

.bottom {
  position: absolute;
  bottom: 25px;
}

#gradient {
  background: #999955;
  background-image: linear-gradient(
    #dab046 20%,
    #d73b25 20%,
    #d73b25 40%,
    #c71b25 40%,
    #c71b25 60%,
    #961a39 60%,
    #961a39 80%,
    #601035 80%
  );
  margin: 0 auto;
  margin-top: 100px;
  width: 100%;
  height: 150px;
}

#gradient:after {
  content: "";
  position: absolute;
  background: #e9e2d0;
  left: 50%;
  margin-top: -67.5px;
  margin-left: -270px;
  padding-left: 20px;
  border-radius: 5px;
  width: 520px;
  height: 275px;
  z-index: -1;
}

#card {
  position: absolute;
  width: 450px;
  height: 225px;
  padding: 25px;
  padding-top: 0;
  padding-bottom: 0;
  left: 50%;
  top: 67.5px;
  margin-top: 100px;
  margin-left: -250px;
  background: #e9e2d0;
  box-shadow: -20px 0 35px -25px black, 20px 0 35px -25px black;
  z-index: 5;
}

#card img {
  width: 150px;
  float: left;
  border-radius: 5px;
  margin-right: 20px;
  -webkit-filter: sepia(1);
  -moz-filter: sepia(1);
  filter: sepia(1);
}

#card h2 {
  font-family: courier;
  color: #333;
  margin: 0 auto;
  padding: 0;
  font-size: 15pt;
}

#card p {
  font-family: courier;
  color: #555;
  font-size: 13px;
  margin-top: 50px;
}

#card span {
  font-family: courier;
}
.description {
  margin: 80px 200px;
  font-weight: 500;
  font-size: 18px;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}
</style>