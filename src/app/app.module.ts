import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpModule } from '@angular/http';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { InicioPage } from '../pages/inicio/inicio'; 
import { PerfilPage } from '../pages/perfil/perfil';
import { ContatoPage } from '../pages/contato/contato';
import { AcercaPage } from '../pages/acerca/acerca';
import { PlaylistsPage } from '../pages/playlists/playlists';
import { CancionesPage } from '../pages/canciones/canciones';
// import { DeezerServicoProvider } from '../providers/deezer-servico/deezer-servico';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    InicioPage,
    PerfilPage,
    ContatoPage,
    AcercaPage,
    PlaylistsPage,
    CancionesPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    InicioPage,
    PerfilPage,
    ContatoPage,
    AcercaPage,
    PlaylistsPage,
    CancionesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
    // DeezerServicoProvider
  ]
})
export class AppModule {}
