import { ERoutesPath } from '../../../../core/router/domain/enums/routes-path.enum';
import { DialogConfirm } from '../../../../shared/components/dialog-confirm';
import { Button, Stack, TextField } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { StreamResponseDTO } from '../../domain/dto/stream-response.dto';
import { StreamRepository } from '../../repositories/stream.repository';

export function StreamList() {
  const repository = new StreamRepository();
  const navigate = useNavigate();
  const [streams, setStreams] = useState<StreamResponseDTO[]>([]);
  const [search, setSearch] = useState<string>('');

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'Código', width: 150 },
    { field: 'title', headerName: 'Titulo', width: 250 },
    { field: 'description', headerName: 'Descrição', width: 250 },
    { field: 'date_open', headerName: 'Date de Abertura', width: 150 },
    { field: 'category_id', headerName: 'Código Categoria', width: 250 },
    { field: 'user_id', headerName: 'Código Streamer', width: 250 },
    {
      field: 'action',
      headerName: 'Ações',
      width: 250,
      sortable: false,
      renderCell: (params) => {
        const onEdit = () => {
          const currentRow = params.row;
          navigate(ERoutesPath.STREAMS + `/${currentRow.id}`);
        };

        const onGetId = () => {
          const currentRow = params.row;
          return currentRow.id;
        };

        return (
          <Stack
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 2,
              padding: '3px',
            }}
          >
            <Button variant='contained' color='warning' size='large' fullWidth onClick={onEdit}>
              Editar
            </Button>
            <DialogConfirm id={onGetId()} repository={repository} />
          </Stack>
        );
      },
    },
  ];

  async function handleSearch() {
    if (search === '') return;
    const data = await repository.search(search);
    setStreams(data);
  }

  useEffect(() => {
    (async () => {
      const data = await repository.findAll();
      setStreams(data);
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
      <div
        style={{ height: '6vh', width: '85vw', display: 'flex', justifyContent: 'right', gap: 10 }}
      >
        <TextField
          label='Pesquisa'
          variant='outlined'
          fullWidth
          onChange={(event) => {
            setSearch(event.target.value);
          }}
        />
        <Button variant='contained' size='large' color='info' onClick={handleSearch}>
          Pesquisar
        </Button>
        <Button
          variant='contained'
          size='large'
          color='success'
          onClick={() => navigate(ERoutesPath.STREAMS + '/novo')}
        >
          Cadastrar
        </Button>
      </div>
      <div style={{ height: '75vh', width: '85vw' }}>
        <DataGrid
          disableMultipleRowSelection={true}
          rows={streams}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
        />
      </div>
    </Stack>
  );
}
