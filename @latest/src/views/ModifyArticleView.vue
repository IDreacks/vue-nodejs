<template>
  <ModifyArticle />
</template>
<script>
import { useRouter } from "vue-router";
import ModifyArticle from "../components/ModifyArticle.vue";

const router = useRouter();
export default {
  components: {
    ModifyArticle,
  },
};
</script>
