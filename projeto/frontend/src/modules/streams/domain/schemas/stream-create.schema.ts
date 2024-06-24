import { z } from 'zod';

export const StreamCreateSchema = z.object({
  title: z.string().min(1, 'Campo obrigatório!').trim(),
  description: z.string().min(1, 'Campo obrigatório!').trim(),
  date_open: z.coerce.date({ message: 'Campo obrigatório!' }),
  category_id: z.coerce.number().min(1, 'Campo obrigatório!'),
  user_id: z.coerce.number().min(1, 'Campo obrigatório!'),
});

export type StreamCreateData = z.infer<typeof StreamCreateSchema>;
