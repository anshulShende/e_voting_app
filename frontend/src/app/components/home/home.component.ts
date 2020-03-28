import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  

  constructor(
    private router : Router
  ) { }

  ngOnInit(): void {
  }

  onVoter(){
    this.router.navigate(['voter']);
  }

  onCandidate(){
    this.router.navigate(['candidate']);
  }

  onStaff(){
    this.router.navigate(['staff']);
  }

  onAdmin(){
    this.router.navigate(['admin']);
  }
}
