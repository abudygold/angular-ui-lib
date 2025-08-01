import { Component, input, OnInit, output } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ConfigFieldModel } from '../../shared/model';

@Component({
	selector: 'lib-autocomplete',
	imports: [
		FormsModule,
		ReactiveFormsModule,
		MatFormFieldModule,
		MatInputModule,
		MatAutocompleteModule,
	],
	templateUrl: './autocomplete.component.html',
	styleUrl: './autocomplete.component.scss',
})
export class AutocompleteComponent implements OnInit {
	onChange = output<any>();

	config = input.required<ConfigFieldModel>();
	control = input.required<FormControl>();
	options = input.required<any[]>();

	filteredOptions: any[] = [];

	ngOnInit(): void {
		this.filteredOptions = this.options() || [];
	}

	displayFn(option: any): string {
		return option && option[this.config().autocomplete?.optionLabel!]
			? option[this.config().autocomplete?.optionLabel!]
			: option;
	}

	onFilter(event: Event): void {
		const inputValue = (event.target as HTMLInputElement).value;

		if (!inputValue) {
			this.filteredOptions = this.options();
			return;
		}

		this.filteredOptions = this.options().filter(option =>
			typeof option === 'object'
				? option[this.config().autocomplete?.optionLabel!]?.toLowerCase().includes(inputValue)
				: option?.toLowerCase().includes(inputValue),
		);
	}
}
