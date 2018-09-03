import { Component, OnInit } from '@angular/core';
import { Flower } from '../flower';
import { FlowerService } from '../flower.service';
 

@Component({
  selector: 'create-flower',
  templateUrl: './create-flower.component.html',
  styleUrls: ['./create-flower.component.css']
})
export class CreateFlowerComponent implements OnInit {
  
  flower: Flower = new Flower();
  submitted = false;
  
  constructor(private flowerService: FlowerService) { }

  ngOnInit() {
  }
  
  newFlower(): void {
    this.submitted = false;
    this.flower = new Flower();
  }
  
  save() {
    this.flowerService.createFlower(this.flower)
      .subscribe(data => console.log(data), error => console.log(error));
    this.flower = new Flower();
  }
  
  onSubmit(){
    this.submitted = true;
    this.save();
  }

}
