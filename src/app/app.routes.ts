import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { BoostablebossComponent } from './boostableboss/boostableboss.component';
import { DashboardComponent } from './dashboard/dashboard.component';
// import { TesteComponent } from './teste/teste.component';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' }, // redireciona a rota vazia para a rota de login
  //   { path: 'teste', component: TesteComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'boostableboss', component: BoostablebossComponent },
];
