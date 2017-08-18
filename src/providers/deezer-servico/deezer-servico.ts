import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the DeezerServicoProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class DeezerServicoProvider {
  
  public deezerAPI: string;

  constructor( public http: Http ) {
      this.deezerAPI = "https://api.deezer.com/";
  }

  /*  20170314214847
    http://api.myjson.com/bins/mcjrb
    [
      "197718683",
      "686121193",
      "1018322506",
      "380556027",
      "721275053",
      "1402187406"
    ]
  */ 
  
  //lista de usuarios
  getUser(){
    //mapeia o observable e usa o metodo subscribe
    this.http.get("http://api.myjson.com/bins/mcjrb")
      .map( res => res.json() )
      .subscribe( data => {
        console.log(data);
      } )
  }

  //lista dos detalhes do usuario
  getUserDetail(userID){
    //mapeia o observable e usa o metodo subscribe
    this.http.get( this.deezerAPI + "user/" + userID )
      .map( res => res.json() )
      .subscribe( data => {
        console.log(data);
      } )
  }

}
