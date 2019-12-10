import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {FormsModule} from '@angular/forms';
import {LoginComponent} from './login.component';

describe('InloggenComponent', () => {
    let component: LoginComponent;
    let fixture: ComponentFixture<LoginComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [LoginComponent],
          imports: [
            FormsModule,
          ],
        })
            .compileComponents();

      // create component and test fixture
        fixture = TestBed.createComponent(LoginComponent);

      // get test component from the fixture
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    // beforeEach(() => {
    //     fixture = TestBed.createComponent(InloggenComponent);
    //     component = fixture.componentInstance;
    //     fixture.detectChanges();
    // });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
