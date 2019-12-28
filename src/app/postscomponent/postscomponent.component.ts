import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'postscomponent',
  templateUrl: './postscomponent.component.html',
  styleUrls: ['./postscomponent.component.css']
})
export class PostscomponentComponent implements OnInit {

  posts:any[];
  url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http:HttpClient) {
    
   }

  ngOnInit() {
    this.http.get(this.url)
    .subscribe(response =>{
      this.posts = response as any;
    })
  }

  createPostTitle(input:HTMLInputElement){
    let post = {title:input.value};
    this.http.post(this.url,post)
    .subscribe(response =>{
      this.posts.splice(0,0,response);
      
    })
  }


  updatePost(post){
    this.http.patch(this.url+'/'+post.id,JSON.stringify({isRead:true}))
    .subscribe(response =>{
      console.log(response);
    })
  }

}
