<template>
  <table>
    <thead>
      <tr>
        <th>id</th>
        <th>title</th>
        <th>description</th>
        <th>price</th>
        <th>currency</th>
        <th>brand</th>
        <th>Modifier</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="article in articles" :key="article.id">
        <td>{{ article.id }}</td>
        <td>{{ article.title }}</td>
        <td>{{ article.description }}</td>
        <td>{{ article.price }}</td>
        <td>{{ article.currency }}</td>
        <td>{{ article.brand }}</td>
        <td>
          <router-link :to="{ name: 'modifyarticle', params: { id: article.id } }">
            <span class="material-icons"> settings </span>
          </router-link>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "Article",
  props: {},
  data() {
    return {
      articles: [],
    };
  },
  mounted() {
    this.fetchArticles();
  },
  methods: {
    fetchArticles: async function () {
      var response = await fetch("http://localhost:90/articles")
        .then((res) => {
          return res.json();
        })
        .catch((e) => {
          console.log(e);
        });
      this.articles = response;
    },
  },
};
</script>
