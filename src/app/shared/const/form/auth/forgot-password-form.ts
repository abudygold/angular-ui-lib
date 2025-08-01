import { ButtonModel, FormlyModel } from '@abudygold/angular-ui-lib';

export const FORGOT_PASSWORD_FORM: FormlyModel = {
	formClass: 'tw-grid tw-grid-cols-1 tw-gap-4',
	options: {},
	fields: [
		{
			type: 'textbox',
			control: 'email',
			fieldClass: 'tw-col-span-1',
			config: {
				label: 'Email',
				placeholder: 'name@company.com',
				textbox: {
					textboxType: 'email',
				},
			},
		},
	],
};

export const FORGOT_PASSWORD_SEND_BUTTON: ButtonModel = new ButtonModel(
	'flat',
	'Send',
	'primary',
	false,
	'tw-w-full !tw-h-10',
);
