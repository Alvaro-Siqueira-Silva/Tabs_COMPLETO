import { IAtores } from './../model/IAtores';
import { routes } from '../tabs/tabs.routes';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-atores-detalhe',
  templateUrl: './atores-detalhe.page.html',
  styleUrls: ['./atores-detalhe.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class AtoresDetalhePage implements OnInit {

  ator: IAtores | undefined;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params =>{
      const getNav = this.router.getCurrentNavigation();
      if(getNav?.extras.state){
        this.ator = getNav.extras.state['paramSerie'];
      }
    })
  }

}
