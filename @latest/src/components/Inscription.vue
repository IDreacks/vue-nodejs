<template>
  <h1>Bienvenue sur Articles.com</h1>
  <div id="login">
    <h2>S'inscrire</h2>
    <form @submit.prevent="handleSubmit">
      <input
        type="text"
        name="name"
        v-model="user.name"
        placeholder="Votre identifiant"
        required
      />
      <input
        type="password"
        name="password"
        v-model="user.password"
        placeholder="Votre mot de passe"
        required
      />
      <input
        type="email"
        name="email"
        v-model="user.email"
        placeholder="Votre email"
        required
      />

      <input value="Inscription" type="submit" id="co-button" />
    </form>
    <span id="error">{{ error }} </span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: "",
        password: "",
        email: "",
      },
      error: "",
    };
  },
  methods: {
    handleSubmit: async function () {
      let response = await fetch("http://localhost:90/inscription", {
        method: "POST",
        body: JSON.stringify(this.user),
        headers: {
          // Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((r) => {
          return r.json();
        })
        .catch((e) => {
          console.log(e);
        });
      console.log(response);
    },
    redirect: function () {
      this.$router.push("/login");
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

#co-button {
  margin-top: 2%;
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
