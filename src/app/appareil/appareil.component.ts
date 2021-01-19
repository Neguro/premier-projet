import { Component, OnInit, Input } from '@angular/core';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {
  @Input() appareilName: string;
  @Input() appareilStatus: boolean;
  @Input() index: number;
  @Input() id: number;

  constructor(private appareilService: AppareilService) 
  { 
    this.appareilName = "";
    this.appareilStatus = false;
    this.index = 0;
    this.id = 0;
  }

  ngOnInit(): void {
  }

  getStatus() : string
  {
    if(this.appareilStatus === false)
    {
      return "éteint";
    }
    else(this.appareilStatus === true)
    {
      return "allumer";
    }
  }

  onAllumer() : boolean
  {
    return this.appareilStatus = true;
  }

  onEteindre() : boolean
  {
    return this.appareilStatus = false;
  }

  getColor(): string 
  {
    if(this.getStatus() === "éteint")
    {
      return "red";
    }
    else(this.getStatus() === "allumer")
    {
      return "green";
    }
  }

  onSwitch(): void
  {
    if(this.appareilStatus === true)
    {
      this.appareilService.switchOnOne(this.index);
    }
    else(this.appareilStatus === false)
    {
      this.appareilService.switchOffOne(this.index);
    }
  }
}
