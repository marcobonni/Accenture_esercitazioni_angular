import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-user-single',
  templateUrl: './user-single.component.html',
  styleUrls: ['./user-single.component.scss']
})
export class UserSingleComponent implements OnInit {
  @Input() item : any;
  @Output() removeItem: EventEmitter<number> = new EventEmitter<number>();  
  constructor() { }

  ngOnInit(): void {
  }
  removeUser() {
    console.log("function called"); 
    this.removeItem.emit(this.item.id);
  }

}
