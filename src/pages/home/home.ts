import { Component,ViewChild, NgZone,Provider } from '@angular/core';
import {   UserAdd  } from '../user-add/user-add';
import { Storage } from '@ionic/storage';
import { NativeStorage } from '@ionic-native/native-storage';
import { NavController ,ToastController,Content, Platform,Nav, MenuController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public birthdate: Date;
  myTracks: any[];
 drawerOptions: any;
 searchQuery:any;
 searchQuery1:any;
 userCheck=[];
 in:any;
 age:any;
    constructor(public navCtrl: NavController,private storage: Storage,private nativeStorage: NativeStorage,public platform:Platform,private toast: ToastController ) {

	this.searchQuery = '';
  this.loadValue();
    }

  showToast(msg){
  let toast =  this.toast.create({
      message: msg,
      duration: 3000,
      position:'buttom'
      
    })
    toast.present();
  }

ngOnInit(){
}





   loadValue()
   {
   this.nativeStorage.getItem('todos').then((d)=>{
      console.log('getting native storage data',d);
      this.myTracks = d;
      
    },(e)=>{
      console.log('getting err',e);
      this.showToast('unable to get local from native storage')
    })

   }





addUser()
{
this.navCtrl.setRoot(UserAdd);

}

remove(){
      
  
      for(var i=0;i<this.userCheck.length;i++)
        {
           this.in=this.userCheck[i].value;
          this.myTracks.slice(this.in,1);
           this.showToast(i);     
        }

      this.nativeStorage.setItem('todos',this.myTracks).then((d)=>{
     this.navCtrl.setRoot(this.navCtrl.getActive().component);
    },(e)=>{
      this.showToast('unable to saved to native storage');
    })


      
                   
    }




changeDeleteState(index)
  {


 this.userCheck.push({
      value:index});
  
     console.log(this.userCheck);
        
  }


getItems(searchbar) {


 var q = searchbar.srcElement.value;


  if (!q) {
    return;
  }

  this.myTracks = this.myTracks.filter((v) => {
    if(v.name && q) {

      if ((v.name.toLowerCase().indexOf(q.toLowerCase()) > -1) ) {
        return true;
      }
      return false;
    }
  });

  console.log(q, this.myTracks.length);

}







getNames(searchbar) {
}




onCancel(ev)
{
   this.loadValue();
ev.stopPropagation();
}








}
