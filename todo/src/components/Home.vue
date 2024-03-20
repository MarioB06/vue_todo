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
    ...mapState(useCategoryStore, ['category']), // Hier sollte 'category' statt 'categories' sein
  },

  methods: {
    ...mapActions(useCategoryStore, ['addCategory']),
    addNewCategory() {
      if (this.newCategoryName.trim() === '') return;
      this.addCategory(this.newCategoryName);
      this.saveCategoriesToLocalStorage();
      this.newCategoryName = ''; // Clear the input field after adding the category
    },
    saveCategoriesToLocalStorage() {
      localStorage.setItem('categories', JSON.stringify(this.category)); // Hier sollte 'category' statt 'categories' sein
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
   
    <div>
      <div class="category-container">
        <!-- Verwende router-link für jede Kategorie -->
        <router-link :to="'/task/' + category.id" v-for="category in category" :key="category.id" class="category-box">
          {{ category.name }}
        </router-link>
      </div>
    </div>
    
    <div class="add-category-bar">
      <input type="text" v-model="newCategoryName" placeholder="+ Kategorie hinzufügen" class="add-category-input" @keyup.enter="addNewCategory">
    </div>
  </div>
</template>



<style scoped>
.add-category-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #3e3e3e;
  padding: 10px;
  box-sizing: border-box;
  border-radius: 10px;
}

.add-category-input {
  width: calc(100% - 20px);
  height: 100%;
  border: none;
  background-color: #3e3e3e;
  color: #7062d5;
  padding-left: 10px;
  border-radius: 10px;
}

.title {
  font-size: 100%;
}

.container {
  background-color: #3e3e3e;
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
  margin-bottom: 5px;
  border-radius: 5px;
  max-width: 200px;
  flex-grow: 0;
}
</style>
