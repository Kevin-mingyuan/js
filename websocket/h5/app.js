//导入WebSocket
const WebSocket = require('ws');

// 引用Server类:
const WebSocketServer = WebSocket.Server;

//端口号 
const PORT = 3000;

// 实例化:
const wss = new WebSocketServer({
    port: PORT
});

wss.on('connection', function (ws) {
    ws.on('message', function (message) {
        console.log(message);
		ws.send(message,(err)=>{
			if(err){
				console.log(err);
			}
		});
    });
});
