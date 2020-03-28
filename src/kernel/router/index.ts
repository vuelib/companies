import Vue from 'vue';
import VueRouter from 'vue-router'
import ListCompanies from '../../views/ListCompanies.vue';

Vue.use(VueRouter);

declare module 'vue/types/vue' {
  interface Vue {
    $vueRouter: VueRouter;
  }
}

const routes = [
  {
    path: '/companies',
    name: 'List-Companies',
    component: ListCompanies
  },
]

export default Vue.prototype.$vueRouter = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
