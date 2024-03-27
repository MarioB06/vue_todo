<script>
export default {
  name: "CategoryList",

  data() {
    return {
      newCategoryName: "",
      categories: [],
    };
  },

  mounted() {
    const storedCategories =
      JSON.parse(localStorage.getItem("categories")) || [];
    this.categories = storedCategories;
  },

  computed: {
    category() {
      return this.categories;
    },
  },

  methods: {
    addNewCategory() {
      const categoryName = this.newCategoryName.trim();
      if (categoryName === "") return;

      const newCategory = {
        id: Date.now(),
        name: categoryName,
      };

      this.categories.push(newCategory);
      localStorage.setItem("categories", JSON.stringify(this.categories));

      this.newCategoryName = "";
    },
    deleteCategory(categoryId) {
      this.categories = this.categories.filter(
        (category) => category.id !== categoryId
      );
      localStorage.setItem("categories", JSON.stringify(this.categories));
    },
  },
};
</script>




<template>
  <div class="home">
    <div class="category-sidebar">
      <div class="category-container">
        <h2 class="category-title">Deine Kategorien</h2>
        <div
          v-for="categoryItem in category"
          :key="categoryItem.id"
          class="d-flex justify-content-between align-items-center category-box"
        >
          <router-link :to="'/task/' + categoryItem.id" class="category-link">{{
            categoryItem.name
          }}</router-link>
          <button
            @click="deleteCategory(categoryItem.id)"
            class="delete-button"
          >
            &#10006; Delete
          </button>
        </div>
      </div>
    </div>
    <div class="title">
      <h2>Willkommen bei Deiner ToDo-Liste!</h2>
      <p>Organisiere dein Leben, erledige Aufgaben und bleibe produktiv.</p>
      <p>
        Fange jetzt an, deine Aufgaben zu verwalten und dein Leben zu
        organisieren.
      </p>
    </div>
    <div class="add-category-bar">
      <input
        type="text"
        v-model="newCategoryName"
        placeholder="+ Kategorie hinzufügen"
        class="add-category-input"
        @keyup.enter="addNewCategory"
        maxlength="15"
      />
    </div>
  </div>
</template>



<style scoped>
.title {
  margin-left: 100px;
  text-align: center;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 6px #7062d5;
  max-width: 600px;
  margin: 50px auto;
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
  color: #7062d5;
  padding: 10px;
  margin-bottom: 5px;
  border-radius: 5px;
  cursor: pointer;
}

.category-title {
  margin-top: 0;
  color: #333;
  background-color: rgb(136, 134, 134);
}
.category-link {
  text-decoration: none;
  color: white;
}

.delete-button {
  background: none;
  border: none;
  color: #7062d5;
  font-size: 14px;
  cursor: pointer;
  display: none;
}

.category-box:hover .delete-button {
  display: inline-block;
}

.delete-button:hover {
  display: inline-block;
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
</style>
