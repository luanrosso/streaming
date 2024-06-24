import { Repository } from '../../../core/http/repository';
import { StreamRequestDTO } from '../domain/dto/stream-request.dto';
import { StreamResponseDTO } from '../domain/dto/stream-response.dto';

export class StreamRepository extends Repository {
  static instance: StreamRepository;

  constructor() {
    super('streams');

    if (StreamRepository.instance) {
      return StreamRepository.instance;
    }

    StreamRepository.instance = this;
  }

  public async findAll(): Promise<StreamResponseDTO[]> {
    const { data, status } = await this.http.get<StreamResponseDTO[]>('');
    if (this.isOK(status)) {
      return data;
    }

    throw new Error('Aconteceu algum erro!');
  }

  public async findOne(id: string | number): Promise<StreamResponseDTO> {
    const { data, status } = await this.http.get<StreamResponseDTO>(`/${id}`);
    if (this.isOK(status)) {
      return data;
    }

    throw new Error('Aconteceu algum erro!');
  }

  public async search(search: string): Promise<StreamResponseDTO[]> {
    const { data, status } = await this.http.get<StreamResponseDTO[]>(`/search/?title=${search}`);
    if (this.isOK(status)) {
      return data;
    }

    throw new Error('Aconteceu algum erro!');
  }

  public async create(dto: StreamRequestDTO): Promise<StreamResponseDTO> {
    const { data, status } = await this.http.post<StreamResponseDTO, StreamRequestDTO>('', dto);
    if (this.isOK(status)) {
      return data;
    }

    throw new Error('Aconteceu algum erro!');
  }

  public async update(id: string | number, dto: StreamRequestDTO): Promise<StreamResponseDTO> {
    const { data, status } = await this.http.put<StreamResponseDTO, StreamRequestDTO>(
      `/${id}`,
      dto,
    );
    if (this.isOK(status)) {
      return data;
    }

    throw new Error('Aconteceu algum erro!');
  }

  public async delete(id: string | number): Promise<StreamResponseDTO> {
    const { data, status } = await this.http.delete<StreamResponseDTO>(`/${id}`);
    if (this.isOK(status)) {
      return data;
    }

    throw new Error('Aconteceu algum erro!');
  }
}
