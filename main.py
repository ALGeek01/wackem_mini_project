"""Serve the Wackem static game with FastAPI + Uvicorn."""

from pathlib import Path

from fastapi import FastAPI
from fastapi.responses import FileResponse
from fastapi.staticfiles import StaticFiles

ROOT = Path(__file__).resolve().parent

app = FastAPI(title="Wackem")


@app.get("/")
async def index() -> FileResponse:
    return FileResponse(ROOT / "index.html")


@app.get("/styles.css")
async def styles() -> FileResponse:
    return FileResponse(ROOT / "styles.css", media_type="text/css")


@app.get("/script.js")
async def script() -> FileResponse:
    return FileResponse(ROOT / "script.js", media_type="application/javascript")


app.mount(
    "/assets",
    StaticFiles(directory=str(ROOT / "assets")),
    name="assets",
)


if __name__ == "__main__":
    import uvicorn

    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
