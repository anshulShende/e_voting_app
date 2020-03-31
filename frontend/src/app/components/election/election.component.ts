import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-election',
  templateUrl: './election.component.html',
  styleUrls: ['./election.component.css']
})
export class ElectionComponent implements OnInit {

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit(): void {
  }
  
  onElectionLogin(){
    console.log("start");
    console.log("before :"+ window.location.href);
    window.location.assign('http://localhost:3000/manpada');
    console.log("After :"+ window.location.href);
    // const locale = localStorage.getItem('locale');
    // console.log(locale);
    // this.dataService.electionLogin(locale).subscribe();
  }
}
