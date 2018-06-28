import {
 GoogleMaps,
 GoogleMap,
 GoogleMapsEvent,
 GoogleMapOptions,
 CameraPosition,
 MarkerOptions,
 Marker
} from '@ionic-native/google-maps';
import { Component,ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { Toast } from '@ionic-native/toast';

import { ModalController } from 'ionic-angular';
import { ViewController } from 'ionic-angular';
import { ModalPage } from '../modal/modal';
import { Platform } from 'ionic-angular';
import { PaymentPage } from '../payment/payment';
import { RestProvider } from '../../providers/rest/rest';


// declare var google;
//API Key For Web =  AIzaSyAghH73vrrSIqBQACMzXpgg3ZG-EUwKK-E
//API Key for Android = AIzaSyBIpAKhZrSO99TaNmlBuy3f5GPRqfhrnD8
//API Key for IOS = AIzaSyAkmGYVWrGeb5CCEriivkT-O5GPmu8JeHU
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  user: {
    'userName':'Calvi nooo Chou'
  };

  lat: any;
  lng: any

  location: any;
  gmLocation: {lat: number, lng: number} = {lat: 0, lng: 0};

  @ViewChild('mapCanvas') element;

   map: GoogleMap;

  // @ViewChild('map') mapElement: ElementRef;
  // map: any;

  constructor(
    public navCtrl: NavController,
    public geoloc: Geolocation,
    public toast: Toast,
    public restProvider: RestProvider,
    public modalController: ModalController,
    public viewCtrl : ViewController,
    public platform: Platform

  ) {



    // if(!this.map) this.loadMap();


      this.onLocateUser();
      // setInterval(() => {
      //     this.onLocateUser();
      // this.getUserData();

      // }, 1000);
      // Observable.interval(10000).takeWhile(() => true).subscribe(() => this.function());
      platform.registerBackButtonAction(() => {
        console.log("backPressed 1");
      });
  }


  ionViewWillEnter(){
    console.log('ngAfterViewInit MapPage');
    this.loadMap(); // works fine every time without error
  }

  ionViewDidEnter(){
    console.log('ionViewDidEnter MapPage');
    console.log(this.map); // always returns the map object so it's still there
    // if(!this.map) this.loadMap(); // never needs to fire
    // need to reset tab/page stacking order?
  }


    ionViewDidLoad(){
      console.log('this is a map ');
      // this.onLocateUser();
      // this.loadMap();

      // if(!this.map) this.loadMap();

    }

    getUserData(){

      alert('this is a value trial : ' + this.user.userName);


      return new Promise(resolve => {
        this.restProvider.__getUser(this.user).then((result) => {
          console.log(result);
            alert(result);

            }, (err) => {
              console.log(err);
            });
      });
    }



    cancelRide(data){



    }





















    goToSecond(){
        this.navCtrl.push(PaymentPage);
      }


    onLocateUser() {
      console.log('function executed');
      this.geoloc.getCurrentPosition()
        .then(
          (location) => {
            console.log('position gotten: long:',location.coords.longitude,' lat:',location.coords.latitude);
            localStorage.lat = location.coords.longitude;
            localStorage.lng = location.coords.latitude;
            this.location = location;
            this.gmLocation.lat = location.coords.latitude;
            this.gmLocation.lng = location.coords.longitude;
          }
        )
        .catch(
          (error) => {
            console.log('Error getting location', error);
          }
        )

    }
    // this.toast.show(`This is my Lat `+ this.lat + `This is my Lng `+ this.lng, '5000', 'center').subscribe(
    //   toast => {
    //     console.log(toast);
    //   });
    loadMap() {

    this.onLocateUser();

    // console.log(this.location);

        let mapOptions: GoogleMapOptions = {
          camera: {
            target: {
              lat: localStorage.lng,
              lng: localStorage.lat
            },
            zoom: 18,
            tilt: 0
          }
        };

        // this.map = GoogleMaps.create('map_canvas', mapOptions);
        this.map = GoogleMaps.create(this.element.nativeElement,mapOptions);

        // Wait the MAP_READY before using any methods.
        this.map.one(GoogleMapsEvent.MAP_READY)
          .then(() => {
            this.lat = this.gmLocation.lng;
            this.lng =  this.gmLocation.lat;


            console.log('Map is ready!');

            alert('Lat => ' + localStorage.lat + ' Lng => ' +  localStorage.lng);

            // Now you can use all methods safely.
            this.map.addMarker({
                title: 'This is You',
                icon: 'blue',
                animation: 'DROP',
                position: {
                  lat: localStorage.lng,
                  lng: localStorage.lat
                }
              })
              .then(marker => {
                marker.on(GoogleMapsEvent.MARKER_CLICK)
                  .subscribe(() => {
                    alert('Would you like to choose to choose a different location');
                  });
              });

          });
      }




//     loadMap(){
//
//       this.geolocation.getCurrentPosition().then((position) => {
//
//         let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
//
//         let mapOptions = {
//           center: latLng,
//           zoom: 15,
//           mapTypeId: google.maps.MapTypeId.ROADMAP
//         }
//
//         this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
//
//       }, (err) => {
//         console.log(err);
//       });
//
//     }
//
//     addMarker(){
//
//   let marker = new google.maps.Marker({
//     map: this.map,
//     animation: google.maps.Animation.DROP,
//     position: this.map.getCenter()
//   });
//
//   let content = "<h4>Information!</h4>";
//
//   this.addInfoWindow(marker, content);
//
// }
// addInfoWindow(marker, content){
//
//   let infoWindow = new google.maps.InfoWindow({
//     content: content
//   });
//
//   google.maps.event.addListener(marker, 'click', () => {
//     infoWindow.open(this.map, marker);
//   });
//
// }



public openModal(){
  var data = { message : 'hello world' };
  var modalPage = this.modalController.create('ModalPage',data);
  modalPage.present();
}


 public closeModal(){
   this.viewCtrl.dismiss();
}

}
