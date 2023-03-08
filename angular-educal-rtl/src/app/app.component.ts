import { Component,OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'educal';
  constructor (private router : Router) {}

  ngOnInit(): void {
    this.router.events.subscribe((evt) => {
      if(! (evt instanceof NavigationEnd)){
        return
      }
      window.scrollTo(0,0)
    })
  }

}
