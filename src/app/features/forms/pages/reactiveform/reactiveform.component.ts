import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.scss']
})
export class ReactiveformComponent implements OnInit {
  checkoutForm: FormGroup;

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email
  ]);

  formSubmit(e) {
    if (e) {
      e.preventDefault();
    }
    console.log(e);

    const testArray = [1, 2, 3];
    const filteredArray = testArray.find(item => item === 1);
    console.log(filteredArray);
  }

  // constructor(private formBuilder: FormBuilder) {
  // this.checkoutForm = this.formBuilder.group({
  //   name: '',
  //   address: ''
  // });
  // }

  ngOnInit(): void {}
}
