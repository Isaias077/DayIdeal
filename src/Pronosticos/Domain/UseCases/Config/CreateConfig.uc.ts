export class CreateConfigUC {
  execute(data: any) {
    // Simula creación de una configuración
    return { id: Date.now(), ...data };
  }
}
