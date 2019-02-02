import {Component, OnInit} from '@angular/core';
import {Person} from '../../../../../core/store/debts-store/debts.models';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {DebtsStoreService} from '../../../../../core/store/debts-store/debts-store.service';
import {ActivatedRoute, Router} from '@angular/router';
import {SnackbarService} from '../../../../../core/services/snackbar.service';
import {createRandomId, validateAllFormFields} from '../../../../../utilities/utilities';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-person-edit',
  templateUrl: './person-edit.component.html'
})
export class PersonEditComponent implements OnInit {
  person: Person;

  personForm: FormGroup;
  nameInput: FormControl;
  descriptionInput: FormControl;

  constructor(private debtsStoreService: DebtsStoreService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private snackbarService: SnackbarService
  ) {

  }

  get isNewPerson(): boolean {
    return this.person.id === 'new';
  }

  ngOnInit() {
    this.loadPersonAndCreateForm();
  }

  savePerson() {
    validateAllFormFields(this.personForm);

    if (this.personForm.invalid) {
      return;
    }

    this.person.name = this.nameInput.value;
    this.person.description = this.descriptionInput.value;

    if (this.isNewPerson) {
      this.person.id = createRandomId();
      this.debtsStoreService.addPerson(this.person);
      this.snackbarService.open('Person ' + this.person.name + ' created');
    } else {
      this.debtsStoreService.updatePerson(this.person);
      this.snackbarService.open('Person ' + this.person.name + ' edited');
    }

    this.navigateHome();
  }

  cancel() {
    this.navigateHome();
  }

  private loadPersonAndCreateForm() {
    const personId = this.activatedRoute.snapshot.params.id;

    this.debtsStoreService.getPerson(personId)
      .pipe(first())
      .subscribe((person: Person) => {
        this.person = {...person};

        if (!person) {
          this.person = {
            id: 'new', name: undefined, description: undefined
          };
        }

        this.createForm();
      });
  }

  private createForm() {
    this.nameInput = new FormControl(this.person.name, [Validators.required]);
    this.descriptionInput = new FormControl(this.person.description, [Validators.required]);

    this.personForm = new FormGroup({
      nameInput: this.nameInput,
      descriptionInput: this.descriptionInput
    });
  }

  private navigateHome() {
    this.router.navigate([`/debts`]);
  }
}
