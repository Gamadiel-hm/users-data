import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
    });
    fixture = TestBed.createComponent(AppComponent);
  });

  it('should create the app', () => {
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'usersData'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('App SearchMovies');
  });

  it('should render title', () => {
    const title = fixture.debugElement.query(By.css('h1.titleApp'));
    expect(title.context.title).toContain('App SearchMovies');
  });

  it('sholud have value form equal input', () => {
    const inputSeach = fixture.nativeElement as HTMLElement;
    expect(inputSeach.querySelector('input')?.placeholder).toEqual(
      'Write title movie'
    );
  });
});
