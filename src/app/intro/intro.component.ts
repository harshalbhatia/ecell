import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {
  chiefs: Object[] = [
    {
      name: 'Chethan Hiremath',
      image: 'chethan.jpg',
      desc: 'Founder/Director at Groove OK Please'
    },
    {
      name: 'Safdhar Adoor',
      image: 'safdhar.jpg',
      desc: 'Co-Founder at Rices Obliquity'
    },
    {
      name: 'Satyarup Siddhanta',
      image: 'satyarup.jpg',
      desc: 'Bangalore-based Indian mountaineer'
    }
  ];

  constructor() {}

  ngOnInit() {}
}
