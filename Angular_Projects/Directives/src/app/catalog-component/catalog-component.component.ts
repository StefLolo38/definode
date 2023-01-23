import { Component } from '@angular/core';
import { ListProduct } from '../Data/Products';
import { Product } from '../Models/Products.Interface';
@Component({
  selector: 'app-catalog-component',
  templateUrl: './catalog-component.component.html',
  styleUrls: ['./catalog-component.component.css']
})
export class CatalogComponentComponent {

  listProduct: Product[] = ListProduct

}
