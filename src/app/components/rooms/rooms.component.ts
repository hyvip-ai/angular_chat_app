import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {
  mymesseges:any = null
  mymember:any = null
  constructor(private activatedroutes:ActivatedRoute,private service:UserService,private router:Router) { }
 myusername:any = null
mydata:any = null
 mytimeinterval:any = null
  msgform = new FormGroup({
    text:new FormControl('',Validators.required)
  })
  
  ngOnInit(): void {
   
this.service.getdetails().subscribe(res=>{
  // console.log(res)
  this.mydata = res
  this.myusername = this.mydata.user.username
  // console.log(this.myusername)
})
    

  this.mytimeinterval =  setInterval(()=>{
    this.service.getmembers(this.activatedroutes.snapshot.params.id).subscribe(res=>{
      console.log(res)
      this.mymember = res

    })
   this.service.getgroupmsg(this.activatedroutes.snapshot.params.id).subscribe(res=>{
     console.log(res);
     this.mymesseges = res
   })
   },100)

 
  }

  leave(){
    window.clearInterval(this.mytimeinterval)
    this.service.leavegroup(this.activatedroutes.snapshot.params.id).subscribe(res=>{
      console.log(res);

      setTimeout(() => {
    this.router.navigate(['/Home'])
        
      }, 4000);
    })
  }
  sendmsg(){
    
    console.log(this.msgform.value)
    this.service.sendgrpmessege(this.activatedroutes.snapshot.params.id,this.msgform.value).subscribe(res=>{
      this.msgform.setControl('text',new FormControl('',Validators.required));
      console.log(res)
    })
  }

}
