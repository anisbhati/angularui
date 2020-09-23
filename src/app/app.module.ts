import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { FailpageComponent } from './failpage/failpage.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { RegisterpageComponent } from './registerpage/registerpage.component';
import { UpdatepageComponent } from './updatepage/updatepage.component';

const appRoute:Route[]=[
  {
        path:"admin",
        component:AdminpageComponent
  },{
      path:"fail",
      component:FailpageComponent
  },{
    path:"login",
    component:LoginpageComponent
  },{
    path:"register",
    component:RegisterpageComponent
  },{
    path:"update",
    component:UpdatepageComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    AdminpageComponent,
    FailpageComponent,
    LoginpageComponent,
    RegisterpageComponent,
    UpdatepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoute),
    HttpClientModule,
    CommonModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
