import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Website } from '../models/web-list.model';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-website',
  imports: [NgIf, NgFor],
  templateUrl: './website.component.html',
  styleUrl: './website.component.css'
})



export class WebsiteComponent {
  websites: Website[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<Website[]>('https://localhost:44306/Api/websites').subscribe({
      next: (res) => {
        this.websites = res
        console.log(res)
      },
      error: (err) => console.error('Error loading websites:', err)
    });
  }

}
