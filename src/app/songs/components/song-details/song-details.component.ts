import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { SongService } from '../../services/song.service';
import { SongResponse } from '../../models/responses/SongResponse';

@Component({
  selector: 'app-song-details',
  templateUrl: './song-details.component.html',
  styleUrls: ['./song-details.component.scss'],
  animations: [
    trigger('smoothCollapse', [
      state('initial', style({
        height: '0',
        overflow: 'hidden',
        opacity: '0',
        visibility: 'hidden'
      })),
      state('final', style({
        overflow: 'hidden'
      })),
      transition('initial<=>final', animate(250))
    ]),
    trigger('rotatedState', [
      state('default', style({ transform: 'rotate(0)'})),
      state('rotated', style({ transform: 'rotate(180deg)'})),
      transition('default<=>rotated', animate('250ms'))
    ])
  ]
})
export class SongDetailsComponent implements OnInit {

  song: SongResponse | undefined;
  isVisibleDetails = false;
  isLogIn = true;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private songService: SongService,
  ) { }

  ngOnInit(): void {
    this.getSong()
  }

  getSong(): void {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.songService.getSong(id).
      subscribe(song => this.song = song);
  }
  goToSongbook(): void {
    const songId = this.song ? this.song.id : null;
    this.router.navigate(['/songs', { id: songId }]);
  }

  changeVisibleDetails(): boolean {
    return this.isVisibleDetails = !this.isVisibleDetails;
  }
}
