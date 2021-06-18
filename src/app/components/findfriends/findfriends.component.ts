import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-findfriends',
  templateUrl: './findfriends.component.html',
  styleUrls: ['./findfriends.component.css']
})
export class FindfriendsComponent implements OnInit {

  constructor(private router:Router,private services:UserService) { }
  user:any = null
  temp:any = null
  requesttext:any = 'Send Request'
  ngOnInit(): void {

    this.services.getalluser().subscribe(res=>{ 
      this.user = res
      console.log(this.user)
    })
  }

  createrequest(id:any,btnid:any){
    this.services.creterequest(id).subscribe(res=>{
      console.log(res);
     
    },err=>alert('Request Already Sent'))
  }

  clearit(id:any){

    this.services.clearallrequest(id).subscribe(res=>{
      console.log(res)
    })
  }

}
