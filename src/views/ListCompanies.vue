<template>
  <div class="list-customers">
    <p>Listagem de empresas</p>
    <table>
      <thead>
        <th>Status</th>
        <th>Nome</th>
        <th>CNPJ</th>
      </thead>
      <tr v-bind:key="company.id" v-for="company in companies">
        <td
          :style="{
            fontWeight: 'bold',
            color: company.attributes.active ? 'green' : 'red',
          }"
        >
          {{ company.attributes.active ? 'Ativo' : 'Inativo' }}
        </td>
        <td>{{ company.attributes.legal_name }}</td>
        <td>{{ company.attributes.primary_registry }}</td>
      </tr>
    </table>
  </div>
</template>

<script lang="ts">
import { isEmpty } from 'lodash';
import Company from '../entities/Company';
import { Vue, Component } from 'vue-property-decorator';

Component({
  name: 'ListCompanies',
});
export default class ListCompanies extends Vue {
  /**
   *
   *
   * @private
   * @type {Array<Company>}
   * @memberof ListCompanies
   */
  private companies!: Array<Company>;

  /**
   *
   *
   * @private
   * @type {Company}
   * @memberof ListCompanies
   */
  private company: Company;

  /**
   * Creates an instance of ListCompanies.
   * @memberof ListCompanies
   */
  constructor() {
    super();

    this.company = new Company();

    this.getCompanies();
  }

  /**
   *
   *
   * @private
   * @returns
   * @memberof ListCompanies
   */
  private async getCompanies() {
    this.company = await this.company.paginate(10, 1).getEntity();

    if (isEmpty(this.company)) return;

    this.companies = Object.values(this.company);

    this.$forceUpdate();
  }
}
</script>

<style scoped>
.list-customers {
  width: 800px;
  height: 510px;
  position: absolute;
  left: calc(50% - 400px);
  color: #fff;
  background: #000;
  border-radius: 10px;
}
.list-customers p {
  font-size: 24px;
}
.list-customers table {
  width: 100%;
}
.list-customers table thead th {
  padding: 15px 10px;
}
.list-customers table tr {
  background-color: #222;
}
.list-customers table tr:nth-child(odd) {
  background-color: #000;
}
.list-customers table tr td {
  padding: 15px 10px;
}
</style>
