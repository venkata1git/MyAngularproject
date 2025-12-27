import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-child',
  imports: [NgForOf],
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class Child implements OnInit, OnDestroy{
    @Input() items : string [] = [];
    @Output() itemDeleted = new EventEmitter<number>();
  
    deleteIndex(index: number){
      this.itemDeleted.emit(index);
    }

    ngOnInit(): void {
      console.log('Child component is initialized');
    }
    ngOnDestroy(): void {
      console.log('Child component is destroyed');
    }
}
