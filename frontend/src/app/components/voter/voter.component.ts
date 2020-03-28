import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-voter',
  templateUrl: './voter.component.html',
  styleUrls: ['./voter.component.css']
})
export class VoterComponent implements OnInit {

  voters: [];
  constructor(
    private dataservice : DataService
  ) { }

  ngOnInit(): void {
  }

  showAllVoters(){
    console.log("here");
    this.dataservice.showAllVoters().subscribe( (response:any) => {
      this.voters = response;
      console.log(response);
    },(err: HttpErrorResponse) => {
      console.log("Login Error");
    });
  }
}
