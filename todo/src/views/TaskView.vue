<script setup>
import Task from '@/components/Task.vue';
</script>

<template>
  <div>
    <h1>Tasks for Category  {{ categoryId }}</h1>

    <Task/>
  </div>
</template>

<script>
export default {
  computed: {
    categoryId() {
      
      return this.$route.params.id;
    }
  },
  
}
</script>
