import { Component, ViewChild } from '@angular/core';
import { ionicBootstrap, Platform, Nav} from 'ionic-angular';
import { StatusBar } from 'ionic-native';

import { HomePage } from './pages/home/home';
import { GmapPage } from './pages/gmap/gmap';

@Component({
  templateUrl: 'build/app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = HomePage;
  pages: Array<{ title: string, component: any }>;

  constructor(public platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });

    this.pages = [
      { title: "Home", component: HomePage },
      { title: "GoogleMap", component: GmapPage }
    ];
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // We wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}

ionicBootstrap(MyApp);
