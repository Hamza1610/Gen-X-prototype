from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import Dict, List, Tuple
import uvicorn
from stream_io import socket_app

app = FastAPI()

origins = ['http://locahhost:3000']
# Middleware
app.add_middleware(CORSMiddleware, allow_origins=origins, allow_credentials = True, allow_methods= ["*"], allow_headers=["*"])
app.mount('/websocket', socket_app)

@app.get("/")
async def root():
    return {"message": "Hello, FastAPI!"}


if __name__ == "__main__":
    uvicorn.run("main:app", port= 3001, reload = True)