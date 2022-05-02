import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CafeListComponent } from './cafe-list.component';
import { DebugElement } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { CafeService } from "../cafe.service";
import { Cafe } from "../cafe";
import faker from "@faker-js/faker";

describe('CafeListComponent', () => {
  let component: CafeListComponent;
  let fixture: ComponentFixture<CafeListComponent>;
  let debug: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
      declarations: [
        CafeListComponent
      ],
      providers: [
        CafeService
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CafeListComponent);
    component = fixture.componentInstance;

    for (let id=1; id <= 3; id++) {
      component.cafes = [
        new Cafe(
          faker.datatype.number(),
          faker.lorem.words(2),
          faker.lorem.slug(),
          faker.address.city(),
          faker.lorem.sentence(),
          faker.datatype.number(),
          faker.image.imageUrl()
        ),
        new Cafe(
          faker.datatype.number(),
          faker.lorem.words(2),
          faker.lorem.slug(),
          faker.address.city(),
          faker.lorem.sentence(),
          faker.datatype.number(),
          faker.image.imageUrl()
        ),
        new Cafe(
          faker.datatype.number(),
          faker.lorem.words(2),
          faker.lorem.slug(),
          faker.address.city(),
          faker.lorem.sentence(),
          faker.datatype.number(),
          faker.image.imageUrl()
        ),
      ];
    }

    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a table element ', () => {
    let trs = fixture.nativeElement.querySelectorAll('table');
    expect(trs).toBeTruthy();
    expect(trs.length).toBe(1);
  });

  it('should have a thead element ', () => {
    let trs = fixture.nativeElement.querySelectorAll('thead');
    expect(trs).toBeTruthy();
    expect(trs.length).toBe(1);
  });

  it('should have a tbody element ', () => {
    let trs = fixture.nativeElement.querySelectorAll('tbody');
    expect(trs).toBeTruthy();
    expect(trs.length).toBe(1);
  });

  it('should have a tr element ', () => {
    let trs = fixture.nativeElement.querySelectorAll('tr');
    expect(trs).toBeTruthy();
    expect(trs.length).toBe(4);
  });
});
