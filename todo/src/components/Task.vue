<script>
export default {
  data() {
    return {
      todo: [],
      newTask: "",
      categoryId: null,
      showOpenTasks: true,
      showDoneTasks: true,
      searchQuery: "", 
    };
  },
  mounted() {
    this.todo = JSON.parse(localStorage.getItem("todo")) || [];
    if (this.$route.params.id) {
      this.categoryId = parseInt(this.$route.params.id);
      const category = this.getCategoryNameById(this.categoryId);
      this.category = category ? category.name : "Unbekannte Kategorie";
    }
  },
  computed: {
    
    filteredOpenTodo() {
      return this.openTodo.filter((todo) =>
        todo.description.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
    
    filteredDoneTodo() {
      return this.doneTodo.filter((todo) =>
        todo.description.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
    openTodo() {
      return this.todo.filter(
        (todo) => !todo.status && todo.categoryId === this.categoryId
      );
    },
    doneTodo() {
      return this.todo.filter(
        (todo) => todo.status && todo.categoryId === this.categoryId
      );
    },
  },
  methods: {
    getCategoryNameById(id) {
      const categories = JSON.parse(localStorage.getItem("categories")) || [];
      return categories.find((category) => category.id === id);
    },
    markAsDone(id) {
      const index = this.todo.findIndex((todo) => todo.id === id);
      if (index !== -1) {
        this.todo[index].status = true;
        this.saveTodo();
      }
    },
    saveTodo() {
      localStorage.setItem("todo", JSON.stringify(this.todo));
    },
    deleteTask(id) {
      this.todo = this.todo.filter((task) => task.id !== id);
      this.saveTodo();
    },
    addTask() {
      const taskText = this.newTask.trim();
      if (taskText !== "") {
        if (!this.categoryId) {
          alert("Kategorie-ID nicht gefunden.");
          return;
        }
        this.todo.push({
          id: Date.now(),
          description: taskText,
          categoryId: this.categoryId,
          status: false,
        });
        this.saveTodo();
        this.newTask = "";
      }
    },
    goBack() {
        this.$router.go(-1)
      },
    toggleOpenTasks() {
      this.showOpenTasks = !this.showOpenTasks;
    },
    toggleDoneTasks() {
      this.showDoneTasks = !this.showDoneTasks;
    },
  },
};
</script>


<template>
  <div class="body">
    <div class="title">
      <h1>TO DO</h1>
      <h2>{{ category }}</h2>
    </div>

    <div>
      <button @click="goBack" class="btn btn-" style="background-color: #3e3e3e; color: white;"> &lt; Zurück </button>
    </div>

    <br />
    <br />

    <!-- <div class="searchbar">
      <input
        type="text"
        placeholder="Suche nach Aufgaben"
        v-model="searchQuery"
      />
    </div> -->

    <br />
    <br />

    <div class="tasks">
      <button class="open-task-box" @click="toggleOpenTasks" style="width: 20%">
        <p>
          Offen
          <span class="arrow-icon" v-if="showOpenTasks" @click="toggleOpenTasks">▼</span>
          <span class="arrow-icon" v-else @click="toggleOpenTasks">▲</span>
        </p>
      </button>

      <div class="tasks" v-if="showOpenTasks">
        <div v-for="todo in filteredOpenTodo" :key="todo.id" class="open-task-box">
          <span class="mark-done-icon" @click="markAsDone(todo.id)">
            <span class="circle" v-if="!todo.status"></span>
            <span class="checkmark" v-else></span>
          </span>
          <p>{{ todo.description }}</p>
          <button @click="deleteTask(todo.id)" class="delete-task-button">&#10006; Löschen</button>
        </div>
      </div>

      <br />
      <br />

      <button class="done-task-box" @click="toggleDoneTasks" style="width: 20%">
        <p>
          Erledigt
          <span class="arrow-icon" v-if="showDoneTasks" @click="toggleDoneTasks">▼</span>
          <span class="arrow-icon" v-else @click="toggleDoneTasks">▲</span>
        </p>
      </button>

      <div class="tasks" v-if="showDoneTasks">
        <div v-for="todo in filteredDoneTodo" :key="todo.id" class="done-task-box">
          <p>{{ todo.description }}</p>
          <button @click="deleteTask(todo.id)" class="delete-task-button">&#10006; Löschen</button>
        </div>
      </div>
    </div>

    <div class="add-task-bar">
      <input
        type="text"
        placeholder="+ Neue Aufgabe hinzufügen"
        class="add-task-input"
        v-model="newTask"
        @keyup.enter="addTask"
      />
    </div>
  </div>
</template>

<style scoped>
.arrow-icon {
  margin-left: 5px;
  background-color: #3e3e3e;
}

.arrow-rotated {
  transform: rotate(180deg);
}

.mark-done-icon {
  cursor: pointer;
  display: inline-block;
  width: 24px;
  height: 24px;
  position: relative;
  background-color: #3e3e3e;
}

.circle,
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #3e3e3e;
}

.circle {
  border: 2px solid #ccc;
  border-radius: 50%;
}

.checkmark {
  display: none;
}

.mark-done-icon:hover .circle {
  background-color: #7062d5;
}

.mark-done-icon:hover .checkmark {
  display: block;
}

.delete-task-button {
  background: none;
  border: none;
  color: #7062d5;
  font-size: 14px;
  cursor: pointer;
  display: none;
  margin-left: 10px;
}

.open-task-box:hover .delete-task-button {
  display: inline-block;
}

.done-task-box:hover .delete-task-button {
  display: inline-block;
}

.add-task-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #3e3e3e;
  padding: 10px;
  box-sizing: border-box;
  border-radius: 10px;
  color: #7062d5;
}
.add-task-input:focus {
  outline: none;
  color: #7062d5;
}

.add-task-input {
  width: calc(100% - 50px);
  height: 100%;
  border: none;
  background-color: #3e3e3e;
  color: #7062d5;
  padding-left: 10px;
  border-radius: 10px;
}

.add-task-input::placeholder {
  color: #7062d5;
}

.title {
  color: #7062d5;
  font-family: sans-serif;
  text-align: center;
}

.searchbar {
  width: 200px;
  height: 40px;
  border-radius: 10px;
  border: 2px solid #3e3e3e;
  padding: 10px;
  background-color: #3e3e3e;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 10px;
}

.tasks {
  display: flex;
  flex-direction: column;
}

.open-task-box,
.done-task-box {
  width: 100%;
  height: 50px;
  border-radius: 10px;
  border: 2px solid #3e3e3e;
  padding: 10px;
  background-color: #3e3e3e;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 2px;
}

p {
  background-color: #3e3e3e;
  color: #7062d5;
  margin: 0;
  padding-left: 10px;
}

.delete-task-button:hover {
  display: inline-block;
  color: #ff4b5c; /* Change color on hover */
}
</style>
