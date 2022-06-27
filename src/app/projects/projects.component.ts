import { Component, OnInit } from '@angular/core';
import { IProjects } from './IProjects';
import { projects } from './projects';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects: Array<IProjects>= projects;


  constructor() { }

  ngOnInit(): void {
  }

}

