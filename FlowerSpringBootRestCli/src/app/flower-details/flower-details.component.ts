import { Component, OnInit, Input } from '@angular/core';
import { FlowerService } from '../flower.service';
import { Flower } from '../flower';
import { FlowersListComponent} from '../flowers-list/flowers-list.component';


@Component({
  selector: 'flower-details',
  templateUrl: './flower-details.component.html',
  styleUrls: ['./flower-details.component.css']
})
export class FlowerDetailsComponent implements OnInit {
  
  @Input() flower: Flower;

  constructor(private flowerService: FlowerService, private listComponent: FlowersListComponent) { }

  ngOnInit() {
  }
  updateActive(isActive: boolean){
    this.flowerService.updateFlower(this.flower.id,
      {name: this.flower.name, price: this.flower.price, active: isActive})
      .subscribe(
        data => {
          console.log(data);
          this.flower = data as Flower;
        },
        error => console.log(error));
  }
  
  deleteFlower(){
    this.flowerService.deleteFlower(this.flower.id)
      .subscribe(
        data => {
          console.log(data);
          this.listComponent.reloadData();
        },
        error => console.log(error));
  }

}
