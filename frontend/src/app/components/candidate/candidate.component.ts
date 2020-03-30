import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.css']
})
export class CandidateComponent implements OnInit {

  isResult: boolean;
  candidates: [];

  constructor(
    private dataService: DataService
  ) {
    this.isResult = false;
   }

  ngOnInit(): void {
  }

  onSearch(locale){
    this.dataService.searchcandidates(locale).subscribe( (response: any) => {
      this.candidates = response;
      this.isResult = true;
    });
  }

}
