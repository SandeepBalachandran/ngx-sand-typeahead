import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { SandTypeaheadComponent } from './sand-typeahead.component';

describe('SandTypeaheadComponent testing will be seen here', () => {
  let component: SandTypeaheadComponent;
  let fixture: ComponentFixture<SandTypeaheadComponent>;

  const objOptions = [
    {
     name: 'india'
    },
    {
     name: 'australia'
    },
    {
     name: 'New zealand'
    },
    {
      name: 'Ethopia'
    }];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ SandTypeaheadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SandTypeaheadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should reinitialize options if data source changes', (done) => {
    setTimeout(() => {
      component.options = objOptions;
      component.ngOnChanges({});
      expect(component.options).toEqual(objOptions);
      done();
    }, 3000);

  });

  it('should set available items when initializing', () => {
    component.options = objOptions;
    component.ngOnInit();
    expect(component.dropdowndata).toEqual(component.options);
  });

  it('should trigger click event true upon clicking the input',() => {
    component.onClick();
    expect(component.clicked).toEqual(true);

  })

  it('should trigger click event false upon blur the input',() => {
    component.onBlur();
    expect(component.clicked).toEqual(false);

  });
});
