<template>
  <AddArticle />
  <h1></h1>
</template>

<script>
import { useRouter } from "vue-router";
import AddArticle from "../components/AddArticle.vue";
const router = useRouter();
export default {
  components: {
    AddArticle,
  },
};
</script>
