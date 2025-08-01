import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ConfigFieldModel } from '../../shared/model';

@Component({
	selector: 'lib-checkbox',
	imports: [FormsModule, ReactiveFormsModule, MatFormFieldModule, MatCheckboxModule],
	templateUrl: './checkbox.component.html',
	styleUrl: './checkbox.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckboxComponent {
	onChange = output<any>();

	config = input.required<ConfigFieldModel>();
	control = input.required<FormControl>();
	options = input.required<any>();

	get partiallyComplete(): boolean {
		const options = this.options()[this.config().checkbox?.optionChildKey!];

		if (!options) return false;

		return options.some((t: any) => t.completed) && !options.every((t: any) => t.completed);
	}

	onUpdate(completed: boolean, index?: number): void {
		const options = this.options()[this.config().checkbox?.optionChildKey!];

		if (index === undefined) {
			this.options().completed = completed;
			options?.forEach((t: any) => (t.completed = completed));

			this.control().setValue(options.filter((t: any) => t.completed));
			this.onChange.emit(this.control().value);
			return;
		}

		options[index].completed = completed;
		options.completed = options?.every((t: any) => t.completed) ?? true;

		this.control().setValue(options.filter((t: any) => t.completed));
		this.onChange.emit(this.control().value);
	}

	onChecked(isChecked: boolean, option: any): void {
		if (isChecked) {
			this.control().setValue([...this.control().value, option]);
			this.onChange.emit(this.control().value);
			return;
		}

		const options = (this.control().value || []).filter((t: any) =>
			this.config().checkbox?.optionLabel
				? t[this.config().checkbox?.optionLabel!] !== option[this.config().checkbox?.optionLabel!]
				: t !== option,
		);

		this.control().setValue(options);
		this.onChange.emit(this.control().value);
	}

	isChecked(option: any): boolean {
		const value = this.control().value as any[];

		if (this.config().checkbox?.optionChildKey) {
			if (this.config().checkbox?.optionKey) {
				const isSame = value.some((t: any) => t === option[this.config().checkbox?.optionKey!]);

				if (isSame) option.completed === true;

				return isSame;
			}

			const isSame = value.some((t: any) => JSON.stringify(t) === JSON.stringify(option));

			if (isSame) option.completed === true;

			return isSame;
		}

		return value.some((t: any) =>
			this.config().checkbox?.optionKey
				? t === option[this.config().checkbox?.optionKey!]
				: JSON.stringify(t) === JSON.stringify(option),
		);
	}
}
