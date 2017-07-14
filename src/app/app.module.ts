import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { ContentDrawer } from '../pages/contentdrawer/contentdrawer';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ContactAdd } from '../pages/contact/contactadd';
import {ContactSearch} from '../pages/contact/contact';
import { Contacts, Contact, ContactField, ContactName } from '@ionic-native/contacts';
import { Music } from '../pages/music/music';
import { UserAdd } from '../pages/user-add/user-add';
import {  Header } from '../pages/header/header';
import {  SideDrawer} from '../pages/sidedrawer/sideDrawer';
import { Camera } from '@ionic-native/camera';
import { IonicStorageModule } from '@ionic/storage';
import { NativeStorage } from '@ionic-native/native-storage';
import { Geolocation } from '@ionic-native/geolocation';
import { MapView } from '../pages/map/map';
import { IonicAudioModule, AudioProvider, WebAudioProvider} from 'ionic-audio';
import { PageGmapAutocomplete} from '../pages/map/page-gmap-autocomplete/page-gmap-autocomplete';


export function myCustomAudioProviderFactory() {
  return new WebAudioProvider();
}



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    UserAdd,
     ContentDrawer,
      Header,
      Music,
      ContactSearch,
      ContactAdd,
      MapView, 
       PageGmapAutocomplete,
      SideDrawer
  ],
  imports: [
    BrowserModule,
    IonicAudioModule.forRoot({ provide: AudioProvider, useFactory: myCustomAudioProviderFactory  }), 
       IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp,{
    menuType: 'push',
    platforms: {
      ios: {
        menuType: 'overlay',
      }
    }
  })],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    UserAdd,
    Music,
    MapView ,
     PageGmapAutocomplete,
   ContactSearch,
      ContactAdd
      ],
  providers: [
    StatusBar,
    SplashScreen,
     Camera,
     Contact,
     Geolocation,
     Contacts,
     NativeStorage,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ],
})
export class AppModule {}
