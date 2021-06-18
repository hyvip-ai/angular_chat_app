import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  register(body:any){
    
    return this.http.post('http://localhost:3000/api/register',body,{
      headers:new HttpHeaders({
        'Access-Control-Allow-Origin':'*',
        'content-type':'application/json'
      })
    })
  }

  login(body:any){
    return this.http.post('http://localhost:3000/api/login',body,{
      headers:new HttpHeaders({
        'Access-Control-Allow-Origin':'*',
        'content-type':'application/json'
      })
    })
  }

  getdetails(){
    var token:any = localStorage.getItem('token')
    return this.http.get('http://localhost:3000/api/details',{
      headers:new HttpHeaders({
        'Access-Control-Allow-Origin':'*',
        'content-type':'application/json',
         'auth': token
      })
    })
  }

  sendgrpmessege(grpname:any,data:any){
    var token:any = localStorage.getItem('token')

    return this.http.post(`http://localhost:3000/api/postgrpmessege/${grpname}`,data,{
      headers:new HttpHeaders({
        'Access-Control-Allow-Origin':'*',
        'content-type':'application/json',
        'auth':token
      })
    })
  }

  getgroupmsg(grpname:any){
    var token:any = localStorage.getItem('token')

    return this.http.get(`http://localhost:3000/api/getgrpmesseges/${grpname}`,{
      headers:new HttpHeaders({
        'Access-Control-Allow-Origin':'*',
        'content-type':'application/json',
        'auth':token
      })
    })
  }
  creategroup(name:any){
    var token:any = localStorage.getItem('token')

    return this.http.get(`http://localhost:3000/api/creategroup/${name}`,{
      headers:new HttpHeaders({
        'Access-Control-Allow-Origin':'*',
        'content-type':'application/json',
        'auth':token
      })
    })
  }
  joingroup(name:any){
    var token:any = localStorage.getItem('token')

    return this.http.get(`http://localhost:3000/api/joingroup/${name}`,{
      headers:new HttpHeaders({
        'Access-Control-Allow-Origin':'*',
        'content-type':'application/json',
        'auth':token
      })
    })
  }

  getmembers(name:any){
    var token:any = localStorage.getItem('token')

    return this.http.get(`http://localhost:3000/api/groupdetails/${name}`,{
      headers:new HttpHeaders({
        'Access-Control-Allow-Origin':'*',
        'content-type':'application/json',
        'auth':token
      })
    })
  }
  leavegroup(name:any){
    var token:any = localStorage.getItem('token')

    return this.http.get(`http://localhost:3000/api/leavefromgrp/${name}`,{
      headers:new HttpHeaders({
        'Access-Control-Allow-Origin':'*',
        'content-type':'application/json',
        'auth':token
      })
    })
  }

  getalluser(){
    var token:any = localStorage.getItem('token')

    return this.http.get(`http://localhost:3000/api/allusers`,{
      headers:new HttpHeaders({
        'Access-Control-Allow-Origin':'*',
        'content-type':'application/json',
        'auth':token
      })
    })
  }

  creterequest(id:any){
    var token:any = localStorage.getItem('token')

    return this.http.get(`http://localhost:3000/api/creeterequest/${id}`,{
      headers:new HttpHeaders({
        'Access-Control-Allow-Origin':'*',
        'content-type':'application/json',
        'auth':token
      })
    })
  }

  clearallrequest(id:any){
    var token:any = localStorage.getItem('token')

    return this.http.get(`http://localhost:3000/api/deleteallrequest/${id}`,{
      headers:new HttpHeaders({
        'Access-Control-Allow-Origin':'*',
        'content-type':'application/json',
        'auth':token
      })
    })
  }
  getallrequests(){
    var token:any = localStorage.getItem('token')

    return this.http.get(`http://localhost:3000/api/getallrequests`,{
      headers:new HttpHeaders({
        'Access-Control-Allow-Origin':'*',
        'content-type':'application/json',
        'auth':token
      })
    })
  }

  acceptrequest(id:any){
    var token:any = localStorage.getItem('token')

    return this.http.get(`http://localhost:3000/api/acceptrequest/${id}`,{
      headers:new HttpHeaders({
        'Access-Control-Allow-Origin':'*',
        'content-type':'application/json',
        'auth':token
      })
    })
  }


  
  rejectrequest(id:any){
    var token:any = localStorage.getItem('token')

    return this.http.get(`http://localhost:3000/api/rejectrequest/${id}`,{
      headers:new HttpHeaders({
        'Access-Control-Allow-Origin':'*',
        'content-type':'application/json',
        'auth':token
      })
    })
  }

}
