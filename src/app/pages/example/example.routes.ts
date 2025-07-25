import { Routes } from '@angular/router';

export const EXAMPLE_ROUTES: Routes = [
	{
		path: 'example',
		children: [
			{
				path: '',
				loadComponent: () =>
					import('./page/example-list/example-list.component').then(m => m.ExampleListComponent),
			},
			{
				path: 'add',
				loadComponent: () =>
					import('./page/example-add/example-add.component').then(m => m.ExampleAddComponent),
			},
			{
				path: 'edit/:id',
				loadComponent: () =>
					import('./page/example-edit/example-edit.component').then(m => m.ExampleEditComponent),
			},
			{
				path: 'detail/:id',
				loadComponent: () =>
					import('./page/example-detail/example-detail.component').then(
						m => m.ExampleDetailComponent,
					),
			},
		],
	},
];
