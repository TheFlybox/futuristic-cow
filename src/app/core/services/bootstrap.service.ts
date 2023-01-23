import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ConfigCatService } from './config-cat.service';

@Injectable({
  providedIn: 'root',
})
export class BootstrapService {
  constructor(private configCatService: ConfigCatService) {}

  initialize(): Observable<unknown> {
    return of(this.configCatService.newClient(environment.configCatKey));
  }
}
