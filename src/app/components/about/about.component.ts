import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../../services/api/product/product.service";
import {ProductRepresentation} from "../../services/api/models/product-representation";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})


export class AboutComponent implements OnInit{

  constructor(private activatedRoute:ActivatedRoute,private service:ProductService) {
  }

    param:any;
    queryParam:any;

  ngOnInit(): void {
    console.log(this.activatedRoute);
    this.param = this.activatedRoute.snapshot.params['username'];
    this.queryParam=this.activatedRoute.snapshot.queryParams['course'];


   const product: ProductRepresentation = {
     title: 'My product',
     description: 'Product description',
     price:12,
     category: 'Any category',
     image: 'https/some-image.jpg'
   }
    this.service.newProduct(product).subscribe({
      next:(data) =>{
        console.log(data);
      }
    })
  }

}
