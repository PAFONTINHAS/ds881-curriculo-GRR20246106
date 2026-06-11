import { Component } from '@angular/core';
import { AboutMe } from "../components/about-me/about-me";
import { Projects } from "../components/projects/projects";
import { Contact } from "../components/contact/contact";

@Component({
  selector: 'app-main-page',
  imports: [AboutMe, Projects, Contact],
  templateUrl: './main-page.html',
  styleUrl: './main-page.css',
})
export class MainPage {

}
