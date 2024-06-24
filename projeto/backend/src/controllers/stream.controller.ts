import { StreamRequestDTO } from "../domain/dto/stream-request.dto";
import StreamRepository from "../repositories/stream.repository";

class StreamController{
    
    async create(req: any, res: any){
        const data: StreamRequestDTO = req.body; 
        await StreamRepository.create(data);
        return res.sendStatus(201);
    }

    async update(req: any, res: any){
        const id: number = Number(req.params.id);
        const data: StreamRequestDTO = req.body;
        await StreamRepository.update(id, data);
        return res.sendStatus(200);
    }

    async delete(req: any, res: any){
        const id: number = Number(req.params.id);
        await StreamRepository.delete(id);
        res.status(200);
        return res.json({message: 'Deleted successfully'});
    }

    async findById(req: any, res: any){
        const id: number = Number(req.params.id);
        const stream = await StreamRepository.findById(id);
        if(stream == null){
            return res.sendStatus(404);
        }else{
            res.status(200);
            return res.json(stream);
        }
    }

    async findAll(req: any, res: any){
        const streams = await StreamRepository.findAll();
        res.status(200);
        return res.json(streams);
    }

    async search(req: any, res: any){
        const title = req.query.title;
        const streams = await StreamRepository.findByTitle(title);
        res.status(200);
        return res.json(streams);
    }
}

export default new StreamController();