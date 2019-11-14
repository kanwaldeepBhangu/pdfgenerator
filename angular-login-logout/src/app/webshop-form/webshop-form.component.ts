import { Component, OnInit } from '@angular/core';
import { Message } from '../message';
import { WebshopFormService } from '../webshop-form.service';
import { ViewChild, ElementRef } from '@angular/core';
import * as jsPDF  from 'jspdf'


@Component({
  selector: 'app-webshop-form',
  templateUrl: './webshop-form.component.html',
  styleUrls: ['./webshop-form.component.css']
})
export class WebshopFormComponent implements OnInit {

  message: string;

  //constructor(private webshopFormService: WebshopFormService) { }
@ViewChild('pdfTable', {static: false}) pdfTable: ElementRef;


  public downloadAsPDF() {
    const doc = new jsPDF();

    const specialElementHandlers = {
      '#editor': function (element, renderer) {
        return true;
      }
    };

    const pdfTable = this.pdfTable.nativeElement;

    doc.fromHTML(pdfTable.innerHTML, 15, 15, {
      width: 190,
      'elementHandlers': specialElementHandlers
    });

    doc.save('first.pdf');
  }

  ngOnInit() {
    console.log("WebshopFormComponent");
   // this.webshopFormService.webshopFormService().subscribe( (result) => {
     // this.message = result.content;
    //});
  }

}
