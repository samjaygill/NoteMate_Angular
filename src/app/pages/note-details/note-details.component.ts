import { NotesService } from './../../shared/notes.service';
import { Note } from './../../shared/note.model';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-note-details',
  standalone: true,
  imports: [ FormsModule,  ],
  templateUrl: './note-details.component.html',
  styleUrl: './note-details.component.scss'
})
export class NoteDetailsComponent {

  note: Note = new Note();

  constructor( private notesService: NotesService, private router: Router){}

  onSubmit(form: NgForm){
    this.notesService.add(form.value)
    this.router.navigateByUrl('/');
  }

  cancel(){
    this.router.navigateByUrl('/');
  }
}
