<template>
  <div id="companies-app">
    <sant-window :positionX="positionX" :positionY="80">
      <list-companies />
    </sant-window>
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
export default class App extends Vue {
  private get positionX() {
    return window.innerWidth / 2 - 400;
  }
}
</script>

<style lang="scss">
#companies-app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
@import '~@essencia-ui/vue-santorini/src/assets/scss/main';
</style>
