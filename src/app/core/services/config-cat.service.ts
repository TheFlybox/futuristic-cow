import { Injectable } from '@angular/core';
import {
  getClient,
  IConfigCatClient,
  createConsoleLogger,
  IConfigCatLogger,
  PollingMode,
} from 'configcat-js';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ConfigCatService {
  private _client?: IConfigCatClient;
  private logger?: IConfigCatLogger;

  public newClient(key: string, logLevel = 3): void {
    if (environment.production) this.logger = createConsoleLogger(logLevel);
    this._client = getClient(key, PollingMode.AutoPoll, {
      logger: this.logger,
    });
  }

  public getClient(): IConfigCatClient | undefined {
    return this._client;
  }
}
