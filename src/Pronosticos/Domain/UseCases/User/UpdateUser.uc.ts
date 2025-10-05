export class UpdateUserUC {
  execute(id: number, data: any) {
    // Simula llamada a repositorio para actualizar usuario
    return { id, ...data };
  }
}
