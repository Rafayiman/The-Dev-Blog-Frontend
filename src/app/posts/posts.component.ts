import { Component , OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostService } from '../services/post.service';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../models/post.model';
import { RouterModule } from '@angular/router';
@Component({
  
  selector: 'app-posts',
  standalone: true,
  imports: [CommonModule, RouterModule ],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
  
})
export class PostsComponent implements OnInit{
  post: Post | undefined;

  constructor(private postService: PostService, private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe(
      (params) => {
        const id = params.get('id');
        if(id){
          this.postService.getPostById(id).subscribe(
            response =>{
              this.post= response;

            }
          );
        }
        }
      );
  }

}