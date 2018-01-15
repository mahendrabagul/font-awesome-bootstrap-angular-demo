import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.css']
})
export class ProfileInfoComponent implements OnInit {
  jobTitle: string = "Specialist Programmer @ Infosys";
  profileImageUrl:string="https://avatars2.githubusercontent.com/u/6149190?s=460&v=4";
  constructor() { }

  ngOnInit() {
  }

}
