import { Component, OnInit } from '@angular/core';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCardImage } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import {
  BBosses,
  BoostableBossList,
} from '../api/interfaces/boostaleboss.interface';
import { ApiService } from '../api/api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    MatButtonModule,
    MatCardImage,
    MatCardModule,
    MatDividerModule,
    MatProgressBarModule,
    MatSlideToggleModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    CommonModule,
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  boostableBossData!: BBosses;
  boostableBossesListData: BoostableBossList[] = [];
  itemSelected: any;
  showPage = false;
  progresso: number = 0;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService
      .getBoostableBoss()
      .then((data: BBosses) => {
        this.boostableBossData = data;
        this.boostableBossesListData =
          data.boostable_bosses.boostable_boss_list.slice(0, 5);
        this.showPage = true;
        this.progresso = 100;
        console.log(this.boostableBossesListData);
      })
      .catch((error) => {
        console.error('Erro ao buscar API.', error);
      });
  }

  selecionarItemAleatorio() {
    const indiceAleatorio = Math.floor(
      Math.random() * this.boostableBossesListData.length
    );
    this.itemSelected = this.boostableBossesListData[indiceAleatorio];
  }
}
