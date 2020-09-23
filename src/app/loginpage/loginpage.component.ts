import { Component, OnInit } from '@angular/core';
import {PostService} from '../post.service';
import { NgForm } from '@angular/forms';
import {Router} from '@angular/router';
@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {
  list =[];
  constructor(private postService : PostService,private router:Router) { }

  ngOnInit(): void {
  }
  
  onSubmitHandler(postForm:NgForm){
    console.log(postForm.value);
    const postObject=postForm.value||{};
    this.postService.validateUser(postObject).subscribe((Response:any)=>{
        console.log(Response);
        if(Response){
         
          this.list.push(Response);
          this.router.navigate(["/admin"]);
          localStorage.setItem("token","valid");
        }else{
          alert("wrong username and password ..")
          this.router.navigate(["/fail"]);
        } 
        postForm.resetForm();
        console.log("-------------------------------------------")
        
       
        
    });
  }
  
}
