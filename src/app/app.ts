import { Component, OnInit, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Child } from './child/child';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule, Child ] , // 2. Add CommonModule here
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class  App  {  
     courses: {id: number; name: string }[]= [
      {id: 1, name : 'Mastering JavaScript'},
      {id: 2, name : 'Mastering React'},
      {id: 3, name : 'Mastering TypeScript'},
      {id: 4, name : 'Mastering HTML,CSS'},
     ];
 } 