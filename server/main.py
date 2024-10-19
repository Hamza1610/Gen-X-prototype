from fastapi import FastAPI
from pydantic import BaseModel

class SignUp(BaseModel):
    usename: str
    email: str
    password: str | int = None

    
app = FastAPI()

@app.get("/")
async def root():
    return {"message": "Hello, FastAPI!"}

@app.get("/{id}")
def test_custom_route(id):
    return { 'id': id, 'message': f'Welcome, Mr {id}' }

@app.post('/test/{id}')
async def test_var_with_query(id, name):
    return { 'message': 'Found {id} with {name}' }

@app.post('/sign-up')
async def sign_up(form_data: SignUp):
    return { name: form_data.username ,email: form_data.email, password: form_data.password }
