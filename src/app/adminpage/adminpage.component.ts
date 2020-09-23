import { Component, OnInit } from '@angular/core';
import {PostService} from '../post.service';
import { NgForm } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.css']
})
export class AdminpageComponent implements OnInit {

  list =[];
  constructor(private postService : PostService,private router:Router) { }

  ngOnInit(): void {
console.log("i am here ...");
this.postService.getAllUsers().subscribe((Response:any)=>
   {
     console.log(Response);
     this.list=Response;
   }
);

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
      //this.router.navigate(["/"]);
  });
}


onSubmitDelete(postForm:NgForm){
  console.log(postForm.value);
  alert(postForm.value);
  const postObject=postForm.value||{};
  this.postService.deleteUser(postObject).subscribe((Response:any)=>{
      console.log(Response);
      if(Response){
        this.list.push(Response);
        
      } 
      postForm.resetForm();
  });

}

f(a){
  
  alert("Hi i hited ........ "+a)
  this.postService.deleteUser(a).subscribe((Response:any)=>{
    console.log(Response);
    if(Response){
      this.list.pop();
    } 
    
});
}


ff(a,b,c,d,e){
  
  //alert("Hi info ........ /n"+
  //" ID "+a+"/n"+" fname "+b+"/n  mail "+ c+" /n  mob "+d);
  //this.router.navigate(["/update"]);
 
    
};





}
