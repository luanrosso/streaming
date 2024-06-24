import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export function AuthenticatedFooter() {
  return (
    <Box sx={{ position: 'absolute', width: '100%', bottom: 0 }}>
      <AppBar position='static'>
        <Toolbar sx={{ textAlign: 'center' }}>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            © Streams Crud 2024 Todos os direitos reservados
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
