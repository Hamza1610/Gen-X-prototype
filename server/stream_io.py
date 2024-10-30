from fastapi import FastAPI, WebSocket

socket_app = FastAPI()

# websocket server
@socket_app.ws('/websocket')
async def accept_message(websocket: WebSocket):
    await websocket.accept()

    while True:
        data = await websocket.receive_text()
        await websocket.send_text(f' Message from {websocket} : {data}')