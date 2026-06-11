import { Component } from '@angular/core';
import { AboutMe } from "../components/about-me/about-me";
import { Projects } from "../components/projects/projects";

@Component({
  selector: 'app-main-page',
  imports: [AboutMe, Projects],
  templateUrl: './main-page.html',
  styleUrl: './main-page.css',
})
export class MainPage {

}
