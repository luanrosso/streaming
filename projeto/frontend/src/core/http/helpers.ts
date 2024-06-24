export function getToken(): string {
  const item: string | null = localStorage.getItem('auth-token');
  const token: string | undefined = item ? JSON.parse(item)['token'] : 'none';

  return token ?? 'none';
}
