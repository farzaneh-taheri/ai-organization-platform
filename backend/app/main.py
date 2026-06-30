from fastapi import FastAPI

from app.database import models
from app.api.auth import router as auth_router

app = FastAPI(
    title="AI Organization Platform API"
)

app.include_router(auth_router)


@app.get("/health")
def health():
    return {"status": "ok"}