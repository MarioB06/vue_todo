<script setup>
import Task from '@/components/Task.vue';
</script>

<template>
  <div>
    <h1>Tasks for Category {{ categoryId }}</h1>
    <Task/>
  </div>
</template>

<script>
export default {
  computed: {
    categoryId() {
      // Extrahiere die Kategorie-ID aus der URL
      return this.$route.params.id;
    }
  },
  // Füge hier die Logik hinzu, um die Aufgaben für diese Kategorie zu laden
}
</script>
