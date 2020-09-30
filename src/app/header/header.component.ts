import { AfterViewInit, Component, OnInit } from '@angular/core';
import Typewriter from 't-writer.js';
import {trigger, style, state, animate, transition} from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
    trigger('fadeIn', [
      state('void', style({
        opacity: 0
      })),
      transition('void => *', animate('1.0s 2.0s')),
    ]),
]})

export class HeaderComponent implements OnInit {

  constructor() { }


  ngOnInit(): void {
    
  }

  toAbout() {
  document.getElementById("about").scrollIntoView({behavior: "smooth"});
  }

  toProjects() {
    document.getElementById("projects").scrollIntoView({behavior: "smooth"});
  }
}


  
