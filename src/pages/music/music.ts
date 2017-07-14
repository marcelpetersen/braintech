import {Component, Provider} from '@angular/core';
import { Platform,Nav, MenuController} from 'ionic-angular';
import { AudioProvider } from 'ionic-audio';
 
@Component({
  templateUrl: 'music.html'
})
export class Music {
  myTracks: any[];
  singleTrack: any;
  allTracks: any[];
  selectedTrack: number;
  constructor(private _audioProvider: AudioProvider) { 
    // plugin won't preload data by default, unless preload property is defined within json object - defaults to 'none'
    this.myTracks = [{
      src: '/android_asset/www/music/m1.mp3',
      artist: 'Music 1',
      title: ' Brainvire',
      art: '',
      preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
    },
    {
      src: '/android_asset/www/music/m2.mp3',
      artist: 'Music 2',
      title: 'Brainvire',
      art: '',
      preload: 'metadata' // tell the plugin to preload metadata such as duration for this track,  set to 'none' to turn off
    },
      {
      src: '/android_asset/www/music/m2.mp3',
      artist: 'Music 3',
      title: 'Brainvire',
      art: '',
      preload: 'metadata' // tell the plugin to preload metadata such as duration for this track,  set to 'none' to turn off
    },
      {
      src: '/android_asset/www/music/m2.mp3',
      artist: 'Music 4',
      title: 'Brainvire',
      art: '',
      preload: 'metadata' // tell the plugin to preload metadata such as duration for this track,  set to 'none' to turn off
    }];
  }
  

  ngAfterContentInit() {     
    // get all tracks managed by AudioProvider so we can control playback via the API
    this.allTracks = this._audioProvider.tracks; 
  }
  
  playSelectedTrack() {
    // use AudioProvider to control selected track 
    this._audioProvider.play(this.selectedTrack);
  }
  
  pauseSelectedTrack() {
     // use AudioProvider to control selected track 
     this._audioProvider.pause(this.selectedTrack);
  }
         
  onTrackFinished(track: any) {
    console.log('Track finished', track)
  }


searchMusic(searchbar)
{
  
var q = searchbar.srcElement.value;


  if (!q) {
    return;
  }

  this.myTracks = this.myTracks.filter((v) => {
    if(v.artist && q) {




      if ((v.artist.toLowerCase().indexOf(q.toLowerCase()) > -1) || (v.title.toLowerCase().indexOf(q.toLowerCase()) > -1) ) {
        return true;
      }
      return false;
    }
  });

  console.log(q, this.myTracks.length);

















}

}