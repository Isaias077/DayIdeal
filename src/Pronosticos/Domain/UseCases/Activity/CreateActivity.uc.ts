export class CreateActivityUC {
  execute(data: any) {
    // Simula llamada a repositorio para crear
    return { id: Date.now(), ...data };
  }
}
