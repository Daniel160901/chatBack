import { ConversacionModel } from "../models/conversacion.model.js";

class conversacionQueries {

    async store(mensaje) {
        try {
            const query = await ConversacionModel.create(mensaje);
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
            const query = await ConversacionModel.findAll({ where: condition} );
            if (query){
                return { ok: true, data: query};
            }
        } catch (e) {
            console.log('Error al ejecutar query', e);
            return {ok: false, data: null};
        }
    }

}

export const ConversacionQueries = new conversacionQueries();