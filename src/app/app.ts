import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Child } from './child/child';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule, Child, ] , // 2. Add CommonModule here
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class  App implements AfterViewInit {  
     @ViewChild(Child) childComponent?: Child;
     @ViewChild('btnIncr') btnRef?: ElementRef<HTMLButtonElement>;


     incrChildCounter() {
      console.log(this.childComponent);
      this.childComponent?.incrCounter();
     }
    ngAfterViewInit(): void{
      if(this.btnRef?.nativeElement){
        this.btnRef.nativeElement.innerHTML='Counter ++';
      }
    } 
 } 