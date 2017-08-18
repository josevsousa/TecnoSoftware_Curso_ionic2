import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { PlaylistsPage } from '../playlists/playlists';
import { MyCofigProvider } from '../../providers/my-cofig/my-cofig';

import { DeezerServicoProvider } from '../../providers/deezer-servico/deezer-servico'; 

/**
 * Generated class for the PerfilPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
  providers: [ DeezerServicoProvider ]
})

export class PerfilPage {
  
  public config: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public deezerServoProvider: DeezerServicoProvider ,
    public myCofigProvider: MyCofigProvider
    ) {
    // objeto config  
    this.config = this.myCofigProvider.getMyConfig();
  }

  goToPlayList(userID){
    this.navCtrl.push(PlaylistsPage, {userID: userID}); //passando userID como parametro para a PlaylistsPage
  }

  // essa funcao é tipo a ngOnInt ela é exc depois do construtor
  ionViewDidLoad() {
    this.deezerServoProvider.getUser();
  }

}
