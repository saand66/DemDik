import {Injectable} from '@angular/core';
import { Http} from '@angular/http';

//RxJS
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';


import { Trajet } from '../models/AlloDakar-Trajet';

@Injectable()

export class TrajetService{

private baseUrl : string ='api/trajets';
private service : string = 'users/register';
private apikey: string = '8e230c9295f14208bb271d6aa4594fa0';
private token : string = '';

constructor(private http: Http){


}

public getTrajet() {
//const url = `${this.baseUrl}${this.service}?access_token=${this.token}`;
const url = this.baseUrl;
return this.http.get(url)
.toPromise()
.then( response => response.json() as Trajet)
.catch(error => console.log ('une erreur est survenue ' + error))
}

}

