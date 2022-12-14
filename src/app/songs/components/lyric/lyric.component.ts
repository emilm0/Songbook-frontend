import { Component, Input, OnInit } from '@angular/core';
import { Line } from '../../models/Line';

@Component({
  selector: 'app-lyric',
  templateUrl: './lyric.component.html',
  styleUrls: ['./lyric.component.scss']
})
export class LyricComponent implements OnInit {

  @Input()
  lines: Line[] = [];
  checkedOriginLines = false;
  chordsPositions = ['Right', 'Top', 'None'];
  activatedChordsPosition = 'None';
  constructor( ) { }

  ngOnInit(): void {
  }

}
