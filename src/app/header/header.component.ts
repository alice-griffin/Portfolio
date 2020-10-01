import { Component, HostListener, OnInit } from '@angular/core';
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


  @HostListener('window:scroll', []) 
    onScroll() {
    let nav = document.querySelector("nav")
    nav.classList.add("scrolled");
    if (window.scrollY === 0) {
      nav.classList.remove("scrolled");
      nav.style.transition = "all ease-out 0.5s"
    }
  }

  ngOnInit(): void {
    
  }

  toAbout() {
  document.getElementById("about").scrollIntoView({behavior: "smooth"});
  }

  toProjects() {
    document.getElementById("projects").scrollIntoView({behavior: "smooth"});
  }
}

