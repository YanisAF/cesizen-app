<template>
  <div class="container">
    <h1>{{ title }}</h1>

    <p>{{ message }}</p>

    <button @click="increment">
      Compteur : {{ count }}
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// état réactif
const title = ref('Bienvenue 👋')
const message = ref('Ceci est une vue simple en Vue 3')
const count = ref(0)

// fonction
function increment() {
  count.value++
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  font-family: Arial, sans-serif;
}

h1 {
  color: #42b883;
}

button {
  margin-top: 20px;
  padding: 10px 20px;
  border: none;
  background: #35495e;
  color: white;
  cursor: pointer;
  border-radius: 5px;
}

button:hover {
  background: #42b883;
}
</style>