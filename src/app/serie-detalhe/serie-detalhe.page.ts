import { ISerie } from '../model/ISerie';
import { routes } from '../tabs/tabs.routes';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-serie-detalhe',
  templateUrl: './serie-detalhe.page.html',
  styleUrls: ['./serie-detalhe.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})

export class SerieDetalhePage implements OnInit {
  serie: ISerie | undefined;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params =>{
      const getNav = this.router.getCurrentNavigation();
      if(getNav?.extras.state){
        this.serie = getNav.extras.state['paramSerie'];
      }
    })
  }

}
