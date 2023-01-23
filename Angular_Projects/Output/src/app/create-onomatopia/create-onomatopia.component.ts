import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-onomatopia',
  templateUrl: './create-onomatopia.component.html',
  styleUrls: ['./create-onomatopia.component.css']
})
export class CreateOnomatopiaComponent implements OnInit {
  newOnomatopia: string = '';
  @Output() sendOnomatopiaToParent = new EventEmitter<string>();

  constructor() {}
  ngOnInit(): void {
    
  }
  createOnomatopia() {
  this.sendOnomatopiaToParent.emit(this.newOnomatopia);
  this.newOnomatopia = '';
  }
  
}
