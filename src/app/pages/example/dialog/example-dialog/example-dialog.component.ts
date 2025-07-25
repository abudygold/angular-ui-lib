import { Component, inject } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { ButtonComponent, ButtonModel, ModalComponent } from '@abudygold/angular-ui-lib';

@Component({
	selector: 'app-example-dialog',
	imports: [MatDialogModule, ModalComponent, ButtonComponent],
	templateUrl: './example-dialog.component.html',
	styleUrl: './example-dialog.component.scss',
})
export class ExampleDialogComponent {
	#dialogRef = inject(MatDialogRef);

	cancelButton: ButtonModel = new ButtonModel('stroked', 'Cancel', 'primary');
	saveButton: ButtonModel = new ButtonModel('flat', 'Save', 'primary');

	onSubmit(): void {
		console.log('@@@ submitted');
		this.#dialogRef.close();
	}
}
