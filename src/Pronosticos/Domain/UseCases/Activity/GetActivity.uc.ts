export class GetActivityUC {
  execute(id: number) {
    // Simula llamada a repositorio para obtener
    return { id, name: 'Actividad mock', status: 'active' };
  }
}
