import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ApiService } from './api/api.service';
import {
  BBosses,
  BoostableBossList,
  BoostableBosses,
} from './api/interfaces/boostaleboss.interface';
import { CommonModule } from '@angular/common';
import { BoostablebossComponent } from './boostableboss/boostableboss.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    BoostablebossComponent,
    DashboardComponent,
    RouterLink,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'tibiadb';

  ngOnInit(): void {}
}
