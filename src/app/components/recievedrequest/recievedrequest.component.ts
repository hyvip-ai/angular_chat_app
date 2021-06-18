import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-recievedrequest',
  templateUrl: './recievedrequest.component.html',
  styleUrls: ['./recievedrequest.component.css']
})
export class RecievedrequestComponent implements OnInit {
  mydata:any = null
  constructor(private router:Router,private services:UserService) { }

  ngOnInit(): void {
    this.services.getallrequests().subscribe(res=>{
      console.log(res);
      this.mydata = res
    })
  }
  accept(id:any){
    this.services.acceptrequest(id).subscribe(res=>{
      console.log(res);
    })
    
  }
  reject(id:any){
    this.services.rejectrequest(id).subscribe(res=>{
      console.log(res)
    })
   setTimeout(() => {
    this.services.getallrequests().subscribe(res=>{
      console.log(res);
      this.mydata = res
    })
   }, 1000);
  }

}
