import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }
  onlogin(form:NgForm){
 this.authService.login(form.value).subscribe(
   (res)=>{
     console.log(res);
     sessionStorage.setItem('token',res.token); 

   }
 )
  }
}
