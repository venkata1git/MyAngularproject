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
  applyValue ={'color': 'darkgreen',
               'font-style':'italic',
               'font-size':'35px',
               'font-weight': 'bold',
              };

  colorValue: string = 'navy';
  fontSize: string = '30px';
  isItalic: string = 'italic';
  }
 