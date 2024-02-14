import { Routes } from '@angular/router';
import { MainLayoutComponent } from './pages/main-layout/main-layout.component';
import { NotesListComponent } from './pages/notes-list/notes-list.component';

export const routes: Routes = [
    {path: '', component: MainLayoutComponent, children: [
        {path: '', component: NotesListComponent}
    ]}
];
