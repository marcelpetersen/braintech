import { Component, OnInit ,ViewChild ,ElementRef } from '@angular/core';
import { NavController,ViewController  } from 'ionic-angular';
import { Geolocation ,GeolocationOptions ,Geoposition ,PositionError } from '@ionic-native/geolocation';
import { NearByMap  } from './nearbymap';
declare var google: any;
@Component({
  selector: 'map',
  templateUrl: 'map.html'
})
export class MapView  implements OnInit {

 autocompleteItems: any;
    autocomplete: any;
    acService:any;
    placesService: any;


options : GeolocationOptions;
currentPos : Geoposition;
@ViewChild('map') mapElement: ElementRef;
map: any;
public currentLocation;

  constructor(public navCtrl: NavController,private geolocation : Geolocation,public viewCtrl: ViewController) {}


ngOnInit() {
this.acService = new google.maps.places.AutocompleteService();        
this.autocompleteItems = [];
this.autocomplete = {
query: ''
};        
}


dismiss() {
        this.viewCtrl.dismiss();
    }


chooseItem(item: any) {
        console.log('modal > chooseItem > item > ', item);
        this.viewCtrl.dismiss(item);
    }


 updateSearch() {
        console.log('modal > updateSearch');
        if (this.autocomplete.query == '') {
            this.autocompleteItems = [];
            return;
        }
        let self = this;
        let config = { 
            types:  ['geocode'], // other types available in the API: 'establishment', 'regions', and 'cities'
            input: this.autocomplete.query, 
            componentRestrictions: { country: 'IN' } 
        }
        this.acService.getPlacePredictions(config, function (predictions, status) {
            console.log('modal > getPlacePredictions > status > ', status);
            self.autocompleteItems = [];            
            predictions.forEach(function (prediction) {              
                self.autocompleteItems.push(prediction);
            });
        });
    }






nearbymap()
  {
  this.navCtrl.setRoot(NearByMap);

  }




    getUserPosition(){
        this.options = {
        enableHighAccuracy : false
                    };
    this.geolocation.getCurrentPosition(this.options).then((pos : Geoposition) => {
        this.currentPos = pos;     
        console.log(pos);
        this.addMap(pos.coords.latitude,pos.coords.longitude);

    },(err : PositionError)=>{
        console.log("error : " + err.message);
    ;
    })
    }
    ionViewDidEnter(){
    this.getUserPosition();}   

    addMap(lat,long){
        let latLng = new google.maps.LatLng(lat, long);
        this.currentLocation=latLng ;
        let mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    this.addMarker();

}


    addMarker(){
    let marker = new google.maps.Marker({
    map: this.map,
    animation: google.maps.Animation.DROP,
    position: this.map.getCenter()
    });

    let content = "<p>This is your current position !</p>";          
    let infoWindow = new google.maps.InfoWindow({
    content: content
    });

    google.maps.event.addListener(marker, 'click', () => {
    infoWindow.open(this.map, marker);
    });

}
searchLocation(ev:any)
        {
            var request = {
            location: this.currentLocation,
            radius: '5000',
            types: ev.target.value
        };

   var service = new google.maps.places.PlacesService(this.map);

    service.nearbySearch(request, function(results, status) {
     if (status == google.maps.places.PlacesServiceStatus.OK) {
       for (var i = 0; i < results.length; i++) {
         var place = results[i];
        console.log(place.geometry.location);
         var marker = new google.maps.Marker({
           map: this.map,
           position: place.geometry.location
         });
       }
     }
   });
 
}





}