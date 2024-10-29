from fastapi import FastAPI
from pydantic import BaseModel
from typing import Dict, List, Tuple
import uvicorn


app = FastAPI()

@app.get("/")
async def root():
    return {"message": "Hello, FastAPI!"}


if __name__ == "__main__":
    uvicorn.run("main:app", port= 3001, reload = True)