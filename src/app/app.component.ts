import { Component,ViewChild } from '@angular/core';
import { Platform,Nav, MenuController} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Music } from '../pages/music/music';
import { HomePage } from '../pages/home/home';
import { ContactSearch } from '../pages/contact/contact';
import { MapView } from '../pages/map/map';
import { PageGmapAutocomplete} from '../pages/map/page-gmap-autocomplete/page-gmap-autocomplete';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
 rootPage =HomePage;
@ViewChild(Nav) nav: Nav;
 

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,public menuCtrl: MenuController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }


   openMenu() {
   this.menuCtrl.open();
 }

  closeMenu() {
   this.menuCtrl.close();
 }

  toggleMenu() {
   this.menuCtrl.toggle();
 }


music(page)
  {
this.nav.setRoot(Music);
  
  }
  contact(page)
  {
this.nav.setRoot(ContactSearch);
  
  }

  map()
  {
this.nav.setRoot(PageGmapAutocomplete);
  }
}

