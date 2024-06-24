import { ERoutesPath } from '../../../../core/router/domain/enums/routes-path.enum';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Paper, Stack, Typography } from '@mui/material';
import { FormProvider, useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { StreamForm } from '../../components/stream-form';
import { StreamCreateData, StreamCreateSchema } from '../../domain/schemas/stream-create.schema';
import { StreamRepository } from '../../repositories/stream.repository';
import { useEffect } from 'react';

export function StreamUpdate() {
  const navigate = useNavigate();
  const { id } = useParams();
  const repository = new StreamRepository();

  const methods = useForm<StreamCreateData>({
    defaultValues: {
      title: '',
      description: '',
      date_open: new Date(),
      category_id: 0,
      user_id: 0,
    },
    resolver: zodResolver(StreamCreateSchema),
  });

  async function submit(data: StreamCreateData) {
    try {
      const dto = data;
      await repository.update(id!, dto);

      toast.success(`Registrado com sucesso!`, {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: 'colored',
      });
      navigate(ERoutesPath.STREAMS);
    } catch (error) {
      toast.error(`${error}`, {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: 'colored',
      });
    }
  }

  useEffect(() => {
    (async () => {
      const stream = await repository.findOne(id!);
      if (stream) {
        methods.reset({
          ...stream,
        });
      } else {
        toast.error('Item não encontrado!', {
          position: 'top-center',
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
          theme: 'colored',
        });
        navigate(ERoutesPath.STREAMS);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Stack
      sx={{
        display: 'flex',
        justifyContent: 'start',
        alignItems: 'center',
        height: '100%',
        width: '100%',
        marginTop: '30px',
        gap: 1,
      }}
    >
      <div style={{ height: '5vh', width: '85vw', display: 'flex', justifyContent: 'right' }}>
        <Button
          variant='contained'
          size='large'
          onClick={() => navigate(ERoutesPath.STREAMS)}
        >
          Voltar
        </Button>
      </div>
      <Paper
        elevation={3}
        component='form'
        onSubmit={methods.handleSubmit(submit)}
        sx={{
          width: '40rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'start',
          alignItems: 'center',
          padding: '40px',
          gap: 5,
        }}
      >
        <Typography component='h2' variant='h3'>
          Cadastro
        </Typography>
        <FormProvider {...methods}>
          <StreamForm />
        </FormProvider>
        <Button fullWidth variant='contained' color='success' size='large' type='submit'>
          Salvar
        </Button>
      </Paper>
    </Stack>
  );
}
