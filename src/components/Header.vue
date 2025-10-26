<script setup>
import Button from "@/components/Button.vue";
</script>

<template>
      <header class="header">
            <div class="container">
                  <!-- header logo  -->
                  <a href="#!" class="header__logo"> Logo </a>
                  <!-- header links  -->
                  <ul class="header__links">
                        <li><router-link to="/">Home</router-link></li>
                        <li><router-link to="/">About</router-link></li>
                        <li><router-link to="/">Contact</router-link></li>
                        <li><router-link to="/">Gallery</router-link></li>
                  </ul>
                  <!-- header buttons  -->
                  <div class="header__btns">
                        <Button title="Login" />
                        <Button title="Sign up" :primary="true" />
                  </div>
            </div>
      </header>
</template>

<style scoped>
.header {
      border-bottom: 1px solid gray;
}
.header .container {
      display: flex;
      align-items: center;
      justify-content: space-between;
}
/* header links  */
.header__links {
      display: flex;
      align-items: center;
      gap: 20px;
}
</style>
