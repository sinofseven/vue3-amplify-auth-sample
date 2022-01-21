<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from './components/HelloWorld.vue'
import {Authenticator} from "@aws-amplify/ui-vue";
import {Amplify} from "aws-amplify";

Amplify.configure({
  Auth: {
    identityPoolId: 'ap-northeast-1:256fc7bf-eaff-46d5-a503-71c80ce1fc3f',
    region: 'ap-northeast-1',
    userPoolId: 'ap-northeast-1_vep0Zvlla',
    userPoolWebClientId: '4io2ev6bd7a2h8fr5jdok09v5e'
  }
})
</script>

<template>
  <authenticator>
    <template v-slot="{user, signOut}">
      <h1>Hello {{user.username}}!</h1>
      <button @click="signOut">Sign Out</button>
    </template>
  </authenticator>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
div.amplify-tabs {
  display: none;
}
</style>
