import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { Observable, of } from 'rxjs';
import { Client } from 'src/app/models/client.model';
import { ClientService } from 'src/app/services/client.service';

import { CardComponent } from './card.component';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;
  let clientService :ClientService;
  let clienteServiceMock;
  let listClient : Client[] = []
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardComponent],
      imports:[
        HttpClientTestingModule
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    
    fixture.detectChanges();
    


    clientService = TestBed.inject(ClientService);
    let functions = spyOn(clientService, 'getAll').and.returnValue(of(listClient));
    clientService.getAll();

  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should title h3',()=>{
  

    // const de : DebugElement = fixture.debugElement;
    // const cardElement : HTMLElement = de.nativeElement;

    const cardElement :HTMLElement = fixture.nativeElement
    const title = cardElement.querySelector('h3');
    expect(title?.textContent).toContain('Cliente:')


  })

  it('should verficate if contains li', () => {


    const cardElement : HTMLElement = fixture.nativeElement;
    const lis = cardElement.querySelectorAll('ul li')

    expect(lis.length).toEqual(10);
    
  })

  it('should vericate if contains two card',()=>{
  

    fixture.detectChanges();
    const cardElement : HTMLElement = fixture.nativeElement;
    const cards = cardElement.querySelectorAll('.card');

 
    expect(cards.length).toEqual(1);


  })


});
