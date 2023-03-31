import express from 'express';
import { userController } from '../controlers/user.controlers.js';
import { validateToken } from "../middlewares/accessToken.middleware.js";
import {conversacionController} from "../controlers/conversacion.controlers.js";

export class Routes {

    /**
     * @param app
     */

    Routes(app=express.application) {
        app.get('/', (req, res) => {
            res.send('Hola mundo');
        });

        app.post('/data', (req, res)=>{
            const body = req.body;
            return res.status(200).json({ok: true, message: 'data recieved'});
        });



        //Métodos FIND
    //Encontrar usuario individual
        app.route('/find_user', userController.findOne).post(userController.findOne);
    //Encontrar usuarios todos
        app.route('/find_userAll', userController.findAll).post([], userController.findAll);
    //Encontrar todos los mensajes
        app.route('/all_messages', conversacionController.findAll).post([], conversacionController.findAll);



    //Hacer login
        app.post('/login', userController.login);

        //Métodos CREATE
    //Enviar usuario
        app.post('/user_create', userController.create);
        app.post('/newMessage', conversacionController.create);

        //Métodos DELETE
    //Eliminar user
        app.route('/user_delete', userController.deleteOne).post([validateToken.validateJWT], userController.deleteOne);

        //Métodos Update
    //Update user
        app.route('/user_update', userController.updateFullname).post([], userController.updateFullname);
        app.route('/username_update', userController.updateUsername).post([], userController.updateUsername);
        app.route('/password_update', userController.updatePassword).post([], userController.updatePassword);

    //Metodo cambiar estado
        app.route('/status', userController.status).post([], userController.status);
    }



}
