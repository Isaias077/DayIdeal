export class UpdateActivityUC {
  execute(id: number, data: any) {
    // Simula llamada a repositorio para actualizar
    return { id, ...data };
  }
}
