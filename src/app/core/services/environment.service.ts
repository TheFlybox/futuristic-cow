import { Injectable } from '@angular/core';
import { IConfigCatClient } from 'configcat-js';
import { ConfigCatService } from './config-cat.service';

@Injectable({
  providedIn: 'root',
})
export class EnvironmentService {
  constructor(private configCatService: ConfigCatService) {}

  private get configCatClient(): IConfigCatClient | undefined {
    return this.configCatService.getClient();
  }

  async getApplicationRootUrl(): Promise<void> {
    return this.configCatClient
      ?.getValueAsync('applicationRootUrl', '')
      .then(value => {
        console.log('ROOT URL: ', value);
      });
  }
}
