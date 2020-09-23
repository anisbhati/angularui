import { Component, OnInit } from '@angular/core';
import {PostService} from '../post.service';
import { NgForm } from '@angular/forms';
import {Router} from '@angular/router';
@Component({
  selector: 'app-updatepage',
  templateUrl: './updatepage.component.html',
  styleUrls: ['./updatepage.component.css']
})
export class UpdatepageComponent implements OnInit {
  list =[];
  constructor(private postService : PostService,private router:Router) { }

  ngOnInit(): void {
  }


  onSubmitHandler(postForm:NgForm){
    console.log(postForm.value);
    const postObject=postForm.value||{};
    this.postService.addUser(postObject).subscribe((Response:any)=>{
        console.log(Response);
        if(Response){
          this.list.push(Response);
          this.ngOnInit();
        } 
        postForm.resetForm();
        console.log("-------------------------------------------")
        this.router.navigate(["/admin"]);
    });
  }

}
