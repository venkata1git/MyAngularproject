import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // 1. Import CommonModule
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule], // 2. Add CommonModule here
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  displayElement: boolean = false;

  // show(): void {
  //   this.displayElement = !this.displayElement;
  // }
}