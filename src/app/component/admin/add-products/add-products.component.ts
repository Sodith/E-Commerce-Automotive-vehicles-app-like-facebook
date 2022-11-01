import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.scss']
})
export class AddProductsComponent implements OnInit {

  form: any = {
    id: null,
    title: null,
    price: null,
    description:null,
    category:null,
    image:null
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';


  constructor(private authService: AuthService,private route:Router,private activatedRoute: ActivatedRoute) { }
  ngOnInit(): void {
 
  }

  onSubmit(): void {
   const { id,title,price,description,category,image } = this.form;

     this.authService.addProductAdmin(id,title,price,description,category,image).subscribe({
     next: data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        this.route.navigate(['admin'])
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
        this.route.navigate(['addproduct'])
      }
    });
   }

}
