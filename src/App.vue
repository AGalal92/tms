<script setup>
import { RouterLink, RouterView } from "vue-router";
import LoginView from "./views/pages/LoginView.vue";
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/home"></RouterLink>
        <RouterLink to="/"></RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style>
@import "@/assets/base.css";
@import "@/assets/bootstrap/css/bootstrap.min.css";
@import "@/assets/css/plugins.css";
@import "@/assets/css/authentication/form-1.css";
@import "@/assets/css/forms/theme-checkbox-radio.css";
@import "@/assets/css/forms/switches.css";
</style>
