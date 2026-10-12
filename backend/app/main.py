from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api import employees, tasks, documents, status
from app.db.session import engine, Base, SessionLocal
from app.services.employee_service import create_test_employees

app = FastAPI(title="Cloud Onboarding & Asset Management System")

# CORS für Frontend erlauben
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # später einschränken
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Datenbanktabellen erstellen + Testdaten einfügen
@app.on_event("startup")
def startup_event():
    Base.metadata.create_all(bind=engine)
    db = SessionLocal()
    create_test_employees(db)
    db.close()

# API‑Router registrieren
app.include_router(status.router)
app.include_router(employees.router)
app.include_router(tasks.router)
app.include_router(documents.router)
