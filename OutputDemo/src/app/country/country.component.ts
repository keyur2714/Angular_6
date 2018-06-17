import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Country } from './country.model';
@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

  selectedCountry: Country = new Country();
  countryCode: string = 'IN';

  @Output()
  getSelectedCountryEvent = new EventEmitter<Country>();

  @Input()
  countryList: Country[] = [];
  
  constructor() { }

  ngOnInit() {
    let country1 = new Country();
    country1.id = 1;
    country1.code = "IN";
    country1.description = "India";
    this.countryList.push(country1);
    this.selectedCountry = country1;        
  }

  getSelectedCountry(){
    console.log(1);
    console.log(this.selectedCountry);
    this.getSelectedCountryEvent.emit(this.selectedCountry);
  }

}
