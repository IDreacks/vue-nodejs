<template>
  <div id="ajout">
    <h1>Ajouter un article</h1>
    <form @submit.prevent="handleSubmit">
      <input
        type="text"
        name="title"
        id="title"
        placeholder="Titre"
        v-model="articles.title"
        required
      />

      <input
        type="text"
        name="description"
        id="description"
        placeholder="Description de l'article"
        v-model="articles.description"
        required
      />

      <input
        type="text"
        name="price"
        id="price"
        placeholder="Prix"
        v-model="articles.price"
        required
      />

      <input
        type="currency"
        name="currency"
        id="currency"
        placeholder="Monnaie"
        v-model="articles.currency"
        required
      />
      <input
        type="brand"
        name="brand"
        id="brand"
        placeholder="Marque du produit"
        v-model="articles.brand"
        required
      />

      <input type="submit" value="Ajouter un produit" id="add-button" />
    </form>
    <span v-if="succes !== ''" id="succes">{{ succes }} </span>
    <span id="errors">{{ errors }} </span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      articles: {
        title: "",
        description: "",
        price: "",
        currency: "",
        brand: "",
      },
      succes: "",
      errors: "",
    };
  },

  methods: {
    handleSubmit: async function () {
      if (this.articles.title === "") {
        this.errors.push("Il faut ajouter un titre !");
        return;
      }
      if (this.articles.description === "") {
        this.errors.push("Il faut ajouter une description au produit !");
        return;
      }
      if (this.articles.price < 0) {
        this.errors.push("Le prix de l'article doit être supérieur à 0");
        return;
      }
      if (this.articles.currency === "") {
        this.errors.push("Il faut indiquer la monnaie utilisé !");
        return;
      }
      if (this.articles.brand === "") {
        this.errors.push("Il faut indiquer la marque!");
        return;
      }

      let response = await fetch("http://localhost:90/addarticle", {
        method: "POST",
        body: JSON.stringify(this.articles),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((r) => {
          return r.json();
        })
        .catch((e) => {
          this.succes = e.toString();
          console.log("e32");
        });
      this.succes = "Article ajouté !";
    },
  },
};
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
textarea,
h2 {
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

#add-button {
  margin-top: 2%;
  color: hsla(160, 100%, 37%, 1);
  padding: 10px;
  cursor: pointer;
  background-color: #000000;
  font-weight: bold;
}
#add-button:hover {
  background-color: #181818;
}
#ajout {
  background-color: #181818;
  width: 33%;
  margin: auto;
  padding: 5%;
  border-radius: 20px;
  margin-top: 5%;
}
#succes {
  color: white;
  display: flex;
  justify-content: center;
  margin-top: 2%;
  padding: 3%;
  background-color: green;
}
</style>
