import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-edit-products',
  templateUrl: './edit-products.component.html',
  styleUrls: ['./edit-products.component.scss']
})
export class EditProductsComponent implements OnInit {

    id: any
   title: any
    price: any
    description:any
    category:any
    image:any
 
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor( private http: HttpClient,private authService: AuthService,private route:Router,private activatedRoute: ActivatedRoute) { }
  
  updateform = new FormGroup({
    id: new FormControl('', [Validators.required]),
  title: new FormControl('', [Validators.required]),
   price: new FormControl('', [Validators.required]),
   description: new FormControl('', [Validators.required]),
   category: new FormControl('', [Validators.required]),
   image: new FormControl('', [Validators.required])
  })


  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      let id = params.get('id') ?? 0;
      this.authService.getProductData(+id).subscribe(data => {
      this.updateform.setValue(data)

      })
    })
  }
  url = "http://localhost:9001/user/vehicle/";
  onSubmit(): void {
    {
      const Data = this.updateform.value;
      const endPoints = this.updateform.value.id
      this.http.put(this.url + endPoints, Data).subscribe(data => {
        console.log(data)
        this.updateform.reset();
        this.route.navigate(['admin']);
  
      }
      )
    }
  }
}

