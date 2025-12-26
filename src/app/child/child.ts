import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-child',
  imports: [NgForOf],
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class Child {
    @Output() myEvent = new EventEmitter();

    emitEvent(){
      this.myEvent.emit 
      ('Event emitted from child component');
    }
}
