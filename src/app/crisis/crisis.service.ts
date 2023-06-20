import { Injectable } from '@angular/core';

import { Observable, map, of } from 'rxjs';

import { Crisis } from './crisis';
import { CRISES } from './mock-crises';
import { MessageService } from '../message.service';

@Injectable({
  providedIn: 'root',
})
export class CrisisService {
  constructor(private messageService: MessageService) {}

  getCrises(): Observable<Crisis[]> {
    const crises = of(CRISES);
    this.messageService.add('CrisisService: fetched heroes');
    return crises;
  }

  getCrisis(id: number | string) {
    return this.getCrises().pipe(
      map((crises: Crisis[]) => crises.find((crisis) => crisis.id === +id))
    );
  }
}
