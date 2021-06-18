import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginform = new FormGroup({
  username:new FormControl('',[Validators.required]),
  password:new FormControl('',[Validators.required])
})

data:any =null
  constructor(private service:UserService,private router:Router) { }

  ngOnInit(): void {
   
  }
  login(){
    console.log(this.loginform.value)
    this.service.login(this.loginform.value).subscribe(res=>{
      console.log(res)
      this.data = res
      localStorage.setItem('token',this.data.token)
      if(this.data.messege == "Matched"){
        this.router.navigate(['/Home'])
      }
    })
  }

}
