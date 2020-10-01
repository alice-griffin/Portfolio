import { Component, Host, HostListener, OnInit } from '@angular/core';
import { AnimationEvent } from '@angular/animations';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  hovering1: boolean = false; 
  hovering2: boolean = false; 
  hovering3: boolean = false; 
  hovering4: boolean = false; 

  constructor() { }

  ngOnInit(): void {
  }

}
