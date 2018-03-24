import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SeetVoyagePage } from '../seet-voyage/seet-voyage';
import { ProposerDamayTukkiPage } from '../proposer-damay-tukki/proposer-damay-tukki';
import { TrajetPage } from '../trajet/trajet';

@Component({
  selector: 'page-allo-dakar',
  templateUrl: 'allo-dakar.html'
})
export class AlloDakarPage {

  constructor(public navCtrl: NavController) {
  }
  goToSeetVoyage(params){
    if (!params) params = {};
    this.navCtrl.push(SeetVoyagePage);
  }goToProposerDamayTukki(params){
    if (!params) params = {};
    this.navCtrl.push(ProposerDamayTukkiPage);
  }goToTrajet(params){
    if (!params) params = {};
    this.navCtrl.push(TrajetPage);
  }
}
