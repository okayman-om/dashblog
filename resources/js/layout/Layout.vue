<template>
  <div>
    <h1>Layout</h1>
    <div class="container">
      <Navbar></Navbar>
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup>
import Navbar from "../components/Navbar.vue";
</script>