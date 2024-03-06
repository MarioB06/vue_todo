<script>



</script>

<template>
  <div>
    <div class="title">
      <h1>TO DO</h1>
      <h2>{{ category }}</h2>
    </div>

    <div class="searchbar">
      <input type="text" placeholder="Suche nach Aufgaben">
    </div>

    <div class="tasks">
      <div class="open-task-box">
        <p>Offen</p>
      </div>
      <div class="done-task-box">
        <p>Erledigt</p>
      </div>
    </div>

    <div class="add-task-bar">
      <input type="text" placeholder="Neue Aufgabe hinzufügen" class="add-task-input">
    </div>

  </div>
</template>


<style scoped>
/* Alle anderen Stile bleiben gleich */

.add-task-bar {
  position: fixed;
  bottom: 0; /* Am unteren Rand positionieren */
  left: 0;
  width: 100%;
  background-color: #3e3e3e;
  padding: 10px;
  box-sizing: border-box; 
  border-radius: 10px;
  /* Inkludiert Padding und Border in die Breite */
}

.add-task-input {
  width: calc(100% - 20px);
  height: 100%;
  border: none;
  background-color: #3e3e3e;
  color: #7062d5;
  padding-left: 10px;
  border-radius: 10px;
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

p {
  background-color: #3e3e3e;
  color: #7062d5;
  margin: 0;
  padding-left: 10px;
}
</style>