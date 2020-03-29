import Axios, { AxiosInstance } from 'axios';

declare module 'vue/types/vue' {
  interface Vue {
    $request: AxiosInstance;
  }
}

export default {
  install(Vue: any) {
    Vue.prototype.$request = Axios.create({
      baseURL: 'https://crm-staging.platafoor.com',
      headers: {
        'App-Id': '7d04acde-118b-4a87-abde-af7d5a15d14f',
        'Content-Type' : 'application/json',
        'Authorization': process.env.ENVIRONMENT === 'production'
          ? 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI2IiwianRpIjoiYmNhNGFiZjkzYjgzODQyYWU0MjA4OGNhMzM4ZDdkOTIwZTZkYzMxN2UwYjdmZTRjZDExMjg2YzMyOTQ4N2YyM2E5MjRlMjVmNTZjYTlmNmIiLCJpYXQiOjE1ODQ0NzU4NTgsIm5iZiI6MTU4NDQ3NTg1OCwiZXhwIjoxOTAwMDA4NjU4LCJzdWIiOiIiLCJzY29wZXMiOlsiKiJdfQ.GJpITNcadQnEJMTAtUiZZ8McOonc-5FLbOtJdWwH3XFW559FK8FP9YsqMyR1sRqPVRkzf9U8nVJQTqCC_I1D9a1XIJlAh67Wepie_9zFGZoECON03veni2lBocyABoXHZ8mLQ2tzYhFznrud3VEoNd5YEJU2L-9euxS5R2vSPTdi3EZJtaiZ3UE7IcxPh72EHIHR1rY-o_uwb0DSYkO1SqW6w_7SgKNZFTyMZ2G_kpDJ1iQICQ7U3TJ64D_CRYedHjzrm4v3Stqph1ORVx3-vjHtwd1A3Bjduv70T4VRXPshborVTrr74z7GHbXwvlh4hBnwcDdFBCRF78JRXklTrl3-g3nqos0R3P7nNYrbYBTDq6C1edjAQm1szZJrK6U4rtQjQOIvqBWGhjz-bJI6SR4Nz-EDipnCyUKTSj60K1HkgWoLFlNO_u4OL4XzIedfjQmYxPrGpQUpKvl8MUqBLdQ3SENHK8ePqhLbBrL8rLq5tgXg-4ll0zULaUYBfcAdrvN3kHNRW2BEtVghk57DeotfcHD8rZBj1x4PAimB7qllnD-JohkiCnJxlgO88cbTXlMeZcGvmDRVcoza0xUIoq9CTmhqCidolw5bQSw34GNwKr1aqlSHZV2tb8j98xB6a5UCJbuaTsLG931mHF1I2JhSITtOMpWST_6n3zA-RMI'
          : 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI3IiwianRpIjoiNjUxN2EwMjJhYmEyZTQ0NTUwZjNlM2NmY2QwNzE4ZDQwMjE4N2RhYzcxOGM2NTA3NjJhYTE5MmQ5YjY0NjU0MzlkNDQzMmQ1YThiNGViZmMiLCJpYXQiOjE1ODQzODM3MTUsIm5iZiI6MTU4NDM4MzcxNSwiZXhwIjoxNzQyMTUwMTE1LCJzdWIiOiIiLCJzY29wZXMiOltdfQ.L_q3RA6O0wjs42G08DXyBZFukkct0UjOr_MFJWCRZCKQhwtxmDlGZfzqPYgqyP-re397-mzFy75wsTFJP2yb3nlxhX4usOLK3f9RlThbWXEos-SwJi3Ml8qQatP65KmKzZGipIESSbLRYxU_R6ZWExzelBV5qFD2AUyFeGUogFTTx1Jl4XBrjyLxqJlnRKndpJcRJ5TmvNmM9P1mTRoGnQOBAAk8HbyEczdeTVctoTLJ4CwceS9O0w9fwVHjPzBmWwBo-f8DvoDZx-BOhQqiWiiQWemGJw-0y1ZS_WiRKHK7-A5tq5VrW28jmPmJajWVIKqK9glo77hq-LOfN8WjU1AleSSsH2BNmYeAPb7tQPVS0CK0ZT2VWyPSTPt6ipG1Opmr4d535qmv398qF4OyP-dEs7DAuwdR0wk6nLhfSDLvMYEcIKQH6acCN3LIWG4Y35ASB2I_49uhkXb57KIlpMQcGgsPDaBO4gd0oprie0Zy2TOnGcE3LfoumCvgfSWRMQu5YYx6rwRppIax8UNWBCZd1pUPvtf6nF023f7kyCWvA0RCtvJsL9rFs5kwigV7MBxZyfcSRlRP6RuUZ8pzDhJ5uewFeivbf5Ne9i3VuFIaJEbjbEBV5EPEgwuymAP3qngjXry0wdH1KrzjfOJFuAKLNOuxXBuzbzgkfWGWT2E',
      }
    });
  },
};
