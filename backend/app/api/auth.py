from fastapi import APIRouter

from app.schemas.auth import UserRegister

router = APIRouter(
    prefix="/auth",
    tags=["Authentication"],
)


@router.post("/register")
def register(user: UserRegister):
    return {
        "message": "Register endpoint is working",
        "user": user
    }