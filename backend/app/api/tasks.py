from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.db.session import SessionLocal
from app.schemas.task import TaskOut
from app.services.task_service import list_tasks, complete_task

router = APIRouter(prefix="/tasks", tags=["Tasks"])

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.get("/employee/{employee_id}", response_model=list[TaskOut])
def get_tasks_for_employee(employee_id: int, db: Session = Depends(get_db)):
    return list_tasks(db, employee_id)

@router.post("/{task_id}/complete", response_model=TaskOut)
def complete(task_id: int, db: Session = Depends(get_db)):
    return complete_task(db, task_id)
