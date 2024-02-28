import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  BBosses,
  BoostableBossList,
} from '../api/interfaces/boostaleboss.interface';
import { ApiService } from '../api/api.service';

import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCardImage } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'app-boostableboss',
  standalone: true,
  imports: [
    CommonModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatCardModule,
    MatCardImage,
    MatDividerModule,
    MatPaginatorModule,
    MatProgressBarModule,
  ],
  templateUrl: './boostableboss.component.html',
  styleUrl: './boostableboss.component.css',
})
export class BoostablebossComponent {
  boostableBossData!: BBosses;
  boostableBossesListData: BoostableBossList[] = [];
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

  atualizarDadosTabela(event: PageEvent) {
    const pageIndex = event.pageIndex;
    const pageSize = event.pageSize;
    const startIndex = pageIndex * pageSize;
    const endIndex = startIndex + pageSize;

    this.apiService
      .getBoostableBoss()
      .then((data: BBosses) => {
        this.boostableBossData = data;
        this.boostableBossesListData =
          data.boostable_bosses.boostable_boss_list.slice(startIndex, endIndex);
        console.log(this.boostableBossesListData);
      })
      .catch((error) => {
        console.error('Erro ao buscar API.', error);
      });
  }
}
