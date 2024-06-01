import { useNavigate } from 'react-router-dom';

import { ITodo } from '@shared/types';
import { Button } from '@shared/ui';
import { useAppDispatch } from '@app/store/hooks';
import { maxSymbolLimit } from '@shared/libs';
import { removeTodo, toggleTodoStatus } from '../model';

import classNames from 'classnames/bind';

import styles from './todoItem.module.scss';

const cn = classNames.bind(styles);

export const TodoItem = ({ id, title, completed }: ITodo) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleClickRemoveTodo = (id: string) => {
    dispatch(removeTodo({ id }));
  };

  const handleToggleCheckbox = (id: string) => {
    dispatch(toggleTodoStatus({ id }));
  };

  const handleClickViewTodo = (id: string) => {
    navigate(`/view/${id}`);
  };

  return (
    <div className={styles.container}>
      <div className={styles.todoContent}>
        <input
          type="checkbox"
          id="checkbox"
          checked={completed}
          onChange={() => handleToggleCheckbox(id)}
        />
        <h4 className={cn(completed && styles.titleDone)}>
          {maxSymbolLimit(title)}
        </h4>
      </div>
      <div className={styles.bthsContainer}>
        <Button name="Удалить" onClick={() => handleClickRemoveTodo(id)} />
        <Button name="Просмотр" onClick={() => handleClickViewTodo(id)} />
      </div>
    </div>
  );
};
