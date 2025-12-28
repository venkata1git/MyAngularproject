import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-child',
  imports: [NgForOf],
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class Child {
    count: number =0;

    incrCounter(){
      this.count++;
    }
}
