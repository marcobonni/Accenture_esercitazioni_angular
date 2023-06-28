import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-single',
  templateUrl: './user-single.component.html',
  styleUrls: ['./user-single.component.scss']
})
export class UserSingleComponent implements OnInit {
  @Input() items : any;
  constructor() { }

  ngOnInit(): void {
  }

}
