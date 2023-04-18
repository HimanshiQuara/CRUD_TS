import { Router } from 'express';
import { StudentController } from '../controllers/controllers';
const StudentInstance=new StudentController();
const router = Router();

router.get('/', StudentInstance.getAll);
router.get('/:id', StudentInstance.getById);
router.post('/', StudentInstance.create);
router.put('/:id', StudentInstance.updateById);
router.delete('/:id', StudentInstance.deleteById);

export default router;