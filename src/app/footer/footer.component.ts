import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    function getCurrentYear() {
      return new Date().getFullYear();
    }

    const yearspan = document.getElementById("year")

    if (yearspan) {
      yearspan.innerHTML = getCurrentYear().toString(); 
    }
  }
}

