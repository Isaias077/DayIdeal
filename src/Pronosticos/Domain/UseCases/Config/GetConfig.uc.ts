export class GetConfigUC {
  execute(id: number) {
    // Simula obtención de configuración
    return { id, key: 'app.mode', value: 'production' };
  }
}
