import { TodoItem } from '@entities/todoItem';
import { useAppSelector } from '@app/store/hooks';
import { selectAllTodos } from '@entities/todoItem';
import { ITodo } from '@shared/types';

import styles from './todoList.module.scss';

export const TodoList = () => {
  const todos = useAppSelector(selectAllTodos);

  return (
    <ul className={styles.list}>
      {todos.map((todo: ITodo) => {
        return <TodoItem key={todo.id} {...todo} />;
      })}
    </ul>
  );
};
