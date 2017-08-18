import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CancionesPage } from '../canciones/canciones';

/**
 * Generated class for the PlaylistsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-playlists',
  templateUrl: 'playlists.html',
})
export class PlaylistsPage {
  public userID: number;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    //recebendo parametros pelo NavParams
    //add na var userID o userID recebido como parametro
    this.userID = this.navParams.get("userID"); 
  }

  // funcao que chama a pagina CancionePage passando o parametro playlistID
  goToCaincon(playlistID){
    this.navCtrl.push(CancionesPage, { playlistID: playlistID });
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad PlaylistsPage');
  }

}
