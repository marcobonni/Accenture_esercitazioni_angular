import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-user-single',
  templateUrl: './user-single.component.html',
  styleUrls: ['./user-single.component.scss']
})
export class UserSingleComponent implements OnInit {
  @Input() user : any;
  @Output() removeUser = new EventEmitter<any>(); 
  
  removeItem() {
    this.removeUser.emit(this.user);
  }
  constructor() { }

  ngOnInit(): void {
  }
  

}
