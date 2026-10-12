from fastapi import FastAPI
from app.api import employees, tasks, documents, status
from app.db.init_db import init_db

app = FastAPI(title="Onboarding & Asset Management API")

init_db()

app.include_router(employees.router)
app.include_router(tasks.router)
app.include_router(documents.router)
app.include_router(status.router)
