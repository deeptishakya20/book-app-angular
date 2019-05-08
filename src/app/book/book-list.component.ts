import { Component, OnInit } from '@angular/core';
import { BookService } from './book.service';
import { Book } from './book';
import { ActivatedRoute } from '@angular/router';


@Component({
    templateUrl:"./book-list.component.html",
    // selector:"book-list"
})

export class BookListComponent implements OnInit{

    books: Book[];
  
    constructor(private bookService: BookService,
        private route: ActivatedRoute){}

        //http:localhost:8000/books/programming
        //http:localhost:8000/books/business
        //http:localhost:8000/books/biographies

    ngOnInit():void{
        this.route.paramMap.subscribe((map)=>{
            let category = map.get("category");
            console.log(category);


            this.bookService.findBookByCategory(category).subscribe((data)=>{
                this.books = data;
                console.log(data);
            });

        });
           
    }
    /*books = [
        {
            "bookId": 101,
            "imageUrl": "assets/images/her_last_wish.jpeg",
            "title": "Her Last Wish",
            "price": 250,
            "rating": 3.2,
            "category": "Biographies"
        },
        {
            "bookId": 102,
            "imageUrl": "assets/images/lifes_amazing_secrets.jpeg",
            "title": "Lifes Amazing Secrets",
            "price": 300,
            "rating": 4,
            "category": "Biographies"
        },
        {
            "bookId": 103,
            "imageUrl": "assets/images/secret_of_nagas.jpeg",
            "title": "Secret of Nagas",
            "price": 400,
            "rating": 4.9,
            "category": "Biographies"
        }
    ]; */
}