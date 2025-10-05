
import { Request, Response } from 'express';
import { CreateUserUC } from '../../Domain/UseCases/User/CreateUser.uc';
import { GetUserUC } from '../../Domain/UseCases/User/GetUser.uc';
import { UpdateUserUC } from '../../Domain/UseCases/User/UpdateUser.uc';
import { DeleteUserUC } from '../../Domain/UseCases/User/DeleteUser.uc';

// Controlador CRUD para User
export class UsersController {
	// POST /users
	createUser = (req: Request, res: Response) => {
		try {
			const uc = new CreateUserUC();
			const result = uc.execute(req.body);
			res.status(201).json(result);
		} catch (err: any) {
			res.status(500).json({ error: 'Error creando usuario', message: err.message });
		}
	};

	// GET /users/:id
	getUser = (req: Request, res: Response) => {
		try {
			const id = Number(req.params.id);
			const uc = new GetUserUC();
			const result = uc.execute(id);
			if (!result) return res.status(404).json({ error: 'Usuario no encontrado' });
			res.json(result);
		} catch (err: any) {
			res.status(500).json({ error: 'Error obteniendo usuario', message: err.message });
		}
	};

	// PUT /users/:id
	updateUser = (req: Request, res: Response) => {
		try {
			const id = Number(req.params.id);
			const uc = new UpdateUserUC();
			const result = uc.execute(id, req.body);
			res.json(result);
		} catch (err: any) {
			res.status(500).json({ error: 'Error actualizando usuario', message: err.message });
		}
	};

	// DELETE /users/:id
	deleteUser = (req: Request, res: Response) => {
		try {
			const id = Number(req.params.id);
			const uc = new DeleteUserUC();
			const result = uc.execute(id);
			res.json(result);
		} catch (err: any) {
			res.status(500).json({ error: 'Error eliminando usuario', message: err.message });
		}
	};
}
