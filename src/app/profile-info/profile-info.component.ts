import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.css']
})
export class ProfileInfoComponent implements OnInit {
  currentJobTitle: string = "Specialist Programmer @ Infosys";
  currentJobDetails: string = "Working on Spring Boot, Micro-services, JHipster, Angular 5, Typescript, Spring-Social Integrations, Oauth2, Elastic Search, Cassandra, CouchDB, Jersey, CI/CD Pipeline, Bamboo, Bitbucket, SonarQube, Jira and many more tools for Agile Development.";
  profileImageUrl: string = "http://localhost:3000/images/profile.jpg";
  constructor() { }

  ngOnInit() {
  }

}
