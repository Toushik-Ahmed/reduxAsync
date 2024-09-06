import { List } from 'lucide-react';
import AddTodo from './components/AddTodo';
import Lists from './components/Lists';

type Props = {};

const page = (props: Props) => {
  return (
    <div className="flex justify-center items-center text-center h-[80vh]">
      <div>
        <AddTodo />
      <Lists/>
      </div>
    </div>
  );
};

export default page;
