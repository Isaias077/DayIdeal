export class DeleteUserUC {
  execute(id: number) {
    // Simula llamada a repositorio para borrar usuario
    return { id, deleted: true };
  }
}
