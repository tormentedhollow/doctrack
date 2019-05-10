import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { DataItemService, Document } from '../_services';
import { Router } from '@angular/router';
import { Subject, Observable } from 'rxjs';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.scss']
})
export class DocumentComponent implements OnInit {

  isEditing: boolean;
  docs: Document[];
  selectedDoc: Document;
  docFormGroup = this.fb.group(DocumentComponent.createDoc());

  static createDoc() {
    
    return {
      id: '',
      purpose: '',
      name: '',
      qty: '',
      unit: '',
      cost: ''
    };
  }

  constructor(public fb: FormBuilder, private dataItemService: DataItemService,
    private router: Router) {
      console.log(this.docFormGroup);
     }

  ngOnInit() {
    this.docs = this.dataItemService.getAllDocument();
  }

  addNew(docForm: NgForm) {
    docForm.resetForm();
    this.docFormGroup.reset();
    this.docFormGroup.setValue(DocumentComponent.createDoc());
    this.isEditing = true;
  }

  select(docId: string) {
    this.isEditing = false; 
    this.selectedDoc=this.dataItemService.getDocument(docId);
    console.log(this.selectedDoc);
    this.router.navigate(['/home/document', docId]);
  }

  generate(){
    window.print();
  }

}
