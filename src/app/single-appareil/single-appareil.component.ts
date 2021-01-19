import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-single-appareil',
  templateUrl: './single-appareil.component.html',
  styleUrls: ['./single-appareil.component.scss']
})
export class SingleAppareilComponent implements OnInit {

  name: string | undefined;
  status: boolean | undefined ;

  constructor(private appareilServices: AppareilService, private route: ActivatedRoute) 
  {
    this.name = "Appareil";
    this.status = false;
  }

  ngOnInit(): void {
    const id = this.route.snapshot.params["id"];
    this.name = this.appareilServices?.getAppareilById(+id)?.name;
    this.status = this.appareilServices.getAppareilById(+id)?.status;
  }

}
