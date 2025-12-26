import { Component, OnInit, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Test } from './test/test';
import { Child } from './child/child';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule, Test, Child], // 2. Add CommonModule here
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class  App  {  
     displayMessage: string = 'Hello, Message from parent component';

     showMsg() {
      this.displayMessage = 'Child Component: Message Updated'
     }
 } 