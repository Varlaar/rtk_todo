import { useNavigate, useParams } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';

import { useAppDispatch, useAppSelector } from '@app/store/hooks';
import { selectAllTodos, editTodo } from '@entities/todoItem'; 
import { MAX_LENGTH, ValidationErrorsEnum } from '@shared/config';
import { normalizeStringLength } from '@shared/libs';
import { ITodo } from '@shared/types';
import { Button, Input, Textarea } from '@shared/ui';

import styles from './editTodo.module.scss';

export const EditTodo = () => {
  const { id } = useParams();

  const currentTodo = useAppSelector(selectAllTodos).find(
    (todo) => todo.id === id,
  );

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
    setError,
    watch,
  } = useForm<ITodo>({
    defaultValues: {
      title: currentTodo?.title,
      description: currentTodo?.description,
      completed: currentTodo?.completed,
    },
  });

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<ITodo> = (data) => {
    if (id && normalizeStringLength(data.title)) {
      const newTodo = {
        ...data,
        id: id,
        title: data.title.trim(),
        description: data?.description?.trim(),
      };
      dispatch(editTodo(newTodo));
      navigate(`/view/${id}`);
      reset();
    }
    setError('title', { message: ValidationErrorsEnum.REQUIRED });
  };

  const handleCancelBthClick = () => {
    navigate(`/view/${id}`);
    reset();
  };

  const isTodoCompleted = watch('completed');

  return (
    <form className={styles.container} onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="title" className={styles.titleLabel}>
        Название задачи:
      </label>
      <Input
        type="text"
        id="title"
        placeholder="Введите название задачи"
        maxLength={MAX_LENGTH}
        errorText={errors?.title?.message}
        {...register('title', { required: ValidationErrorsEnum.REQUIRED })}
      />
      <label htmlFor="description" className={styles.descriptionLabel}>
        Описание задачи:
      </label>
      <Textarea
        id="description"
        placeholder="Введите описание задачи"
        maxLength={MAX_LENGTH}
        {...register('description')}
      />
      <div className={styles.todoStatus}>
        <h4>Статус задачи: </h4>
        <div className={styles.editTodoStatus}>
          <input type="checkbox" id="checkbox" {...register('completed')} />
          <label htmlFor="checkbox">
            {isTodoCompleted ? 'Выполнена' : 'Не выполнена'}
          </label>
        </div>
      </div>
      <div className={styles.bthsContainer}>
        <Button onClick={handleCancelBthClick} name="Отмена" />
        <Button name="Сохранить" type="submit" />
      </div>
    </form>
  );
};
