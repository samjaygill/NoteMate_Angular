import { Component } from '@angular/core';
import { NoteCardComponent } from '../../note-card/note-card.component';
import { Note } from '../../shared/note.model';
import { NotesService } from '../../shared/notes.service';
import { RouterModule } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-notes-list',
  standalone: true,
  imports: [ NoteCardComponent, RouterModule, NgFor],
  templateUrl: './notes-list.component.html',
  styleUrl: './notes-list.component.scss'
})
export class NotesListComponent {


  notes: Note[] = new Array<Note>();

  constructor(private notesService: NotesService){}

  ngOnInit(){
    this.notes = this.notesService.getAll();
  }

  deleteNote(id: number){
    this.notesService.delete(id);
  }

}
