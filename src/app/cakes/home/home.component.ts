import {Component, OnInit} from '@angular/core';
import {EntityCollectionService, EntityCollectionServiceFactory} from "@ngrx/data";
import {Cakes} from "../store/cakes";
import {Observable} from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(serviceFactory: EntityCollectionServiceFactory) {
    this.cakeService = serviceFactory.create<Cakes>('Cake');
    this.allCakes$ = this.cakeService.entities$;
  }

  cakeService: EntityCollectionService<Cakes>
  allCakes$: Observable<Cakes[]>

  ngOnInit() {
    this.cakeService.getAll();
  }

}
