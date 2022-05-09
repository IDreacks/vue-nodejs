<template>
  <div>
    <Login />
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import Login from "../components/Login.vue";

const router = useRouter();
export default {
  components: {
    Login,
  },
};
</script>
