import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { PostService } from '../../services/post.service';
import { Post } from '../../models/post.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UpdatePostRequest } from '../../models/Update-Post.model';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-admin-view-post',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './admin-view-post.component.html',
  styleUrl: './admin-view-post.component.css',
})
export class AdminViewPostComponent implements OnInit {
  
  post:Post | undefined;
  
  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    private router : Router
  ) {}
 
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id) {
        this.postService.getPostById(id).subscribe((response) => {
       this.post = response;
        });
      }
    });
  }
  onSubmit(): void {
    const updatePostRequest : UpdatePostRequest ={
      author: this.post?.author,
      summary: this.post?.summary,
      content: this.post?.content,
      title: this.post?.title,
      featuredImageUrl: this.post?.featuredImageUrl,
      publishedDate: this.post?.publishedDate,
      updatedDate: this.post?.updatedDate,
      visible: this.post?.visible,
      urlHamdle: this.post?.urlHamdle
    }
   
    this.postService.updatePost(this.post?.id, updatePostRequest).subscribe(
      (response) => {
        alert('successfully updated');
      },
      (error) => {
        console.error('Error updating post:', error);
      }
    );
}
deletePost(): void {
  this.postService.deletePost(this.post?.id).subscribe(
    response => {
      alert('successfully deleted');
      this.router.navigate(['/admin-post']);
    }
  );
}
}