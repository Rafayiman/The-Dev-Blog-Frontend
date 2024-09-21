
import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { Post } from '../models/post.model';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
 
})
export class HomeComponent implements OnInit{
  posts: Post[]=[];
  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.postService.getAllPost().subscribe(
      (response) => {
      
        this.posts = response;
   
    });

}
}
