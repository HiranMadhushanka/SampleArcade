import { Component, OnInit,OnChanges, SimpleChanges } from '@angular/core';
declare const WaveSurfer: any;

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit,OnChanges {

  isPlay: boolean = true;
  playBtnVisible: boolean = true;
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }
  
  wavesurfer: any;
  ngOnInit(): void {
    this.wavesurfer = WaveSurfer.create({
      container: '#waveform',
      waveColor: 'gray',
      progressColor: 'orange',
      cursorColor: 'balck',
      barHeight: 2,
      height: 50,
      responsive: true,
      hideScrollbar: true

    });
    this.wavesurfer.load('http://ia902606.us.archive.org/35/items/shortpoetry_047_librivox/song_cjrg_teasdale_64kb.mp3');



  }
  play() {

    if (this.isPlay) {

      this.wavesurfer.play();
      this.wavesurfer.on('finish', () => {
        this.wavesurfer.play();
      });
      
    } else {
      this.wavesurfer.pause();
    }
    this.isPlay = !this.isPlay;
    this.playBtnVisible = !this.playBtnVisible;
  }


}
