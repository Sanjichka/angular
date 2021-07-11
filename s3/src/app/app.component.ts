import { Component } from '@angular/core';
import {ARTISTS} from '../db-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

artisti = ARTISTS;

}
