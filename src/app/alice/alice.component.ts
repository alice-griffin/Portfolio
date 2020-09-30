import { AfterViewInit, Component, OnInit } from '@angular/core';
import Typewriter from 't-writer.js';
import {trigger, style, state, animate, transition} from '@angular/animations';

@Component({
  selector: 'app-alice',
  templateUrl: './alice.component.html',
  styleUrls: ['./alice.component.css'],
  animations: [
    trigger('fadeIn', [
      state('void', style({
        opacity: 0
      })),
      transition('void => *', animate('1.0s 2.5s')),
    ]),
]})

export class AliceComponent implements OnInit, AfterViewInit {

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

    writer.type(`hi, i'm alice griffin.`).rest(5000).start();
  }
}

