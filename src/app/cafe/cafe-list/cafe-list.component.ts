import { Component, OnInit } from '@angular/core';
import { Cafe } from "../cafe";
import { CafeService } from "../cafe.service";

@Component({
  selector: 'app-cafe-list',
  templateUrl: './cafe-list.component.html',
  styleUrls: ['./cafe-list.component.css']
})
export class CafeListComponent implements OnInit {

  cafes: Array<Cafe> = []
  countsCafes: {[key: string]: number} = {};

  constructor(private cafeService: CafeService) {}

  getCafes(): void{
    this.cafeService.getCafes().subscribe((cafes) => {
      this.cafes = cafes;

      this.cafes.forEach((item) => {
        this.countsCafes[item.tipo] = this.countsCafes[item.tipo] ? (this.countsCafes[item.tipo] += 1) : 1;
      });
    })
  }

  ngOnInit(): void {
    this.getCafes();
  }

}
