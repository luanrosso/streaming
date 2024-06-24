export class Stream {
  id: number | string = 0;
  title: string = '';
  description: string = '';
  dateOpen: Date = new Date();
  categoryId: number = 0;
  userId: number = 0;

  constructor(partial: Partial<Stream>) {
    Object.assign(this, { ...partial });
  }
}
