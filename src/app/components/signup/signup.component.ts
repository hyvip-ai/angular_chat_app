import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private router:Router,private services:UserService) { }
  signupform = new FormGroup({
    name:new FormControl('',[Validators.required]),
    username:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required])
  })
  ngOnInit(): void {
  }
  submitform(){
    console.log(this.signupform.value);
    this.services.register(this.signupform.value).subscribe(res=>{
      console.log(res);
    })
  }

}
