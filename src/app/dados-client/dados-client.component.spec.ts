import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosClientComponent } from './dados-client.component';

describe('DadosClientComponent', () => {
  let component: DadosClientComponent;
  let fixture: ComponentFixture<DadosClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DadosClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DadosClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
