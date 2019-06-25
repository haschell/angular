import { MedicoComponent } from "./medico.component";
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { MedicosService } from "../../intermedio/espias/medicos.service";
import { HttpClient, HttpClientModule } from '@angular/common/http';

describe("Medico component", () => {
  let component: MedicoComponent;
  let fixture: ComponentFixture<MedicoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MedicoComponent],
      providers: [MedicosService],
      imports: [HttpClientModule]
    });

    fixture = TestBed.createComponent(MedicoComponent);
    component = fixture.componentInstance;
  });

  it('Debe crearse el componente', () => {
        expect(component).toBeTruthy();
  });

  it('Debe devolver el nombre del medico', () => {
        const nombre = 'Juan';
        const res = component.saludarMedico(nombre);
        expect(res).toContain(nombre);
  });
});
