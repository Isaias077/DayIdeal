import { Request, Response } from 'express';
import { CreateConfigUC } from '../../Domain/UseCases/Config/CreateConfig.uc';
import { GetConfigUC } from '../../Domain/UseCases/Config/GetConfig.uc';
import { UpdateConfigUC } from '../../Domain/UseCases/Config/UpdateConfig.uc';
import { DeleteConfigUC } from '../../Domain/UseCases/Config/DeleteConfig.uc';

// Controlador CRUD para Config
export class ConfigController {
	// POST /configs
	createConfig = (req: Request, res: Response) => {
		try {
			const uc = new CreateConfigUC();
			const result = uc.execute(req.body);
			res.status(201).json(result);
		} catch (err: any) {
			res.status(500).json({ error: 'Error creando configuración', message: err.message });
		}
	};

	// GET /configs/:id
	getConfig = (req: Request, res: Response) => {
		try {
			const id = Number(req.params.id);
			const uc = new GetConfigUC();
			const result = uc.execute(id);
			if (!result) return res.status(404).json({ error: 'Configuración no encontrada' });
			res.json(result);
		} catch (err: any) {
			res.status(500).json({ error: 'Error obteniendo configuración', message: err.message });
		}
	};

	// PUT /configs/:id
	updateConfig = (req: Request, res: Response) => {
		try {
			const id = Number(req.params.id);
			const uc = new UpdateConfigUC();
			const result = uc.execute(id, req.body);
			res.json(result);
		} catch (err: any) {
			res.status(500).json({ error: 'Error actualizando configuración', message: err.message });
		}
	};

	// DELETE /configs/:id
	deleteConfig = (req: Request, res: Response) => {
		try {
			const id = Number(req.params.id);
			const uc = new DeleteConfigUC();
			const result = uc.execute(id);
			res.json(result);
		} catch (err: any) {
			res.status(500).json({ error: 'Error eliminando configuración', message: err.message });
		}
	};
}

