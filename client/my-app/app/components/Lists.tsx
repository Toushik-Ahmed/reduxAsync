'use client';
import { Button } from '@/components/ui/button';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo, getTodos } from '../Store/Features/addSlice';
import { AppDispatch, RootState } from '../Store/store';

type Props = {};

const Lists = (props: Props) => {


  const dispatch = useDispatch<AppDispatch>();
  const handleDelete = (id?: string) => {
    if (id) dispatch(deleteTodo(id));
  };

  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);
  const lists = useSelector((state: RootState) => {
    return state.addTodo.todos;
  });

  console.log(lists);
  return (
    <div className="bg-[#FFC2C7]">
      <div>
        <p className="p-4"> Lists of Tasks:</p>

        {lists.map((item) => (
          <div
            key={item._id}
            className="flex justify-between items-center gap-x-4 mt-2 p-4"
          >
            <p>* {item.todo}</p>
            <div className="flex gap-x-2">
              <Button>Edit</Button>
              <Button onClick={() => handleDelete(item._id)}>Delete</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Lists;
