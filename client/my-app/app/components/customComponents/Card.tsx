import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';

type Props = {
  todo: string;
  setTask: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: () => void;
};

export function CardWithForm({ setTask, handleSubmit, todo }: Props) {
  return (
    <Card className="w-[350px] bg-[#B1D8B7]">
      <CardHeader>
        <CardTitle className="text-center">Add Todo</CardTitle>
      </CardHeader>
      <CardContent>
        <form>
          <div className="flex w-full items-center gap-4">
            <Input
              id="name"
              placeholder="Add a  task"
              value={todo}
              onChange={(e) => setTask(e.target.value)}
            />
            <Button
              onClick={(e) => {
                handleSubmit(), e.preventDefault();
              }}
              variant="outline"
            >
              Add
            </Button>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between"></CardFooter>
    </Card>
  );
}
