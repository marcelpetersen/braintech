import { Component } from '@angular/core';
import { MenuController } from 'ionic-angular';
import { Camera } from '@ionic-native/camera';
import { AlertController } from 'ionic-angular';
import {   HomePage } from '../home/home';
import { Storage } from '@ionic/storage';
import { NativeStorage } from '@ionic-native/native-storage';
import {NavController,ToastController} from 'ionic-angular';
@Component({
  selector: 'user-add',
  templateUrl: 'user-add.html'
})
export class UserAdd {
items = [];
data = [];

name:any;
base64Image:any;
something:any;
 constructor(public navCtrl: NavController,public menuCtrl: MenuController,public camera:Camera,public storage: Storage,private nativeStorage: NativeStorage,private toast: ToastController) {
    
   this.nativeStorage.getItem('todos').then((d)=>{
      console.log('getting native storage data',d);
      this.data = d;
      
    },(e)=>{
      console.log('getting err',e);
      this.showToast('unable to get local from native storage')
    })

 }
 
  showToast(msg){
  let toast =  this.toast.create({
      message: msg,
      duration: 3000,
      position:'buttom'
      
    })
    toast.present();
  }


save() {

 this.items.push({
      name: this.name,
      checked:false
    });

      this.data = this.data.concat(this.items);
       this.nativeStorage.setItem('todos',this.data).then((d)=>{
      console.log('storage save',d);
       this.navCtrl.push(HomePage);
    },(e)=>{
      console.log('unable to save',e);
      this.showToast('unable to saved to native storage');
    })}






}
