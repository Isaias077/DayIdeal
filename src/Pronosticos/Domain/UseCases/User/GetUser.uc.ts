export class GetUserUC {
  execute(id: number) {
    // Simula llamada a repositorio para obtener usuario
    return { id, name: 'Usuario mock', email: 'mock@example.com' };
  }
}
