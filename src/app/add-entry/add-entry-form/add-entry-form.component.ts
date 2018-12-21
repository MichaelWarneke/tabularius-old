import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'tabu-add-entry-form',
  templateUrl: './add-entry-form.component.html',
  styleUrls: ['./add-entry-form.component.scss']
})
export class AddEntryFormComponent implements OnInit {
  @Output() addEntry = new EventEmitter();

  constructor() {}

  ngOnInit() {}
}
