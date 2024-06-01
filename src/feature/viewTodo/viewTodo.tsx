import { useNavigate, useParams } from 'react-router-dom';
import { useAppSelector } from '@app/store/hooks';
import { selectAllTodos } from '@entities/todoItem'; 
import { Button } from '@shared/ui';

import styles from './viewTodo.module.scss';

export const ViewTodo = () => {
  const { id } = useParams();

  const currentTodo = useAppSelector(selectAllTodos).find(
    (todo) => todo.id === id,
  );

  const navigate = useNavigate();

  const handleClickBthBack = () => {
    navigate('/');
  };

  const handleClickBthEdit = (id: string) => {
    navigate(`/edit/${id}`);
  };

  return (
    <div className={styles.container}>
      <span>
        <strong>Название задачи: </strong>
        <span className={styles.title}>{currentTodo?.title}</span>
      </span>
      {currentTodo?.description && (
        <span>
          <strong>Описание задачи: </strong>
          <span className={styles.description}>{currentTodo?.description}</span>
        </span>
      )}
      <span>
        <strong>Статус задачи: </strong>
        {currentTodo?.completed ? 'Выполнена' : 'Не выполнена'}
      </span>
      <div className={styles.bthsContainer}>
        <Button name="Назад" onClick={handleClickBthBack} />
        <Button
          name="Редактировать"
          onClick={() => id && handleClickBthEdit(id)}
        />
      </div>
    </div>
  );
};
