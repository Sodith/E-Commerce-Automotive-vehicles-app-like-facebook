import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  Loginform = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  })
  errorMessage: any;
  error = false;
  constructor(private authService: AuthService, private route: Router, private http: HttpClient) { }
  ngOnInit(): void {

  }

  login(): void {
    if(this.Loginform.value.username=="admin1" && this.Loginform.value.password=="admin1")
    {  this.route.navigate(['admin']);}
    else
    this.authService.login(this.Loginform.value.username, this.Loginform.value.password).
      subscribe(res => {
        console.log(res)
        alert("login success")
        this.route.navigate(['products']);
        if (res.status == "User successfully logged in" /*&& res.userType == "CUSTOMER"*/) {
        
          console.log("hello")
          alert("login success")
          this.route.navigate(['products']);
          this.error = false;
        } else if (res.status == "201" /*&& res.userType == "ADMIN"*/) {
         
          this.error = false;
        }
      },
        err => {
          alert("login failure")
          this.route.navigate(['login']);
        });
  }


//   login(){

//     this.http.get<any>("http://localhost:9001/authen/login").subscribe(res => {
//       const user = res.find((a: any) => {
//        if(a.username==="admin1" && a.password=== "admin1")
//         {
//           return this.route.navigate(['admin'])
//         }

// else
//       {  return a.username === this.Loginform.value.username && a.password === this.Loginform.value.password}
//       });
//       if (user) {
//         console.log(user)
//         alert("login success")
//         this.Loginform.reset();
//         this.route.navigate(['products'])

//       }
//       else {
//         alert("Incorrect UserName and PassWord")
//       }

//     }, err => { alert("something went wrong") })
//   }

}