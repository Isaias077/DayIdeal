import { Router, Request, Response } from 'express';
import crudRouter from './crud';

const router = Router();

interface HealthResponse {
  status: 'OK';
  timestamp: string;
  uptime: number;
  message: string;
}

// Ruta de salud del API (Health Check)
router.get('/health', (req: Request, res: Response<HealthResponse>) => {
  res.json({
    status: 'OK',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    message: 'API funcionando correctamente'
  });
});

// Montar rutas CRUD
router.use(crudRouter);

export default router;
