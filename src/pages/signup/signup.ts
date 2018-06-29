import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { LoginPage } from '../../pages/login/login';
import { SignuplicencePage } from '../../pages/signuplicence/signuplicence';

// import { NativeDateAdapter } from "@angular/material";

// import { File } from '@ionic-native/file';
// import { Transfer, TransferObject } from '@ionic-native/transfer';
// import { FilePath } from '@ionic-native/file-path';
// import { Camera } from '@ionic-native/camera';


// declare var cordova: any;

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage{



  user: any = {
    'firstname': 'Thabo',
    'lastname': 'Sizwe',
    'identityNumber': '91030205252082',
    'dateOfBirth':'1/1/1991',
    'password':'111111111'
  };



  // lastImage: string = null;
  // loading: Loading;
  // constructor(public navCtrl: NavController, private camera: Camera, private transfer: Transfer, private file: File, private filePath: FilePath, public actionSheetCtrl: ActionSheetController, public toastCtrl: ToastController, public platform: Platform, public loadingCtrl: LoadingController) { }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }


  tempFunction(){
    console.log('DOB ' + this.user.dateOfBirth);
    this.navCtrl.push(SignuplicencePage);
    console.log('Go to licencePage page function');
  }

  continue(user) {
    console.log('function launched ');
    if(this.user.firstname !== null && this.user.firstname !== ''){
      localStorage.firstname = this.user.firstname;
      console.log('Local storge firstname => ' + localStorage.firstname);

      if(this.user.lastname !== null && this.user.lastname !== ''){
        localStorage.lastname = this.user.lastname;
        console.log('Local storge lastname => ' + localStorage.lastname);

        if(this.user.identityNumber !== null && this.user.identityNumber !== ''){
          if(this.user.identityNumber.length === 13){
            localStorage.identityNumber = this.user.identityNumber;
            console.log('Local storge id number => ' + localStorage.identityNumber);

            if(this.user.dateOfBirth !== null && this.user.dateOfBirth !== ''){
              localStorage.dateOfBirth = this.user.dateOfBirth;
              console.log('Local storge dateOfBirth => ' + localStorage.dateOfBirth);

                  if(this.user.password !== null && this.user.password !== ''){
                    if(this.user.password.length > 7){
                      localStorage.password = this.user.password;
                      console.log('Local storge id password => ' + localStorage.password);

                      this.navCtrl.push(SignuplicencePage);
                      console.log('Go to licencePage page function');

                    }else{alert('Your password is not strong enough')}
                  }else{alert('Please enter your password')}

            }else{alert('Please select you Date Of birth')}

          }else{alert('Please enter a valid south african ID')}
        }else{alert('Please enter your Id number')}

      }else{alert('Please enter your lastname')}

    }else{alert('Please enter your firstname')}
  }


  backToLogin() {
    console.log('Go to signup page function');
    this.navCtrl.push(LoginPage);
  }


  // public presentActionSheet() {
  //   let actionSheet = this.actionSheetCtrl.create({
  //     title: 'Select Image Source',
  //     buttons: [
  //       {
  //         text: 'Load from Library',
  //         handler: () => {
  //           this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
  //         }
  //       },
  //       {
  //         text: 'Use Camera',
  //         handler: () => {
  //           this.takePicture(this.camera.PictureSourceType.CAMERA);
  //         }
  //       },
  //       {
  //         text: 'Cancel',
  //         role: 'cancel'
  //       }
  //     ]
  //   });
  //   actionSheet.present();
  // }

//
//   public takePicture(sourceType) {
//   // Create options for the Camera Dialog
//   var options = {
//     quality: 100,
//     sourceType: sourceType,
//     saveToPhotoAlbum: false,
//     correctOrientation: true
//   };
//
//   // Get the data of an image
//   this.camera.getPicture(options).then((imagePath) => {
//     // Special handling for Android library
//     if (this.platform.is('android') && sourceType === this.camera.PictureSourceType.PHOTOLIBRARY) {
//       this.filePath.resolveNativePath(imagePath)
//         .then(filePath => {
//           let correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
//           let currentName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
//           this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
//         });
//     } else {
//       var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
//       var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
//       this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
//     }
//   }, (err) => {
//     this.presentToast('Error while selecting image.');
//   });
// }

// public uploadImage() {
//   // Destination URL
//   var url = "http://yoururl/upload.php";
//
//   // File for Upload
//   var targetPath = this.pathForImage(this.lastImage);
//
//   // File name only
//   var filename = this.lastImage;
//
//   var options = {
//     fileKey: "file",
//     fileName: filename,
//     chunkedMode: false,
//     mimeType: "multipart/form-data",
//     params : {'fileName': filename}
//   };
//
//   const fileTransfer: TransferObject = this.transfer.create();
//
//   this.loading = this.loadingCtrl.create({
//     content: 'Uploading...',
//   });
//   this.loading.present();
//
//   // Use the FileTransfer to upload the image
//   fileTransfer.upload(targetPath, url, options).then(data => {
//     this.loading.dismissAll()
//     this.presentToast('Image succesful uploaded.');
//   }, err => {
//     this.loading.dismissAll()
//     this.presentToast('Error while uploading file.');
//   });
// }

}
