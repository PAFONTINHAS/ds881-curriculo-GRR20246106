import { Component } from '@angular/core';
import { AboutMe } from "../components/about-me/about-me";

@Component({
  selector: 'app-main-page',
  imports: [AboutMe],
  templateUrl: './main-page.html',
  styleUrl: './main-page.css',
})
export class MainPage {

}
