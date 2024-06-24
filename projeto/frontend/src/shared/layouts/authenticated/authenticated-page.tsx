import { Stack } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { AuthenticatedHeader } from './components/header';
import { AuthenticatedFooter } from './components/footer';

export function AuthenticatedPage() {
  return (
    <Stack sx={{ width: '100vw', height: '100vh' }}>
      <AuthenticatedHeader />
      <Outlet />
      <AuthenticatedFooter />
    </Stack>
  );
}
