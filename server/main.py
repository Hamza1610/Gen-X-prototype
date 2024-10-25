from fastapi import FastAPI
from pydantic import BaseModel
from typing import Dict, List, Tuple
import uvicorn

class SignUp(BaseModel):
    usename: str
    email: str
    password: str | int = None


_my_list: List[float] = [1, "2", 3.34]
_my_dict: Dict[int, float] = { 1: 'Ahmad', 'school': 'ABU' }
_tuple: Tuple = (3.4, 4.2)

app = FastAPI()

@app.get("/")
async def root():
    return {"message": "Hello, FastAPI!"}

@app.get("/{id}")
def test_custom_route(id):

    print(_my_list)
    print(_my_dict)
    print(_tuple)

    return { 'id': id, 'message': f'Welcome, Mr {id}' }

@app.post('/test/{id}')
async def test_var_with_query(id, name):
    return { 'message': 'Found {id} with {name}' }

@app.post('/sign-up')
async def sign_up(form_data: SignUp):
    return { name: form_data.username ,email: form_data.email, password: form_data.password }


if __name__ == "__main__":
    uvicorn.run("main:app", port= 3001, reload = True)