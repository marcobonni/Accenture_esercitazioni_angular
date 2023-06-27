import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})

interface isUserInfo {
  id: string;

}
export class UserDetailComponent implements OnInit {
   user_info : any  = {
    id : 
  }
  constructor() { }

  ngOnInit(): void {
  }

}
