import { Component,ViewChild} from '@angular/core';
import { NavController,Nav} from 'ionic-angular';
import { HomePage } from '../home/home';
@Component({
  selector: 'brain-header',
  templateUrl: 'header.html'
})

export class Header {
  @ViewChild(Nav) nav: Nav;
 
    
    constructor(public navCtrl: NavController) {}

    goHome()
    	{

			this.navCtrl.setRoot(HomePage);
    	}
}
