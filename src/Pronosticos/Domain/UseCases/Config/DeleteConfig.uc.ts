export class DeleteConfigUC {
  execute(id: number) {
    // Simula borrado de configuración
    return { id, deleted: true };
  }
}
