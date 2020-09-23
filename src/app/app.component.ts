import { Component } from '@angular/core';
import {Router} from '@angular/router'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crudeui';

  constructor(private router:Router){

  }

  onlogout(){
    localStorage.clear();
    this.router.navigate(["/"]);
  }

  isLogin(){
      const t=localStorage.getItem('token');
      if(t && t.length){
        return true;
      }else{
        return false;
      }
  }
}
