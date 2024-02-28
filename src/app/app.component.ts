import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiService } from './api/api.service';
import {
  BBosses,
  BoostableBossList,
  BoostableBosses,
} from './api/interfaces/boostaleboss.interface';
import { CommonModule } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCardImage } from '@angular/material/card';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    MatSlideToggleModule,
    MatCardModule,
    MatButtonModule,
    MatCardImage,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'tibiadb';
  boostableBossData!: BBosses;
  boostableBossesListData: BoostableBossList[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService
      .getBoostableBoss()
      .then((data: BBosses) => {
        this.boostableBossData = data;
        this.boostableBossesListData =
          data.boostable_bosses.boostable_boss_list;
        console.log(this.boostableBossesListData);
      })
      .catch((error) => {
        console.error('Erro ao buscar API.', error);
      });
  }
}
