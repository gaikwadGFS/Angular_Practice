import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonCRUDComponent } from './json-crud.component';

describe('JsonCRUDComponent', () => {
  let component: JsonCRUDComponent;
  let fixture: ComponentFixture<JsonCRUDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JsonCRUDComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JsonCRUDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
