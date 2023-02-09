import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-botones',
  templateUrl: './botones.component.html',
  styleUrls: ['./botones.component.css']
})
export class BotonesComponent implements OnInit{

  constructor(){}

  ngOnInit(): void{

  }

  src:string = "https://images.pexels.com/photos/15466580/pexels-photo-15466580.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
}
