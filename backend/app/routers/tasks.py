from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.schemas.task import TaskOut, TaskCreate
from app.services.task_service import list_tasks, complete_task, create_task
from app.db import get_db
from app.models.task import Task   # ← WICHTIG

router = APIRouter(prefix="/tasks", tags=["Tasks"])

@router.get("/", response_model=list[TaskOut])
def get_all_tasks(db: Session = Depends(get_db)):
    return db.query(Task).all()

@router.post("/", response_model=TaskOut)
def create_new_task(task: TaskCreate, db: Session = Depends(get_db)):
    return create_task(db, task)

@router.put("/{task_id}/", response_model=TaskOut)
def update_task(task_id: int, task: TaskCreate, db: Session = Depends(get_db)):
    # optional: implement update
    pass

@router.delete("/{task_id}/")
def delete_task(task_id: int, db: Session = Depends(get_db)):
    # optional: implement delete
    pass

@router.put("/{task_id}/complete/", response_model=TaskOut)
def complete(task_id: int, db: Session = Depends(get_db)):
    return complete_task(db, task_id)
