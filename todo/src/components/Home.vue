<script>
import { mapState, mapActions } from 'pinia'
import { useCategoryStore } from '@/stores/category'

export default {
  name: 'CategoryList',

  data() {
    return {
      newCategoryName: ""
    }
  },

  computed: {
    ...mapState(useCategoryStore, ['category']),
  },

  methods: {
    ...mapActions(useCategoryStore, ['addCategory']),
  },

  props: {
    id: {
      type: Number,
      required: true
    },
    name: {
      type: String,
      required: true
    },
  }
}
</script>

<template>
  <div class="home">
    <div class="title">
      <center>
        <h1>To Do</h1>
      </center>
    </div>
    <div class="container">
      <div class="col-8">
        <input type="text" v-model="newCategoryName" placeholder="Kategoriename" class="container">
        <button @click="addCategory(newCategoryName)" id="input">+ Kategorie hinzufügen</button>
      </div>
    </div>
    <div class="category-container">
      <div v-for="(category, index) in category" :key="index" class="category-box">
        {{ category.name }}
      </div>
    </div>
  </div>
</template>



<style scoped>
.title {
  font-size: 100%;
}

.container {
  background-color: #3e3e3e;
  /* Grauer Hintergrund */
  padding: 10px;
  border-radius: 5px;
  width: 80%;
}

#input {
  border: none;
  width: 100%;
  font-size: 16px;
  padding: 8px 0;
  color: #7062d5;
  /* Lila Schriftfarbe */
  background-color: #3e3e3e;
  font-weight: bolder;
}

.category-container {
  display: flex;
  flex-direction: column;
}

.category-box {
  background-color: #3e3e3e;
  color: white;
  padding: 5px;
  margin-bottom: 5px; /* Abstand zwischen den Kategorien */
  border-radius: 5px;
  max-width: 200px; /* Maximalbreite der Kategorien */
  flex-grow: 0; /* Verhindert das Strecken der Kategorien bis ganz nach rechts */
}

</style>
