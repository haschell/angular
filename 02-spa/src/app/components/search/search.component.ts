import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

heroes: any[] = [];
termino: string;
@Input() i: number;

  constructor(private activatedRoute: ActivatedRoute, private heroesService: HeroesService, private router: Router) {
   }

  ngOnInit() {
    this.activatedRoute.params.subscribe( params => {
      this.termino = params[`termino`];
      console.log(params);
      this.heroes = this.heroesService.buscarHeroes(params[`termino`]);
      console.log(this.heroes);
    });
  }

  verHeroe() {
    console.log(this.i);
    this.router.navigate( ['/heroe', this.i] );
  }

}
