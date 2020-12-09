import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'edit-table';
  i = 0;
  editId: string | null = null;
  listOfData: any;

  startEdit(id: string): void {
    this.editId = id;
  }

  stopEdit(): void {
    this.editId = null;
  }

  addRow(): void {
    this.listOfData = [
      
    ];
    this.i++;
  }

  deleteRow(id: string): void {
    this.listOfData = this.listOfData.filter(d => d.id !== id);
  }

  ngOnInit(): void {
    this.listOfData = [{id: 1, firstName: 'Ratnesh', updatedAt: new Date(), createdAt: new Date()},
    {id: 2, firstName: 'Zing', updatedAt: new Date(), createdAt: new Date()},
    {id: 3, firstName: 'Greg', updatedAt: new Date(), createdAt: new Date()},
    {id: 4, firstName: 'Sana', updatedAt: new Date(), createdAt: new Date()},
    {id: 5, firstName: 'Neha', updatedAt: new Date(), createdAt: new Date()},
    {id: 6, firstName: 'Kiran', updatedAt: new Date(), createdAt: new Date()},
    {id: 7, firstName: 'John', updatedAt: new Date(), createdAt: new Date()},
    {id: 8, firstName: 'Engliue', updatedAt: new Date(), createdAt: new Date()},
    {id: 9, firstName: 'Marina', updatedAt: new Date(), createdAt: new Date()},
    {id: 10, firstName: 'Vivek', updatedAt: new Date(), createdAt: new Date()}]
  }
}
