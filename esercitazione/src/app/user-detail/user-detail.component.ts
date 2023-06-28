import { Component, OnInit } from '@angular/core';

interface isAddress {
  city: string;
  street: string;
  postalCode: string;
}
interface isCompany {
  name: string;
  description: string;
}
interface isUserInfo {
  id: number;
  name : string;
  surname : string;
  age : number;
  dateOfBirth : string;
  address : isAddress;
  role : "staff" | "admin";
  username : string;
  img_url:  string;
  gender : "male" | "female" | "other";
  company : isCompany;
}

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})

export class UserDetailComponent implements OnInit {
  user : isUserInfo  = {
    id : 3487,
    name: "Mario",
    surname: "Rossi",
    age: 30,
    dateOfBirth : "1995-Dec-14",
    address :  {
      city : "Roma",
      street : "via Roma 10",
      postalCode : "00100",
    },
    role: "staff",
    username: "Super",
    img_url: "https://picsum.photos/id/237/536/354",
    gender : "male",
    company : {
      name : "Develhope",
      description :  "La migliore"
    }
    }
  
  constructor() { }

  ngOnInit(): void {
  }

}
