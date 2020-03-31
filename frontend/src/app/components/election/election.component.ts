import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-election',
  templateUrl: './election.component.html',
  styleUrls: ['./election.component.css']
})
export class ElectionComponent implements OnInit {

  isLoginError: boolean;
  constructor(
    private dataService: DataService
  ) { 
    this.isLoginError = false;
  }

  ngOnInit(): void {
  }
  
  onElectionLogin(name,password){
    this.dataService.electionLogin(name, password).subscribe( (response:any) => {
      if(response['0']['name'] === 'name'){
        const locale = localStorage.getItem('locale');
        console.log("before :"+ window.location.href);
        window.location.assign(`http://localhost:3000/${locale}/vote`);
        console.log("After :"+ window.location.href);
      }else{
        this.isLoginError = true;
      }
    });
  }

}
