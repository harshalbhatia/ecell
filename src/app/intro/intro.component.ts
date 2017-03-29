import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {

  chiefs: Object[] =  [
    {
      name: 'Shri. Puneeth Rajkumar',
      desc: 'Actor, Kannada Film Industry'
    },
    {
      name: 'Shri. Santosh S. Lad',
      desc: 'Hon\'ble Minister for Labour, Government of Karnataka' 
    },
    {
      name: 'Shri. Rizwan Arshad',
      desc: 'MLC, Youth Congress President, Karnataka'
    },
    {
      name: 'Shri. Sridhar Pabbisetty',
      desc: 'CEO, Namma Bengaluru Foundation'
    },
    {
      name: 'Shri. VC Prakash',
      desc: 'Deputy Chairman, NRI Forum of Karnataka'
    },
    {
      name: 'Shri. KV Goutham',
      desc: 'General Secretary, KPCC'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
