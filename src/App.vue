<template>
  <div id="companies-app">
    <list-companies />
  </div>
</template>

<script lang="ts">
import ListCompanies from './views/ListCompanies.vue';
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
    ListCompanies,
  },
})
export default class App extends Vue {}
</script>

<style>
#companies-app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
