import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation } from 'ionic-native';

@Component({
  templateUrl: 'build/pages/geo/geo.html',
})
export class GeoPage {
  // Location: string = '31.233611,121.4651457,16.08';
  Location: string = '';
  constructor(private navCtrl: NavController) {

  }

  readGps() {
    Geolocation.getCurrentPosition({ enableHighAccuracy: true })
      .then((position) => {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;
        this.Location = `${lat},${lon}`;
      }, (err) => {
        console.log(err);
      });
  }

}
