import { Component, OnInit } from '@angular/core';
import { Crisis } from '../crisis';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { CrisisService } from '../crisis.service';
import { Observable } from 'rxjs';
import { DialogService } from 'src/app/dialog.service';

@Component({
  selector: 'app-crisis-details',
  templateUrl: './crisis-details.component.html',
  styleUrls: ['./crisis-details.component.css'],
})
export class CrisisDetailsComponent implements OnInit {
  crisis$!: Observable<Crisis | undefined>; //-> STEP 5
  editName = '';
  crisis!: Crisis;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: CrisisService, // -> STEP 5
    public dialog: DialogService
  ) {}

  ngOnInit() {
    //! fino a step 5
    /*this.crisis$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => this.service.getCrisis(params.get('id')!))
    );

    this.crisis$.subscribe((_crisis) => (this.editName = _crisis!.name));*/

    this.route.data.subscribe((data) => {
      console.log(data);

      const crisis: Crisis = data['crisis'];
      this.editName = crisis.name;
      this.crisis = crisis;
    });

    /* Alternativa senza Observable
      const id = this.route.snapshot.paramMap.get('id')!
      this.hero$ = this.service.getHero(id)*/

    /* this.route.paramMap.subscribe((par) => {
        let test = par.get('id');
        console.log('test');
      }); */
  }
  /*
  ! STEP 5
  goToCrises() {
    this.router.navigate(['/crisis-center']);
  }
  goToCrisis(crisis: Crisis) {
    const crisisId = crisis ? crisis.id : null;
    this.router.navigate(['../', { id: crisisId, foo: 'foo' }], {
      relativeTo: this.route,
    }); */

  goToCrisis() {
    const crisisId = this.crisis ? this.crisis.id : null;
    this.router.navigate(['../', { id: crisisId, foo: 'foo' }], {
      relativeTo: this.route,
    });
  }

  //! STEP 5 - GUARD

  cancel() {
    this.goToCrisis();
  }

  save() {
    this.crisis.name = this.editName;
    this.goToCrisis();
  }

  canDeactivate(): Observable<boolean> | boolean {
    if (!this.crisis || this.crisis.name === this.editName) {
      return true;
    }
    return this.dialog.confirm('Discard changes?');
  }
}
