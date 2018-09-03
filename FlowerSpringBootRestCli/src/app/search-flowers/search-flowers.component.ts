import { Component, OnInit } from '@angular/core';
import { Flower } from '../flower';
import { FlowerService } from '../flower.service';


@Component({
  selector: 'search-flowers',
  templateUrl: './search-flowers.component.html',
  styleUrls: ['./search-flowers.component.css']
})
export class SearchFlowersComponent implements OnInit {
  
  price: number;
  flowers: Flower[];

  constructor(private dataService: FlowerService) { }

  ngOnInit() {
    this.price = 0;
  }
  
  private searchFlowers(){
    this.dataService.getFlowersByPrice(this.price)
      .subscribe(flowers => this.flowers = flowers);
  }
  
  onSubmit(){
    this.searchFlowers();
  }

}
