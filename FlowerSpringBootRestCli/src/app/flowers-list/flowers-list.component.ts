import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FlowerService } from '../flower.service';
import { Flower } from '../flower';

@Component({
  selector: 'flowers-list',
  templateUrl: './flowers-list.component.html',
  styleUrls: ['./flowers-list.component.css']
})
export class FlowersListComponent implements OnInit {
  
  flowers: Observable<Flower[]>;
  
  constructor(private flowerService: FlowerService) { }

  ngOnInit() {
    this.reloadData();
  }
  
  deleteFlowers() {
    this.flowerService.deleteAll()
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log('ERROR: '+ error));
    
  }
  
  reloadData() {
    this.flowers = this.flowerService.getFlowersList();
  }

}
