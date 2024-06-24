import client  from "../client/client";
import { StreamRequestDTO } from "../domain/dto/stream-request.dto";

class StreamRepository{
    async create(data: StreamRequestDTO){
        console.log(data)
        await client`insert into streams (title, description, date_open, user_id, category_id) values(${data.title},${data.description},${data.date_open},${data.user_id},${data.category_id})`;
    }

    async update(id: number, data: StreamRequestDTO){
        await client`update streams set title = ${data.title}, description = ${data.description}, date_open = ${data.date_open}, user_id = ${data.user_id} , category_id = ${data.category_id} where id = ${id}`;
    }

    async delete(id: number){
        await client`delete from streams where id = ${id}`;
    }

    async findAll(){
        const rows = await client`select * from streams`;
        return rows; 
    }

    async findById(id: number){
        const rows = await client`select * from streams where id = ${id}`;
        return rows[0]; 
    }

    async findByTitle(title: string){
        const rows = await client`select * from streams where title = ${title}`;
        return rows; 
    }
}

export default new StreamRepository();