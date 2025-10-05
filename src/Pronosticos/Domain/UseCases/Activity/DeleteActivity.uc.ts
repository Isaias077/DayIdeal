export class DeleteActivityUC {
  execute(id: number) {
    // Simula llamada a repositorio para borrar
    return { id, deleted: true };
  }
}
