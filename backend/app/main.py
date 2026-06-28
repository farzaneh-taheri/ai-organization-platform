from fastapi import FastAPI

app = FastAPI(
    title="AI Organization Platform API"
)

@app.get("/health")
def health():
    return {"status": "ok"}