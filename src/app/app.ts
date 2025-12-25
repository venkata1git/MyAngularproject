import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule], // 2. Add CommonModule here
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class  App{
 subjectList= [
  {
    subCode:101,
    subName:'Math'
  },
  {
    //subCode:102,
    subName:'C++'
  },
  {
    subCode:103,
    subName:'NestJS'
  },
];
}  