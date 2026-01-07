import { Component } from '@angular/core';
import { SearchBar } from "../search-bar/search-bar";

@Component({
  selector: 'app-book-catalog',
  imports: [SearchBar],
  templateUrl: './book-catalog.html',
  styleUrl: './book-catalog.css',
})
export class BookCatalog {

}
