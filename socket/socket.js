import { Server } from 'socket.io';
export class SocketIo {
    startSocket(http) {
        this.io = new Server(http, { cors: {
                origin: '*', methods: ["GET", "POST"]
        }});
        console.log('Socket online');

        this.io.on('connection',  (socket) => {

            socket.on('login', async (user) => {
                console.log('new user logged: ', user);
                //const online = await UserController.findAll({ where: { status: 1 } });

                socket.broadcast.emit('loged', user);
            });

            socket.on('message', (data) => {
                console.log('New message', data);
                socket.broadcast.emit('enviarmensaje', data);
            });
        });
    }
}