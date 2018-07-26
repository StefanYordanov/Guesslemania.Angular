import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchCardDetailsComponent } from './match-card-details.component';

describe('MatchCardDetailsComponent', () => {
    let component: MatchCardDetailsComponent;
    let fixture: ComponentFixture<MatchCardDetailsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [MatchCardDetailsComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MatchCardDetailsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
