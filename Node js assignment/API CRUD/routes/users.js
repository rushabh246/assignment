import express from 'express';
import { createUser,getUsers,getUser,deleteUser,updateUser} from '../controllers/user1.js';
let users = [];
const router = express.Router();

router.get('/', getUsers);

router.post('/',createUser );

router.get('/:id', getUser);

router.delete('/:id', deleteUser);

router.patch('/:id', updateUser);

export default router;
