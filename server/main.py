from fastapi import FastAPI
from app.api.routes import auth, ai, user

app = FastAPI()

# Include API routes
app.include_router(auth.router, prefix="/auth", tags=["Authentication"])
app.include_router(ai.router, prefix="/ai", tags=["AI Features"])
app.include_router(user.router, prefix="/users", tags=["User Management"])

@app.get("/")
def read_root():
    return {"message": "Welcome to Gen-X Prototype API!"}


