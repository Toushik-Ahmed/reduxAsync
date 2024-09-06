import { Router } from 'express';
import { addTodo,  deleteTodo,  getAllTodo } from './controllers/todoController';
export const router = Router();
router.post('/', addTodo);
router.get('/getTodos', getAllTodo);
router.delete('/delete', deleteTodo);
