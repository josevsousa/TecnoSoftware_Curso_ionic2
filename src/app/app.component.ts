import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { InicioPage } from '../pages/inicio/inicio';
import { PerfilPage } from '../pages/perfil/perfil';
import { ContatoPage } from '../pages/contato/contato';
import { AcercaPage } from '../pages/acerca/acerca';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav; //nav
  public rootPage: any;
  public pages: Array<{ title: string, component: any, icon: string }>;

  // pages: Array<{title: string, component: any}>;

  constructor(
    platform: Platform, 
    statusBar: StatusBar, 
    splashScreen: SplashScreen) {
    this.rootPage = InicioPage;
    this.pages = [
      { title: "Inicio", component: InicioPage, icon: "home"},
      { title: "Perfil Deezer", component: PerfilPage, icon: "person"},
      { title: "Contato", component: ContatoPage, icon: "mail"},
      { title: "Acerca de", component: AcercaPage, icon: "information-circle"}
    ];

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  // function que chama a pagina enviada pelo parametro page
  goToPage(page){
    this.nav.setRoot(page);
  }
}

