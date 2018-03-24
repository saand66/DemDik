import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


import {TrajetService} from '../../services/AlloDakarApi.service';
import {Trajet} from '../../models/AlloDakar-Trajet';
import { INTERNAL_BROWSER_PLATFORM_PROVIDERS } from '@angular/platform-browser/src/browser';
/**
 * Generated class for the TrajetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-trajet',
  templateUrl: 'trajet.html',
})
export class TrajetPage {

  trajets : Trajet = new Trajet();
 
  constructor(public navCtrl: NavController,  private trajetService: TrajetService) {
  
  this.trajetService.getTrajet()
    .then(newsFetched =>  this.trajets = newsFetched);
    console.log(this.trajets);
   
   }

   
  

}
