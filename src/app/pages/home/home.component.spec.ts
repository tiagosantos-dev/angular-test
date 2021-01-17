import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Observable, of } from 'rxjs';
import { Client } from 'src/app/models/client.model';
import { ClientService } from 'src/app/services/client.service';

import { HomeComponent } from './home.component';
import { ClientStub } from './shared/client.stub';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let clientService :ClientService;

  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      imports:[HttpClientTestingModule],
      providers:[
        {provide: ClientService, useClass: ClientStub}

      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should if exist two card', () =>{

    const homeElement : HTMLElement = fixture.nativeElement;
    const de = fixture.debugElement
  
    const cards = homeElement.querySelectorAll('.card');
    expect(cards.length).toEqual(2)
    debugger;

  })

});
