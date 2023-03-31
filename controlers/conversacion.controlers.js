import { request, response} from 'express';
import { ConversacionQueries } from "../queries/conversacion.query.js";
import { Payload } from "../helpers/payload.js";
import { ConversacionModel } from "../models/conversacion.model.js";

class ConversacionControlers {

    async create(req, res) {
        const body = req.body;
        const query = await ConversacionQueries.store(body);
        if (query.ok) {
            return res.status(200).json({ ok: true, data: query.data });
        } else {
            return res.status(403).json({ ok: false, message: 'Error on process request' });
        }
    }

    async findOne(req, res) {
        const body = req.body;
        const condition = body.condition;
        const query = await ConversacionQueries.findOne(condition);
        if(query.ok) {
            return res.status(200).json({ok: true, data: query.data});
        } else {
            return res.status(403).json({ok: false, message: 'Error on process request'});
        }
    }

    async findAll(req, res) {
        const body = req.body;
        const condition = body.condition;
        const query = await ConversacionQueries.findAll(condition);
        if(query.ok) {
            return res.status(200).json({ok: true, data: query.data});
        } else {
            return res.status(403).json({ok: false, message: 'Error on process request'});
        }
    }
}

export const conversacionController = new ConversacionControlers();