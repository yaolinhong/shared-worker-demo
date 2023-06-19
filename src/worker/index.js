// chrome://inspect/#workers 查看worker日志
const portPool = [];
onconnect = function (e) {
    const port = e.ports[0];
    console.log('🚀 - port:', port,portPool,e)
    // 在connect时将 port添加到 po,rtPool中
    portPool.push(port);
    port.onmessage = (e) => {
        console.log(e.data);
        boardcast(e.data);
    }
}

function boardcast(message) {
    portPool.forEach(port => {
        console.log('🚀 - boardcast - message:', port, message)
        port.postMessage(message);
    })
}