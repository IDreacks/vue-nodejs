import { defineStore } from "pinia";

export const articleStore = defineStore({
  id: "mesArticles",
  state: () => ({
   articles: [],
  }),
  getters: {
    getId: (state) => state.id,
    getTitle: (state) => state.title,
    getDescription: (state) => state.description,
    getPrice: (state) => state.price,
    getCurrency: (state) => state.currency,
    getBrand: (state) => state.brand,
  },
  actions: {},
});
