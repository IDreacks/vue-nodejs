<template>
  <form @submit.prevent="handleSubmit">
    <label> Titre</label>
    <input type="text" id="title" name="title" v-model="articles.title" />
    <label> Description</label>

    <input
      type="textarea"
      id="description"
      name="description"
      v-model="articles.description"
    />
    <label> Prix</label>

    <input type="text" id="price" name="price" v-model="articles.price" />
    <label> Monnaie</label>

    <input
      type="text"
      id="currency"
      name="currency"
      v-model="articles.currency"
    />
    <label> Marque</label>

    <input type="text" id="brand" name="brand" v-model="articles.brand" />
    <input type="submit" value="submit" />
  </form>
</template>
<script setup>
import { ref } from "vue";
import { onMounted } from "@vue/runtime-core";
import { useRoute } from "vue-router";

const route = useRoute();
const articles = ref({});
onMounted(() => {
  fetchArticle();
  console.log("onmounted");
});

async function fetchArticle() {
  console.log("fetch");

  let reponse = await fetch(`http://localhost:90/articles/${route.params.id}`)
    .then((res) => {
      return res.json();
    })
    .catch((e) => {
      console.log(e);
    });
  console.log(reponse);
  articles.value = reponse;
}

async function handleSubmit() {
  let reponse = await fetch(`http://localhost:90/modifyarticle/${route.params.id}`
  )
    .then((res) => {
      return res.json();
    })
    .catch((e) => {
      console.log(e);
    });
  console.log(reponse);
}
</script>
<style scoped>
h1 {
  color: white;
  margin-top: 5%;
  margin-bottom: 3%;
  display: flex;
  justify-content: center;
}
form {
  display: flex;
  flex-direction: column;
}
form input,
h2 {
  width: 60%;
  margin: auto;
  padding: 10px;
  border-radius: 5px;
  outline: none;
  border-color: hsla(160, 100%, 37%, 1);
  color: white;
  background-color: #181818;
  margin-top: 2%;
  display: flex;
  justify-content: center;
}
label {
  margin: auto;
  color: hsla(160, 100%, 37%, 1);
}

#co-button {
  margin-top: 2%;
  width: 33%;
  color: hsla(160, 100%, 37%, 1);
  padding: 10px;
  cursor: pointer;
  background-color: #000000;
  font-weight: bold;
}
#co-button:hover {
  background-color: #181818;
}
#login {
  background-color: #181818;
  width: 33%;
  margin: auto;
  padding: 5%;
  border-radius: 20px;
}
</style>
