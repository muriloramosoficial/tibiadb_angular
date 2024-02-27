import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { RouterOutlet } from '@angular/router';

@NgModule({
  imports: [CommonModule],
  declarations: [AppComponent, RouterOutlet],
})
export class AppModule {}
