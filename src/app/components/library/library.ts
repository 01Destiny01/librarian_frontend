import { Component } from '@angular/core';
import { SearchBar } from "../search-bar/search-bar";

@Component({
  selector: 'app-library',
  imports: [SearchBar],
  templateUrl: './library.html',
  styleUrl: './library.css',
})
export class Library {

}
