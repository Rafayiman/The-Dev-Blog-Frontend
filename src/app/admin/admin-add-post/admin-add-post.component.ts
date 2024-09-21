import { Component , OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AddPostRequest } from '../../models/add-post.model';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-admin-add-post',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './admin-add-post.component.html',
  styleUrl: './admin-add-post.component.css',
})
export class AdminAddPostComponent  implements OnInit{
  constructor(private postService : PostService) {}
  post: AddPostRequest = {
    title: '',
    content: '',
    summary: '',
    urlHamdle: '',
    featuredImageUrl: '',
    author: '',
    publishedDate: new Date(),
    updatedDate:  new Date(),
    visible: true,
  };
  ngOnInit(): void {
    
  }
  onSubmit(): void {
    
    this.postService.addPost(this.post)
    
    .subscribe(
      response =>{
        alert('successfully added');
      }
    );
  }


}

