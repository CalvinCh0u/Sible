import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
// import { OpenALPR, OpenALPROptions, OpenALPRResult } from '@ionic-native/openalpr';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';
/**
 * Generated class for the ModalPublisherPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal-publisher',
  templateUrl: 'modal-publisher.html',
})
export class ModalPublisherPage {


  qrCodeData: any;
  openalprData: any;
  barData : any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private barcodeScanner: BarcodeScanner, private alertCtrl :AlertController, private qrScanner: QRScanner) {
  }
  // const scanOptions: any = {
  //   country: this.openALPR.Country.EU,
  //   amount: 3
  // }



  QRScanners(){


// Optionally request the permission early
    this.qrScanner.prepare()
      .then((status: QRScannerStatus) => {
         if (status.authorized) {
           // camera permission was granted


           // start scanning
           let scanSub = this.qrScanner.scan().subscribe((text: string) => {
             console.log('Scanned something', text);

             this.qrCodeData = text;

             this.presentAlert();


             this.qrScanner.hide(); // hide camera preview
             scanSub.unsubscribe(); // stop scanning
           });

         } else if (status.denied) {
           // camera permission was permanently denied
           // you must use QRScanner.openSettings() method to guide the user to the settings page
           // then they can grant the permission from there
         } else {
           // permission was denied, but not permanently. You can ask for permission again at a later time.
         }
      })
      .catch((e: any) => console.log('Error is', e));

  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPublisherPage');
  }

  closeModal() {
       this.navCtrl.pop();
   }

   presentAlert() {
     // let UserData = JSON.stringify(this.qrCodeData);
      let alert = this.alertCtrl.create({
        title: 'Barcode data',
        message: this.qrCodeData,
        buttons: ['Dismiss']
      });
      alert.present();
    }

  //
  // OpenALPRScanner(){
  //   this.openALPR.scan(imageData, scanOptions)
  //   .then((res: [OpenALPRResult]) =>
  //   // console.log(res)
  //   this.openalprData = res
  //   // this.presentAlert();
  //
  // )
  // .catch((error: Error) => console.error(error));
  // }


   BarcodeScanners(){
     this.barcodeScanner.scan().then(barcodeData => {
       console.log('Barcode data', barcodeData);
       this.barData = barcodeData;
       this.presentAlert();
        // alert('Barcode data', barcodeData);
      }).catch(err => {
          console.log('Error', err);
          // alert('Error', err);
      });
   }

}
