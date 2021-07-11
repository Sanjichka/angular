import { Component, OnInit, Input } from '@angular/core';
import { Artist } from '../model/artist';

@Component({
  selector: 'artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

  @Input()
  ars:Artist;


  constructor() { }

  ngOnInit() {
  }

}
