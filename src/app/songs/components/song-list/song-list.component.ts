import { Component, OnInit } from '@angular/core';
import { SongResponse } from '../../models/responses/SongResponse';
import { SongService } from '../../services/song.service';

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.scss']
})
export class SongListComponent implements OnInit {

    alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K',
    'L', 'M', 'N', 'O', 'P', 'R', 'S', 'T', 'U', 'W', 'Z'];

  songs: SongResponse[] = [];
  typeList = "Tabs";

  constructor(private songService: SongService) { }

  ngOnInit(): void {
  this.getSongs();
  }

  getSongs(): void {
  this.songService.getSongs()
  .subscribe(songs => this.songs = songs);
  }

  isTheSameFirstLetter(song: SongResponse, letter: string): boolean {
  return (song.title.slice(0, 1).toUpperCase() === letter);
  }

  songsWithTheSameFirstLetter(letter: string): Array<SongResponse> {
    var songList = new Array<SongResponse>();
    this.songs.forEach(s => {
      if(this.isTheSameFirstLetter(s, letter)) {
        songList.push(s)
      }
    });

    return songList;
  }

}
