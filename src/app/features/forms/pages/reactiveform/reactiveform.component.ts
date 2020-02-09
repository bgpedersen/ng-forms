import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.scss']
})
export class ReactiveformComponent implements OnInit {
  checkoutForm: FormGroup;

  // constructor(private formBuilder: FormBuilder) {
  // this.checkoutForm = this.formBuilder.group({
  //   name: '',
  //   address: ''
  // });
  // }

  ngOnInit(): void {}
}
