import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../../services/api/product/product.service";
import {ProductRepresentation} from "../../services/api/models/product-representation";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit{

  constructor(private activatedRoute:ActivatedRoute,private service:ProductService) {
  }



  productsArray: Array<ProductRepresentation> = [];

  // param:any;
  // queryParam:any;

  ngOnInit(): void {

    // console.log(this.activatedRoute);
    // this.param = this.activatedRoute.snapshot.params['username'];
    // this.queryParam=this.activatedRoute.snapshot.queryParams['course'];


    // const product: ProductRepresentation = {
    //   title: 'My product',
    //   description: 'Product description',
    //   price:12,
    //   category: 'Any category',
    //   image: 'https/some-image.jpg'
    // }
    this.service.getAllProductsWithLimit().subscribe({
      next:(result) =>{
        this.productsArray= result;
      },

      //normal error handling
      // error:(error: HttpErrorResponse) =>{
      //   console.log(error);
      // }



      //another way of error handling
      // error:(error:HttpErrorResponse)=>{
      //   if (error instanceof ErrorEvent){
      //     console.error('An error occurred:', error.error.message);
      //   }else {
      //     console.error('Server return status code ${error.status}, error message:${error.message}');
      //   }
      // }
    })
  }
}
