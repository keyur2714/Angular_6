import { Component } from '@angular/core';
import { Country } from './country/country.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Output Demo';
  selectedCountry: Country = null;

  countryList: Country[] = [
    {
      id: 2,
      code: "US",
      description: "United States"
    },
    {
      id: 3,
      code: "CAN",
      description: "Canada"
    },
    {
      id: 4,
      code: "SPN",
      description: "Spen"
    }
  ];

  getSelectedCountry(country){
    console.log(2);
    this.selectedCountry = country;
  }
}
