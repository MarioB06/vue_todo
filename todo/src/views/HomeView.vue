<script setup>
import Home from '@/components/Home.vue';
</script>

<template>
  <main>
    <Home />
    <div class="category-container">
      <router-link :to="'/category/' + category.id" v-for="category in category" :key="category.id" class="category-box">
        {{ category.name }}
      </router-link>
    </div>
  a
  </main>
 
</template>
