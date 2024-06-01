import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '@app/store/hooks';
import { TodoList } from '@widgets/todoList';
import { EmptyList } from '@widgets/emptyList';
import { selectTodos } from '@entities/todoItem';
import { Button } from '@shared/ui';

export const HomePage = () => {
  const { todos } = useAppSelector(selectTodos);
  const navigate = useNavigate();

  const handleClickBthNewTask = () => {
    navigate('/create');
  };

  return (
    <div>
      <h1>Список задач</h1>
      <Button name="Новая задача +" onClick={handleClickBthNewTask} />
      <TodoList />
      {todos.length === 0 && <EmptyList />}
    </div>
  );
};
