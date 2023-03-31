import { UserModel } from '../models/user.model.js';

class userQueries {

    async store(user) {
        try {
            const query = await UserModel.create(user);
            if (query) {
                return { ok: true, data: query };
            }
        } catch (e) {
            console.log('error al ejecutar query', e);
            return { ok: false, data: null };
        }
    }

    async findAll(condition = {}) {
        try {
            const query = await UserModel.findAll({ where: condition} );
            if (query){
                return { ok: true, data: query};
            }
        } catch (e) {
            console.log('Error al ejecutar query', e);
            return {ok: false, data: null};
        }
    }

    async findOne(condition = {} ) {
        try {
            const query =  await UserModel.findOne({ where: condition} );
            if (query){
                return { ok: true, data: query};
            }
        } catch (e) {
            console.log('Error al ejecutar query', e);
            return {ok: false, data: null};
        }
    }

    async delete(condition = {}) {
        try {
            const query = await UserModel.destroy({where: condition});
            if (query){
                return {ok: true, data: query};
            }
        } catch (e) {
            console.log('Error al ejecutar el query delete/contactame', e);
            return { ok: false, data: null};
        }
    }

    async updateName(idd, fullnamee) {

        try{
            const query = await UserModel.update({fullname: fullnamee}, {where: { idUsuario: idd}});
            console.log('Intentanding upd');
            if (query){
                return { ok: true, data: query};
                console.log('Se hizo el update');
            }
        } catch (e) {
            console.log('Error al ejecutar el query update/user', e);
            return {ok:false, data: null};
        }
    }

    async updateUsername(idd, usernamee) {

        try{
            const query = await UserModel.update({username: usernamee}, {where: { idUsuario: idd}});
            console.log('Intentanding updUsername');
            if (query){
                return { ok: true, data: query};
                console.log('Se hizo el update');
            }
        } catch (e) {
            console.log('Error al ejecutar el query updateUsername', e);
            return {ok:false, data: null};
        }
    }

    async updatePassword(idd, passwordd) {

        try{
            const query = await UserModel.update({password: passwordd}, {where: { idUsuario: idd}});
            console.log('Intentanding updPassword');
            if (query){
                return { ok: true, data: query};
                console.log('Se hizo el update de password');
            }
        } catch (e) {
            console.log('Error al ejecutar el query updateUsername', e);
            return {ok:false, data: null};
        }
    }

    async estatus(idd, statuss){
        try{
            const query = await UserModel.update({status: statuss}, {where: { idUsuario: idd}});
            if (query){
                return { ok: true, data: query};
            }
        } catch (e) {
            console.log('Error al ejecutar el query updateUsername', e);
            return {ok:false, data: null};
        }
    }
}

export const UserQueries = new userQueries();