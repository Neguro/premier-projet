import { Component, OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-single-appareil',
  templateUrl: './single-appareil.component.html',
  styleUrls: ['./single-appareil.component.scss']
})
export class SingleAppareilComponent implements OnInit {

  name: string;
  status: string;

  constructor(private appareilServices: AppareilService) 
  {
    this.name = "Appareil";
    this.status = "Status";
  }

  ngOnInit(): void {
  }

}
