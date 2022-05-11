import { Router } from "express";
import * as AlunoController from '../controllers/alunoController';

const router = Router();

router.post('/',                      AlunoController.create);
router.get('/:matricula',             AlunoController.read);
router.put('/:matricula',             AlunoController.update);
router.delete('/:matricula',          AlunoController.remove);
router.get('/:matricula/listarSalas', AlunoController.getAllClasses)


export default router;
