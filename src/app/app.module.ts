import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Observable } from 'rxjs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BootstrapService } from './core/services/bootstrap.service';

const initializeApplication = (bootstrapService: BootstrapService) => {
  return (): Observable<unknown> => bootstrapService.initialize();
};

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApplication,
      deps: [BootstrapService],
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
