export class CreateUserUC {
  execute(data: any) {
    // Simula llamada a repositorio para crear usuario
    return { id: Date.now(), ...data };
  }
}
