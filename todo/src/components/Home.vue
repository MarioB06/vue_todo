<script>
import { useCategoryStore } from '@/stores/category';

export default {
  name: 'CategoryList',

  data() {
    return {
      newCategoryName: ""
    }
  },

  computed: {
    category() {
      return useCategoryStore().category; // Zugriff auf die Kategorie-Store-Eigenschaft
    }
  },

  methods: {
    addNewCategory() {
      if (this.newCategoryName.trim() === '') return;
      useCategoryStore().addCategory(this.newCategoryName); // Verwendung der Aktion des Kategorie-Stores
      this.saveCategoriesToLocalStorage();
      this.newCategoryName = ''; // Clear the input field after adding the category
    },
    saveCategoriesToLocalStorage() {
      localStorage.setItem('categories', JSON.stringify(this.category));
    },
  }
}
</script>




<template>
  
  <div class="home">
    
    <div class="category-sidebar">
      <div class="category-container">
        
        <h2 class="category-title">Deine Kategorien</h2>
        <router-link :to="'/task/' + category.id" v-for="category in category" :key="category.id" class="category-box">
          {{ category.name }}
        </router-link>
      </div>
    </div>
    <div class="title">
      <h2>Willkommen bei Deiner ToDo-Liste!</h2>
        <p>Organisiere dein Leben, erledige Aufgaben und bleibe produktiv.</p>
         <p>Fange jetzt an, deine Aufgaben zu verwalten und dein Leben zu organisieren.</p>
    </div>

    <div class="add-category-bar">
      <input type="text" v-model="newCategoryName" placeholder="+ Kategorie hinzufügen" class="add-category-input" @keyup.enter="addNewCategory">
    </div>
  </div>
</template>

<style scoped>
.title{
  margin-left: 100px;
  text-align: center;
  padding: 30px; /* Innenabstand */
  border-radius: 10px; /* Abrundung der Ecken */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Schatten */
  max-width: 600px; /* Maximale Breite */
  margin: 50px auto; /* Zentrierte Ausrichtung */
}
.home {
  display: flex;
  height: 100vh;
}

.category-sidebar {
  background-color: rgb(136, 134, 134);
  padding: 10px;
  border-radius: 5px;
  width: 250px;
  max-height: 100%;
  overflow-y: auto;
}

.category-container {
  display: flex;
  flex-direction: column;
  background-color: rgb(136, 134, 134);
}

.category-box {
  background-color: #3e3e3e;
  color: white;
  padding: 10px;
  margin-bottom: 5px;
  border-radius: 5px;
  text-decoration: none;
}

.content {
  flex: 1;
  padding: 20px;
}



.add-category-bar {
  position: fixed;
  bottom: 20px;
  left: 260px;
  width: calc(100% - 40px);
  background-color: #3e3e3e;
  border-radius: 10%;

}

.add-category-input {
  width: 100%;
  height: 40px;
  border: none;
  background-color: #3e3e3e;
  color: #7062d5;
  padding-left: 10px;
  border-radius: 5px;
}

.add-category-input:focus {
  outline: none;
}

.category-title {
  margin-top: 0;
  color: #333; 
  background-color: rgb(136, 134, 134);
}
</style>
