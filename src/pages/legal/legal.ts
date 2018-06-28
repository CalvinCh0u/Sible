import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LegalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-legal',
  templateUrl: 'legal.html',
})
export class LegalPage {
  items = [
    'Copyright',
    'Terms & Conditions',
    'Privacy Policy',
    'Data Providers',
    'Software License',
    'Location Information'
  ];

  itemSelected(item: string) {
    console.log("Selected Item", item);
  }
}