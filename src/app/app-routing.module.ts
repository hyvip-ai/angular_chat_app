import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FindfriendsComponent } from './components/findfriends/findfriends.component';
import { LoginComponent } from './components/login/login.component';
import { MainpageComponent } from './components/mainpage/mainpage.component';
import { RoomsComponent } from './components/rooms/rooms.component';
import { SignupComponent } from './components/signup/signup.component';
import { RecievedrequestComponent } from './components/recievedrequest/recievedrequest.component';
const routes: Routes = [
  {
    path:'',pathMatch:'full',redirectTo:'Home'
  },
  {
    path:'Home',component:MainpageComponent
  },
  {
    path:'Room/:id',component:RoomsComponent
  },
  {
    path:'Login',component:LoginComponent
  },
  {
    path:"Register",component:SignupComponent
  },
  {
    path:'findFriends',component:FindfriendsComponent
  },
  {
    path:'receivedrequest',component:RecievedrequestComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
