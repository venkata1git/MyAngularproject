import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule], // 2. Add CommonModule here
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  colorMode: string = 'lightMode';
  toggleMode() {
    if (this.colorMode === 'lightMode') {
      this.colorMode = 'darkMode';
    } else {
      this.colorMode = 'lightMode';
    }
  }
} 