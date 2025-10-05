export class UpdateConfigUC {
  execute(id: number, data: any) {
    // Simula actualización de configuración
    return { id, ...data };
  }
}
