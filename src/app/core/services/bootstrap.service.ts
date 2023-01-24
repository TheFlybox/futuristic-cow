import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Environment } from 'src/global';
import { ConfigUrls } from '../enums/api-urls.enum';
import { ConfigCatService } from './config-cat.service';

@Injectable({
  providedIn: 'root',
})
export class BootstrapService {
  constructor(
    private httpClient: HttpClient,
    private configCatService: ConfigCatService,
  ) {}

  initialize(): Observable<Environment> {
    return new Observable<Environment>(observer => {
      this.httpClient.get<Environment>(ConfigUrls.DEFAULT).subscribe(result => {
        this.configCatService.newClient(result.configCatKey);
        observer.next(result);
        observer.complete();
      });
    });
  }
}
