import express from 'express'
import { UserInformation } from '../controllers/controller';
const userInstance = new UserInformation();
const router = express.Router()

router.use(express.json())
router.get('/users', userInstance.getAllInformation);
router.post('/addUser', userInstance.addNewUser);
router.get('/user/:id', userInstance.findByID);
router.delete('/deleteUser/:id', userInstance.deleteByID);
router.put('/updateUser/:id', userInstance.updateByID);
export default router;