// Importamos los decoradores y la funcionalidad de señales reactivas nativas de Angular 21
import { Injectable, signal, Signal } from '@angular/core';
// Importamos el contrato y los datos subiendo tres niveles exactos en el árbol de carpetas
import { Project, PROJECTS_DATA } from '../../../assets/data/portfolio.data';

/**
 * Servicio inyectable global (Singleton). Se encarga de proveer los datos de forma limpia.
 * Cumple con el Principio de Responsabilidad Única (SRP) al aislar los datos de la vista.
 */
@Injectable({
  providedIn: 'root' // Permite que el servicio se auto-inyecte sin necesidad de módulos clásicos
})
export class ProjectService {
  
  /**
   * Señal interna privada de lectura y escritura que encapsula los datos originales.
   * El uso de 'private' impide de forma proactiva que las vistas alteren el estado por accidente.
   */
  private readonly _projects = signal<Project[]>(PROJECTS_DATA);

  /**
   * Exposición pública de los proyectos transformada en una señal estricta de solo lectura.
   * Los componentes del MVP se suscribirán de forma reactiva y automática a este flujo.
   */
  public readonly projects: Signal<Project[]> = this._projects.asReadonly();
}