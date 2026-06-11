import { Component } from '@angular/core';
import { ProjectsMock } from '../../core/mock/ProjectsMock';
import { Project } from '../../core/models/ProjectModel';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {

  projects : Project[] = ProjectsMock;

}
