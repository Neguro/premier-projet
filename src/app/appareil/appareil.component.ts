import { NULL_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {
  @Input() appareilName: string;
  @Input() appareilStatus: boolean;

  constructor() 
  { 
    this.appareilName = "";
    this.appareilStatus = false;
  }

  ngOnInit(): void {
  }

  getStatus() : string
  {
    if(this.appareilStatus === false)
    {
      return "éteint";
    }
    else
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
    else(this.getStatus() == "allumer")
    {
      return "green";
    }
  }
}
