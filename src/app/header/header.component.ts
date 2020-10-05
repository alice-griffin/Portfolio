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

  scrolled: boolean = false;


  @HostListener('window:scroll', []) 
    onScroll() {
    const nav = document.querySelector("nav");
    nav.classList.add("scrolled");
    this.scrolled = true;
    if (window.scrollY === 0) {
      nav.classList.remove("scrolled");
      nav.style.transition = "all ease-out 0.5s"
      this.scrolled = false; 
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

