import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


//CREATING API HEADERS
const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
};

@Injectable()
export class RestProvider {

  apiUrl = 'http://sible-cloudius.azurewebsites.net';

  constructor(public http: HttpClient) {
    console.log('Hello RestProvider Provider');
  }


  /////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////
  //////////////     REGISTRATION   //////////////////////
  ////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////

  __registration(data) {
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl+'/v1/AccessManagement/User/registration', JSON.stringify(data),{
        headers: new HttpHeaders().set('content-type', 'application/json')
      })
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  __activateUser(data) {
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl+'/v1/AccessManagement/User/activateuserstatus',  JSON.stringify(data),{
        headers: new HttpHeaders().set('content-type', 'application/json')
      })
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }


  /////////////////////////////////////////////////////////////////////////////////
  ////////////////////////                        /////////////////////////////////
  ////////////////////////   LOGIN FUNCTIONS      /////////////////////////////////
  ////////////////////////                        /////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////
  /*creating a login function rest service
    params ResultCode,Username,Token,TokenExpiry,and Name*/
  __userLogin(data){
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl+'v1/AccessManagement/User/login' , JSON.stringify(data), httpOptions)
      .subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
    })
  }
  /*creating an Authenticate function rest service
    params ResultCode,Username,Token,TokenExpiry,and Name  */
  __authenticate(data){
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + 'v1/AccessManagement/User/authenticate' , JSON.stringify(data), httpOptions)
      .subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
    })
  }
  /*  creating an getToken function rest service
    its a get function so params required*/
  __getToken(data){
      return new Promise((resolve, reject) => {
        this.http.post(this.apiUrl + 'v1/AccessManagement/User/get/token' , JSON.stringify(data), httpOptions)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
      })
    }
    /*  creating an getUser function rest service
      its a get function so params accept username  */
    __getUser(data){
        return new Promise(resolve => {
          this.http.get(this.apiUrl+'/v1/AccessManagement/User/get/userdetails').subscribe(data => {
              resolve(data);
          }, err =>{
            console.log(err);
          });
        });
      }

  /////////////////////////////////////////////////////////////////////////////////
  ////////////////////////                        /////////////////////////////////
  ////////////////////////   FORGOT PASSWORD      /////////////////////////////////
  ////////////////////////                        /////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////
  /*creating a Reset Password function rest service
    params Username*/
  __resetPassoword(data){
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + 'v1/AccessManagement/User/forgotpassword' , JSON.stringify(data), httpOptions)
      .subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
    })
  }
  /*creating a OTP Password function rest service
    params otp*/
  __otpPassoword(data){
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + '....................................../otp' , JSON.stringify(data), httpOptions)
      .subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
    })
  }
  /*creating a Update Password function rest service
    params Password & Confirm Password*/
  __updatePassoword(data){
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + 'v1/AccessManagement/User/update/password' , JSON.stringify(data), httpOptions)
      .subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
    })
  }
  /*creating a Update Contacts function rest service
    params new Contact & otp*/
  __updateContacts(data){
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + 'v1/AccessManagement/User/update/contacts                                                 ' , JSON.stringify(data), httpOptions)
      .subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
    })
  }



  /////////////////////////////////////////////////////////////////////////////////
  ////////////////////////                        /////////////////////////////////
  ////////////////////////      CAR MANAGER       /////////////////////////////////
  ////////////////////////                        /////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////
  __addCar(data){
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + 'v1/AccessManagement/User/carmanager/add' , JSON.stringify(data), httpOptions)
      .subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
    })
  }

  __updateCar(data){
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + 'v1/AccessManagement/User/carmanager/update' , JSON.stringify(data), httpOptions)
      .subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
    })
  }

  __deleteCar(data){
    return new Promise((resolve) => {
      this.http.delete(this.apiUrl + 'v1/AccessManagement/User/carmanager/delete', httpOptions)
         .subscribe(res => {
             resolve(res);
         }, (err) => {
             resolve(err);
         });
      });
  }

  /////////////////////////////////////////////////////////////////////////////////
  ////////////////////////                        /////////////////////////////////
  ////////////////////////      LICENCE MANAGER   /////////////////////////////////
  ////////////////////////                        /////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////
  __addLicence(data){
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + 'v1/AccessManagement/User/licensemanager/add' , JSON.stringify(data), httpOptions)
      .subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
    })
  }

  __updateLicence(data){
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + 'v1/AccessManagement/User/licensemanager/update' , JSON.stringify(data), httpOptions)
      .subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
    })
  }



  /////////////////////////////////////////////////////////////////////////////////
  ////////////////////////                        /////////////////////////////////
  ////////////////////////      CREADIT CARD      /////////////////////////////////
  ////////////////////////                        /////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////
  __addCard(data){
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + 'v1/AccessManagement/User/update/card' , JSON.stringify(data), httpOptions)
      .subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
    })
  }


  __removeCard(data){
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + '................................./removeCard' , JSON.stringify(data), httpOptions)
      .subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
    })
  }

  __updateCard(data){
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + '................................./updateCard' , JSON.stringify(data), httpOptions)
      .subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
    })
  }


  /////////////////////////////////////////////////////////////////////////////////
  ////////////////////////                        /////////////////////////////////
  ////////////////////////      UPDATE LICENCE   /////////////////////////////////
  ////////////////////////                        /////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////
  // __updateLicence(data){
  //   return new Promise((resolve, reject) => {
  //     this.http.post(this.apiUrl + 'v1/AccessManagement/User/update/license' , JSON.stringify(data), httpOptions)
  //     .subscribe(res => {
  //       resolve(res);
  //     }, (err) => {
  //       reject(err);
  //     });
  //   })
  // }

  /////////////////////////////////////////////////////////////////////////////////
  ////////////////////////                         ////////////////////////////////
  //////////////////////// UPDATE PERSONAL_DETAILS /////////////////////////////////
  ////////////////////////                         ////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////
  __updatePersonalDetails(data){
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + 'v1/AccessManagement/User/update/personaldetails' , JSON.stringify(data), httpOptions)
      .subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
    })
  }

  /////////////////////////////////////////////////////////////////////////////////
  ////////////////////////                         ////////////////////////////////
  ////////////////////////   UPDATE USER STATUS    /////////////////////////////////
  ////////////////////////                         ////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////
  __updateUserDetails(data){
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + 'v1/AccessManagement/User/updateuserstatus' , JSON.stringify(data), httpOptions)
      .subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
    })
  }


  /////////////////////////////////////////////////////////////////////////////////
  ////////////////////////                         ////////////////////////////////
  ////////////////////////   ACTIVATE USER STATUS    /////////////////////////////////
  ////////////////////////                         ////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////
  __activateUserStatus(data){
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + 'v1/AccessManagement/User/activateuserstatus' , JSON.stringify(data), httpOptions)
      .subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
    })
  }



  /////////////////////////////////////////////////////////////////////////////////
  ////////////////////////                         ////////////////////////////////
  ////////////////////////   TRIP API CALLS     /////////////////////////////////
  ////////////////////////                         ////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////

  // __getTrips(data){
  //   let origin;
  //   let destination;
  //   let departuretime;
  //     return new Promise(resolve => {
  //       this.http.get(this.apiUrl+'v1/TripManager/get/trips/'+ this.origin +'/' + destination +   '?departuretime='+ departuretime).subscribe(data => {
  //           resolve(data);
  //       }, err =>{
  //         console.log(err);
  //       });
  //     });
  //   }





  /////////////////////////////////////////////////////////////////////////////////
  ////////////////////////                         ////////////////////////////////
  ////////////////////////  HLALALA REG SERVICES   /////////////////////////////////
  ////////////////////////                         ////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////

  // login(credentials) {
  //   return new Promise((resolve, reject) => {
  //       let headers = new Headers();
  //       headers.append('Content-Type', 'application/json');
  //
  //       this.http.post(apiUrl+'login', JSON.stringify(credentials), {headers: headers})
  //         .subscribe(res => {
  //           resolve(res.json());
  //         }, (err) => {
  //           reject(err);
  //         });
  //   });
  // }
  //
  // register(data) {
  //   return new Promise((resolve, reject) => {
  //       let headers = new Headers();
  //       headers.append('Content-Type', 'application/json');
  //
  //       this.http.post(apiUrl+'guest/signup', JSON.stringify(data), {headers: headers})
  //         .subscribe(res => {
  //           resolve(res.json());
  //         }, (err) => {
  //           reject(err);
  //         });
  //   });
  // }
  //
  // logout(){
  //   return new Promise((resolve, reject) => {
  //       let headers = new Headers();
  //       headers.append('X-Auth-Token', localStorage.getItem('token'));
  //
  //       this.http.post(apiUrl+'logout', {}, {headers: headers})
  //         .subscribe(res => {
  //           localStorage.clear();
  //         }, (err) => {
  //           reject(err);
  //         });
  //   });
  // }




}
