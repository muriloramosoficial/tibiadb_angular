import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiService } from './api/api.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'tibiadb';
  usuarios!: any[];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getUsuarios().subscribe((data) => {
      this.usuarios = data;
    });

    throw new Error('Method not implemented.');
  }
}
