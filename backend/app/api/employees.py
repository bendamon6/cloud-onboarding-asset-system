from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.db.session import SessionLocal
from app.schemas.employee import EmployeeCreate, EmployeeOut
from app.services.employee_service import (
    create_employee,
    list_employees,
    remove_duplicate_employees
)

router = APIRouter(prefix="/employees", tags=["Employees"])

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.post("/", response_model=EmployeeOut)
def create(data: EmployeeCreate, db: Session = Depends(get_db)):
    return create_employee(db, data)

@router.get("/", response_model=list[EmployeeOut])
def get_all(db: Session = Depends(get_db)):
    return list_employees(db)

# Da Prefix schon angelegt ist ->hier unten nicht doppelt schreiben
@router.delete("/cleanup")
def cleanup(db: Session = Depends(get_db)):
    remove_duplicate_employees(db)
    return {"status": "cleanup complete"}

