import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-child',
  imports: [NgForOf],
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class Child {
    @Input() showData: {id: number; name: string } [] = [];
}
