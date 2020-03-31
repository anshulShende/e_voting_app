import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  constructor( private http: HttpClient ) { }

  showAllVoters(){
    console.log("in data services")
    return this.http.get('/getAllVoters');
  }

  authenticateStaff(name, password, locale, localeId){
    console.log("in authenticate Staff");
    let body = new HttpParams();
    body = body.set('name', name);
    body = body.set('password', password);
    body = body.set('locale', locale);
    body = body.set('localeId',localeId); 
    return this.http.post('/authenticateStaff', body);
  }

  searchcandidates(locale){
    let body = new HttpParams();
    body = body.set('locale', locale);
    return this.http.post('/searchCandidates', body);
  }

  electionLogin(name, password){
    let body = new HttpParams();
    body = body.set('name', name);
    body = body.set('password', password);
    return this.http.post('/authenticateVoterForElection', body);
  }
}
