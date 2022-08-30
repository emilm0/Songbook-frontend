import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-song',
  templateUrl: './create-song.component.html',
  styleUrls: ['./create-song.component.scss']
})
export class CreateSongComponent implements OnInit {


  firstFormGroup = this._formBuilder.group({
    titleCtrl: ['', Validators.required],
    titleOriginCtrl: [''],
    keyCtrl: [''],
    keyOriginCtrl: [''],
    tempoCtrl: [''],
    authorCtrl: [''],
    translatorCtrl: [''],
    copyrightCtrl: [''],
    basedOnCtrl: [''],
    groupCtrl: [''],
    typeCtrl: [''],
    urlPlCtrl: [''],
    urlOriginCtrl: [''],
    urlDriveCtrl: [''],
    urlNotesCtrl: [''],
    isReadyToUseCtrl: true,
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

}
