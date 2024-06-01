import { useNavigate } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useAppDispatch } from '@app/store/hooks';
import { addTodo } from '@entities/todoItem';
import { ITodo } from '@shared/types';
import { Button, Input, Textarea } from '@shared/ui';
import { normalizeStringLength } from '@shared/libs';
import { MAX_LENGTH, ValidationErrorsEnum } from '@shared/config';

import styles from './addTodo.module.scss';

export const AddTodo = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<ITodo>();

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<ITodo> = (data) => {
    if (normalizeStringLength(data.title)) {
      const newTodo = {
        ...data,
        title: data.title.trim(),
        description: data?.description?.trim(),
      };
      dispatch(addTodo(newTodo));
      navigate('/');
      reset();
    }
    setError('title', { message: ValidationErrorsEnum.REQUIRED });
  };

  const handleCancelBthClick = () => {
    navigate('/');
    reset();
  };

  return (
    <form className={styles.container} onSubmit={handleSubmit(onSubmit)}>
      <Input
        type="text"
        id="title"
        maxLength={MAX_LENGTH}
        placeholder="Введите название задачи"
        errorText={errors?.title?.message}
        {...register('title', { required: ValidationErrorsEnum.REQUIRED })}
      />
      <Textarea
        id="description"
        maxLength={MAX_LENGTH}
        placeholder="Введите описание задачи"
        {...register('description')}
      />
      <div className={styles.bthsContainer}>
        <Button onClick={handleCancelBthClick} name="Отмена" />
        <Button name="Сохранить" type="submit" />
      </div>
    </form>
  );
};
