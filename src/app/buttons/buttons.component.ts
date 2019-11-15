import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {



constructor() {

   }

ngOnInit() {


  }



   myFunc() {
    const x = document.getElementById('cup');
    x.style.position = 'absolute';
    x.style.left = '0px';

    /* if (x.style.display === 'none') {
      transition.style.transition = 'all 2s';
      x.style.display = 'block';
    } else {
      x.style.display = 'none';
    }*/
  }

  CloseUp() {
    const x = document.getElementById('cup');
    x.style.margin = '0px auto';

  }
}


