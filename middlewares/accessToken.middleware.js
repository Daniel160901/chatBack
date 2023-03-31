import fs from 'fs';
import jwt from "jsonwebtoken";



export class validateToken{

    static validateJWT(request, response, next) {
        const token = request.get('Authorization');
        let public_key =  null;

        if(process.env.MODE != 'dev') {
            public_key = fs.readFileSync(process.env.PUBLIC_KEY, 'utf8')
        }
        else {
            public_key = fs.readFileSync('./keys/public.pem', 'utf8')
        }

        try {
            console.log(token);
            let decoded = jwt.verify(token, public_key);
            console.log(decoded);
        } catch (e) {
            return response.status(403).json({
                ok: false,
                errors: [{message: 'Existe el siguiente problema con la cabecera: ' + e}]
            });
        }
        next();
    }

    static middlewareRunning(request, response, next) {
        console.log('middleware running');
        console.log(request.body);
        next();
    }

}