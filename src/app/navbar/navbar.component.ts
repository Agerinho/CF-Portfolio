import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const navToggle = document.getElementById("navToggle")
    const navToggleIcon = document.getElementById("navToggleIcon")
    const mobileNav = document.getElementById("navbarMobile")
    const navLinks = document.querySelectorAll("#navbarMobile a")

    if(navToggle) {
      navToggle.addEventListener("click", () => {
        mobileNav?.classList.toggle("active")
        navToggleIcon?.classList.toggle("bi-x")
      })
      navLinks.forEach(link => {
        link.addEventListener("click", () => {
          mobileNav?.classList.toggle("active")
          navToggleIcon?.classList.toggle("bi-x")
        })
      })
    }
  }
}
