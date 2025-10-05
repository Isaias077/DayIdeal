
import { Request, Response } from 'express';
import { CreateActivityUC } from '../../Domain/UseCases/Activity/CreateActivity.uc';
import { GetActivityUC } from '../../Domain/UseCases/Activity/GetActivity.uc';
import { UpdateActivityUC } from '../../Domain/UseCases/Activity/UpdateActivity.uc';
import { DeleteActivityUC } from '../../Domain/UseCases/Activity/DeleteActivity.uc';

// Controlador CRUD
export class ActivitiesController {
	// POST /activities
	createActivity = (req: Request, res: Response) => {
		try {
			const uc = new CreateActivityUC();
			const result = uc.execute(req.body);
			res.status(201).json(result);
		} catch (err: any) {
			res.status(500).json({ error: 'Error creando actividad', message: err.message });
		}
	};

	// GET /activities/:id
	getActivity = (req: Request, res: Response) => {
		try {
			const id = Number(req.params.id);
			const uc = new GetActivityUC();
			const result = uc.execute(id);
			if (!result) return res.status(404).json({ error: 'Actividad no encontrada' });
			res.json(result);
		} catch (err: any) {
			res.status(500).json({ error: 'Error obteniendo actividad', message: err.message });
		}
	};

	// PUT /activities/:id
	updateActivity = (req: Request, res: Response) => {
		try {
			const id = Number(req.params.id);
			const uc = new UpdateActivityUC();
			const result = uc.execute(id, req.body);
			res.json(result);
		} catch (err: any) {
			res.status(500).json({ error: 'Error actualizando actividad', message: err.message });
		}
	};

	// DELETE /activities/:id
	deleteActivity = (req: Request, res: Response) => {
		try {
			const id = Number(req.params.id);
			const uc = new DeleteActivityUC();
			const result = uc.execute(id);
			res.json(result);
		} catch (err: any) {
			res.status(500).json({ error: 'Error eliminando actividad', message: err.message });
		}
	};
}
