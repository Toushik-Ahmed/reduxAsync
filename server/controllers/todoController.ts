import { Request, Response } from 'express';
import Tasks from '../model/Todo';

export async function addTodo(req: Request, res: Response) {
  const { todo } = req.body;
  try {
    const createTodo = await Tasks.create({ todo });
    res.status(201).send(createTodo);
  } catch (error) {
    console.log(error);
  }
}

export async function getAllTodo(req: Request, res: Response) {
  try {
    const getTodos = await Tasks.find();
    res.status(201).json(getTodos);
  } catch (error) {
    console.log(error);
  }
}

export const deleteTodo = async (req: Request, res: Response) => {
  try {
    const {id }= req.body;
    const deleteTodo = await Tasks.deleteOne({ _id: id });
    res.status(201).send(deleteTodo);
  } catch (error) {
    console.log(error);
  }
};
