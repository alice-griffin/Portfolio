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
      transition('void => *', animate('2.5s')),
    ]),
]})

export class HeaderComponent implements OnInit, AfterViewInit {

  constructor() { }

  delay: Number = 1

  ngOnInit(): void {
    
  }



  ngAfterViewInit() {
    const target = document.getElementById("typedtext") as HTMLElement;

    const writer = new Typewriter(target, {
      loop: false,
      typeColor: 'black'
    })

    writer.type('alice griffin.').rest(5000).start();
  }
};
