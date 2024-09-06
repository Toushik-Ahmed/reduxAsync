'use client';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postTodo } from '../Store/Features/addSlice';
import { AppDispatch, RootState } from '../Store/store';
import { CardWithForm } from './customComponents/Card';

type Props = {};

const AddTodo = (props: Props) => {
  const dispatch = useDispatch<AppDispatch>();
  const todoData = useSelector((state: RootState) => state.addTodo.todos);

  const [task, setTask] = useState('');
  const handleSubmit = () => {
    const todo = task;
    dispatch(postTodo(todo));
  };

  return (
    <div className="bg-white">
      <p className="text-[#122620] text-xl font-bold mb-4">ToDo Maker</p>
      <CardWithForm setTask={setTask} todo={task} handleSubmit={handleSubmit} />
    </div>
  );
};

export default AddTodo;
