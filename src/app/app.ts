import { Component, signal } from '@angular/core';
import {  NavBar } from "./components/navbar/navbar";
import { ContentLayout } from "./components/content-layout/content-layout";

@Component({
  selector: 'app-root',
  imports: [NavBar, NavBar, ContentLayout],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('librarian');
}
