import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {

  chekced:boolean = true
data:any = null
roomname:any = null
roomname1:any = null
  constructor(private router:Router,private service:UserService) { }
title:any = null
  ngOnInit(): void {
       this.service.getdetails().subscribe(res=>{
      this.title = res
      console.log(this.title)

    },err=>this.router.navigate(['/Login']))
  }

  createroom(){
    console.log(this.roomname)

    if(!this.roomname){
      alert('Plaese Enter A room Name')
    }
    else{
      this.service.creategroup(this.roomname).subscribe(res=>{
        console.log(res)
        this.data=res
        // console.log(this.data.messege)
        if(this.data.messege == 'A group with same name already exists'){
          alert('A group with same name already exists enter another name')
        }
        else{
          this.router.navigate([`/Room/${this.roomname}`])
  
        }
      })
  
    }
  }

  joineroom(){
    console.log(this.roomname1)

    if(!this.roomname1){
      alert('Plaese Enter A room Name')
    }
    else{
     this.service.joingroup(this.roomname1).subscribe(res=>{
       console.log(res)
      this.router.navigate([`/Room/${this.roomname1}`])

     },err=>alert("the room doesn't even exist bro"))
    }
  }

  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/Login'])
  }
  fincfriemds(){
    this.router.navigate(['/findFriends'])
  }

  accept(){
    this.router.navigate(['/receivedrequest'])
  }


}
