import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-loops',
  templateUrl: './search-loops.component.html',
  styleUrls: ['./search-loops.component.scss']
})
export class SearchLoopsComponent implements OnInit {

	myForm: FormGroup|any;

	constructor(private fb: FormBuilder) { }

	ngOnInit() {
		this.myForm = this.fb.group({
			minBpm: ['0-250', Validators.required],
			maxBpm: ['0-250', Validators.required]
		});
	}

}
