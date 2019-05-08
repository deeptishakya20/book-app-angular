import { Routes } from '@angular/router';
import { Component } from '@angular/core';
import { BookListComponent } from './book-list.component';
import { BookDetailsComponent } from './book-details.component';


export const bookRoutes: Routes  = [
  { path:"books/:category", component:BookListComponent },
  { path:"book/:bookId", component:BookDetailsComponent}
];



 