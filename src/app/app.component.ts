import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'router-demo';

  constructor(private route: Router) {

  }

  ngOnInit() {
    // this.route.events.subscribe(evt => console.log(evt));
  }
  gotoEmployee() {
    // code to verify login
    this.route.navigate(['/employee']);
  }
}
