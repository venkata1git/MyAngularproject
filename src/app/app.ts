import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common'; // 1. Import CommonModule
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

export interface FullStackDev {
  id: number;
  name: string; 
}
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule], // 2. Add CommonModule here
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  fullStackDev = [{
    id: 1,
    name: 'Angluar'
  }, {
    id: 2,
    name: 'React'
  },{
    id: 3,
    name: 'Vue'
  },{
    id: 4,
    name: 'Svelte'
  }]
}