import { request, response} from 'express';
import {UserQueries} from "../queries/user.query.js";
import { Payload } from "../helpers/payload.js";
import {UserModel} from "../models/user.model.js";

 export class UserController {

    static payload = new Payload();

    async create(req, res) {
        const body = req.body;
        const query = await UserQueries.store(body);
        if (query.ok) {
            return res.status(200).json({ ok: true, data: query.data });
        } else {
            return res.status(403).json({ ok: false, message: 'Error on process request' });
        }
    }

    async findOne(req, res) {
        const body = req.body;
        const condition = body.condition;
        const query = await UserQueries.findOne(condition);
        if(query.ok) {
            return res.status(200).json({ok: true, data: query.data});
        } else {
            return res.status(403).json({ok: false, message: 'Error on process request'});
        }
    }

    async findAll(req, res) {
        const body = req.body;
        const condition = body.condition;
        const query = await UserQueries.findAll(condition);
        if(query.ok) {
            return res.status(200).json({ok: true, data: query.data});
        } else {
            return res.status(403).json({ok: false, message: 'Error on process request'});
        }
    }


    async login(req, res){
        const body = req.body;
        console.log(body);

        const query = await UserQueries.findOne({
            username: body.username,
            password: body.password
        });

        if (query.ok) {
            try {
                const token = UserController.payload.createToken(query.data);
                return res.status(200).send({
                    ok: true,
                    token: token,
                    data: query.data
                });
            } catch (e) {
                return res.status(400).send({
                    ok: false,
                    data: null
                });
            }
        }
    }

    async deleteOne(req, res) {
        const body = req.body;
        const query = await UserQueries.delete({
            idUsuario: body.idUsuario
        });
        if (query.ok) {
            return res.status(200).json({ok: true, data: query.data});
        } else {
            return res.status(403).json({ok: false, message: 'Error on process request'});
        }
    }

    async updateFullname(req, res) {
        console.log('Se intentará el update');

        const body = req.body;

        const id = body.idPersona;
        const updFullname = body.fullname;

        const query = await UserQueries.updateName(id, updFullname);
        if (query.ok) {
            console.log('Se logró raza');
            return res.status(200).json({ok: true, data: query.data});
        } else {
            return res.status(403).json({ok: false, message: 'Error on process request'});
        }

    }

    async updateUsername(req, res) {
        console.log('Se intentará el update del Username');

        const body = req.body;

        const id = body.idPersona;
        const updUsername = body.username;

        const query = await UserQueries.updateUsername(id, updUsername);
        if (query.ok) {
            console.log('Se logró raza');
            return res.status(200).json({ok: true, data: query.data});
        } else {
            return res.status(403).json({ok: false, message: 'Error on process request'});
        }

    }

    async updatePassword(req, res) {
        console.log('Se intentará el update del password');

        const body = req.body;

        const id = body.idPersona;
        const updPassword = body.ps1;

        const query = await UserQueries.updatePassword(id, updPassword);
        if (query.ok) {
            console.log('Se logró raza el updPass');
            return res.status(200).json({ok: true, data: query.data});
        } else {
            return res.status(403).json({ok: false, message: 'Error on process request'});
        }
    }

    async status(req, res) {

        const body = req.body;

        const id = body.idPersona;
        const status = body.status;

        const query = await UserQueries.estatus(id, status);
        if (query.ok) {
            return res.status(200).json({ok: true, data: query.data});
        } else {
            return res.status(403).json({ok: false, message: 'Error on process request'});
        }

    }
}

export const userController = new UserController();