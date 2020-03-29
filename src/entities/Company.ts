import Vue from 'vue';
import { Model } from '@kernel-js/api';
import { Config } from '@kernel-js/api/dist/Interfaces';

export default class Company extends Model {

  readonly baseUrl = '/capi/companies';
  readonly fields = ['active', 'legal_name', 'primary_registry'];
  readonly relationshipNames = [''];

  protected request(config: Config): Promise<any> {
    return Vue.prototype.$request(config);
  }

}