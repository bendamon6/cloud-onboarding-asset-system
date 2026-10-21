from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from contextlib import asynccontextmanager

from app.db.session import engine, SessionLocal
from app.db.base import Base

from app.routers import employees, tasks, dashboard


@asynccontextmanager
async def lifespan(app: FastAPI):
    # Startup
    Base.metadata.create_all(bind=engine)

    # Optional: Testdaten laden
    # db = SessionLocal()
    # create_test_employees(db)
    # db.close()

    yield

    # Shutdown (falls ich später Cleanup brauche)
    # z.B. DB-Verbindungen schließen, Logs flushen etc.


app = FastAPI(
    title="Cloud Onboarding & Asset Management System",
    lifespan=lifespan
)


@app.get("/")
def root():
    return {"status": "ok", "message": "Cloud Onboarding Asset System API läuft"}


# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Router registrieren
app.include_router(employees.router)
app.include_router(tasks.router)
app.include_router(dashboard.router)
