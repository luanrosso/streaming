import { TextField } from '@mui/material';
import { useFormContext } from 'react-hook-form';
import { StreamCreateData } from '../domain/schemas/stream-create.schema';

export function StreamForm() {
  const { register, formState, watch} = useFormContext<StreamCreateData>();

  const title = watch('title');
  const description = watch('description');
  const date_open = watch('date_open');
  const category_id = watch('category_id');
  const user_id = watch('user_id');

  return (
    <>
      <TextField
        label='Titulo'
        variant='outlined'
        fullWidth
        value={title}
        {...register('title')}
        error={formState.errors.title ? true : false}
        helperText={formState.errors.title ? 'Campo Obrigatório' : ''}
      />
      <TextField
        label='Descrição'
        variant='outlined'
        fullWidth
        value={description}
        {...register('description')}
        error={formState.errors.description ? true : false}
        helperText={formState.errors.description ? 'Campo Obrigatório' : ''}
      />
      <TextField
        label='Date de Abertura'
        variant='outlined'
        fullWidth
        type='date'
        value={date_open}
        {...register('date_open')}
        error={formState.errors.date_open ? true : false}
        helperText={formState.errors.date_open ? 'Campo Obrigatório' : ''}
      />

      <TextField
        label='Codigo Categoria'
        variant='outlined'
        fullWidth
        value={category_id}
        {...register('category_id')}
        error={formState.errors.category_id ? true : false}
        helperText={formState.errors.category_id ? 'Campo Obrigatório' : ''}
      />

      <TextField
        label='Codigo Streamer'
        variant='outlined'
        fullWidth
        value={user_id}
        {...register('user_id')}
        error={formState.errors.user_id ? true : false}
        helperText={formState.errors.user_id ? 'Campo Obrigatório' : ''}
      />
    </>
  );
}
