import { Component, OnInit } from '@angular/core';
import { EnvironmentService } from './core/services/environment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private envService: EnvironmentService) {}

  ngOnInit(): void {
    this.envService.getApplicationRootUrl();
  }
}
