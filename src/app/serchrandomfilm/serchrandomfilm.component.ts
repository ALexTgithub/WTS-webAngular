import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SerchrandomfilmService } from '../shared/serchrandomfilm.service';
import { SelectAutocompleteComponent } from 'mat-select-autocomplete';


@Component({
  selector: 'app-serchrandomfilm',
  templateUrl: './serchrandomfilm.component.html',
  styleUrls: ['./serchrandomfilm.component.css']

})
export class SerchrandomfilmComponent implements OnInit {


  // GenreFilter = new FormControl('');
  // DirectorFilter = new FormControl('');
  // StarsFilter = new FormControl('');
  

  @ViewChild(SelectAutocompleteComponent) multiSelect: SelectAutocompleteComponent;
  optionsGenreFilter = [
    {
      display: 'One',
      value: '1'
    }, {
      display: 'Two',
      value: '2'
    }, {
      display: 'Three',
      value: '3'
    }, {
      display: 'Four',
      value: '4'
    }, {
      display: 'Five',
      value: '5'
    }, {
      display: 'Six',
      value: '6'
    }
  ];

  optionsGenre = [
    {
      display: 'One1',
      value1: '11'
    }, {
      display: 'Two1',
      value1: '21'
    }, {
      display: 'Three1',
      value1: '31'
    }, {
      display: 'Four1',
      value1: '41'
    }, {
      display: 'Five1',
      value1: '51'
    }, {
      display: 'Six1',
      value1: '61'
    }
  ];
  




  constructor(private service: SerchrandomfilmService) { }

  ngOnInit() {


    
  

  }


}
