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
import Axios, { AxiosResponse } from 'axios';
import { get, isEmpty } from 'lodash';
import { Vue, Component } from 'vue-property-decorator';

Component({
  name: 'ListCompanies',
});
export default class ListCompanies extends Vue {
  public companies: object = {};

  private headers = {
    headers: {
      'App-Id': '7d04acde-118b-4a87-abde-af7d5a15d14f',
      Authorization:
        process.env.ENVIRONMENT === 'production'
          ? 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI2IiwianRpIjoiYmNhNGFiZjkzYjgzODQyYWU0MjA4OGNhMzM4ZDdkOTIwZTZkYzMxN2UwYjdmZTRjZDExMjg2YzMyOTQ4N2YyM2E5MjRlMjVmNTZjYTlmNmIiLCJpYXQiOjE1ODQ0NzU4NTgsIm5iZiI6MTU4NDQ3NTg1OCwiZXhwIjoxOTAwMDA4NjU4LCJzdWIiOiIiLCJzY29wZXMiOlsiKiJdfQ.GJpITNcadQnEJMTAtUiZZ8McOonc-5FLbOtJdWwH3XFW559FK8FP9YsqMyR1sRqPVRkzf9U8nVJQTqCC_I1D9a1XIJlAh67Wepie_9zFGZoECON03veni2lBocyABoXHZ8mLQ2tzYhFznrud3VEoNd5YEJU2L-9euxS5R2vSPTdi3EZJtaiZ3UE7IcxPh72EHIHR1rY-o_uwb0DSYkO1SqW6w_7SgKNZFTyMZ2G_kpDJ1iQICQ7U3TJ64D_CRYedHjzrm4v3Stqph1ORVx3-vjHtwd1A3Bjduv70T4VRXPshborVTrr74z7GHbXwvlh4hBnwcDdFBCRF78JRXklTrl3-g3nqos0R3P7nNYrbYBTDq6C1edjAQm1szZJrK6U4rtQjQOIvqBWGhjz-bJI6SR4Nz-EDipnCyUKTSj60K1HkgWoLFlNO_u4OL4XzIedfjQmYxPrGpQUpKvl8MUqBLdQ3SENHK8ePqhLbBrL8rLq5tgXg-4ll0zULaUYBfcAdrvN3kHNRW2BEtVghk57DeotfcHD8rZBj1x4PAimB7qllnD-JohkiCnJxlgO88cbTXlMeZcGvmDRVcoza0xUIoq9CTmhqCidolw5bQSw34GNwKr1aqlSHZV2tb8j98xB6a5UCJbuaTsLG931mHF1I2JhSITtOMpWST_6n3zA-RMI'
          : 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI3IiwianRpIjoiNjUxN2EwMjJhYmEyZTQ0NTUwZjNlM2NmY2QwNzE4ZDQwMjE4N2RhYzcxOGM2NTA3NjJhYTE5MmQ5YjY0NjU0MzlkNDQzMmQ1YThiNGViZmMiLCJpYXQiOjE1ODQzODM3MTUsIm5iZiI6MTU4NDM4MzcxNSwiZXhwIjoxNzQyMTUwMTE1LCJzdWIiOiIiLCJzY29wZXMiOltdfQ.L_q3RA6O0wjs42G08DXyBZFukkct0UjOr_MFJWCRZCKQhwtxmDlGZfzqPYgqyP-re397-mzFy75wsTFJP2yb3nlxhX4usOLK3f9RlThbWXEos-SwJi3Ml8qQatP65KmKzZGipIESSbLRYxU_R6ZWExzelBV5qFD2AUyFeGUogFTTx1Jl4XBrjyLxqJlnRKndpJcRJ5TmvNmM9P1mTRoGnQOBAAk8HbyEczdeTVctoTLJ4CwceS9O0w9fwVHjPzBmWwBo-f8DvoDZx-BOhQqiWiiQWemGJw-0y1ZS_WiRKHK7-A5tq5VrW28jmPmJajWVIKqK9glo77hq-LOfN8WjU1AleSSsH2BNmYeAPb7tQPVS0CK0ZT2VWyPSTPt6ipG1Opmr4d535qmv398qF4OyP-dEs7DAuwdR0wk6nLhfSDLvMYEcIKQH6acCN3LIWG4Y35ASB2I_49uhkXb57KIlpMQcGgsPDaBO4gd0oprie0Zy2TOnGcE3LfoumCvgfSWRMQu5YYx6rwRppIax8UNWBCZd1pUPvtf6nF023f7kyCWvA0RCtvJsL9rFs5kwigV7MBxZyfcSRlRP6RuUZ8pzDhJ5uewFeivbf5Ne9i3VuFIaJEbjbEBV5EPEgwuymAP3qngjXry0wdH1KrzjfOJFuAKLNOuxXBuzbzgkfWGWT2E',
    },
  };
  constructor() {
    super();

    this.getCompanies();
  }

  /**
   *
   */
  private getCompanies() {
    Axios.get('https://crm-staging.platafoor.com/capi/companies?page[limit]=25&page[number]=1', this.headers).then(
      (companies: AxiosResponse) => {
        if (isEmpty(get(companies, 'data.data'))) return;

        this.setCompanies(companies);

        this.$forceUpdate();
      },
    );
  }

  /**
   *
   * @param companies
   */
  private setCompanies(companies: AxiosResponse): Array<any> {
    return (this.companies = get(companies, 'data.data', []));
  }
}
</script>
<style scoped>
.list-customers {
  width: 800px;
  position: absolute;
  left: calc(50% - 400px);
}
.list-customers p {
  font-size: 24px;
}
.list-customers table {
  width: 100%;
  border: 1px solid #f2f2f2;
}
.list-customers table thead th {
  padding: 15px 10px;
}
.list-customers table tr:nth-child(even) {
  background-color: #f2f2f2;
}
.list-customers table tr td {
  padding: 15px 10px;
}
</style>
