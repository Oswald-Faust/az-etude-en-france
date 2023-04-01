import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  headerSticky : boolean = false;
  searchBar : boolean = false;
  showSidebar : boolean = false;
  showHomeDropdown : boolean = false;
  showCoursesDropdown : boolean = false;
  showBlogDropdown : boolean = false;
  showPagesDropdown : boolean = false;

  @HostListener('window:scroll',['$event']) onscroll () {
    if(window.scrollY > 80){
      this.headerSticky = true
    }
    else{
      this.headerSticky = false
    }
  }

  handleSearch () {
    if(!this.searchBar){
      this.searchBar = true;
    }
    else{
      this.searchBar = true;
    }
  }
  handleSearchClose () {
    this.searchBar = false;
  }

  // handleSidebar
  handleSidebar () {
    this.showSidebar = true;
  }
  handleSidebarClose () {
    this.showSidebar = false;
  }

  // home dropdown
  homeDropdown () {
    this.showHomeDropdown = !this.showHomeDropdown
  }
  // coursesDropdown
  coursesDropdown () {
    this.showCoursesDropdown = !this.showCoursesDropdown
  }

  // blogDropdown
  blogDropdown () {
    this.showBlogDropdown = !this.showBlogDropdown
  }
  // pagesDropDown
  pagesDropDown () {
    this.showPagesDropdown = !this.showPagesDropdown
  }


  constructor() { }

  ngOnInit(): void {
  }

}
