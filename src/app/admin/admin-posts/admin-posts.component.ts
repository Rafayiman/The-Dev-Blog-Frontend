import { Component, OnInit, inject } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Post } from '../../models/post.model';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-admin-posts',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './admin-posts.component.html',
  styleUrl: './admin-posts.component.css',
})
export class AdminPostsComponent implements OnInit {
  postService = inject(PostService);
  constructor() {}
  posts: Post[] = [];
  ngOnInit(): void {
    this.postService.getAllPost().subscribe((response) => {
      this.posts = response;
    },
    error => {
      console.error('Error fetching post:', error);
    }
  );
  }
}
