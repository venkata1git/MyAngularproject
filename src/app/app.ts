import { Component, OnInit, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Test } from './test/test';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule, Test], // 2. Add CommonModule here
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class  App implements OnInit {  
     count: number=0;
     countInterval: any;
     startCounter(){
      this.countInterval = setInterval(()=>{
        if(this.count<= 5){
          console.log(this.count++)
        }else{
          clearInterval(this.countInterval);
        }
      }, 1000);
     }
     ngOnInit(): void {
        this.startCounter();
       //console.log('ngONInint: Component has been initialized')
     }
     constructor(){
      // this.startCounter();
      //console.log('Constructor: Component has been constructed')
     }
 } 