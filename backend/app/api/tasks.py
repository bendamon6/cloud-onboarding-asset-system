from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.db.session import SessionLocal
from app.schemas.task import TaskCreate, TaskUpdate, TaskOut
from app.services.task_service import (
    list_tasks,
    list_tasks_for_employee,
    get_task,
    create_task,
    update_task,
    delete_task,
    complete_task
)

router = APIRouter(prefix="/tasks", tags=["Tasks"])

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# GET all tasks
@router.get("/", response_model=list[TaskOut])
def get_all_tasks(db: Session = Depends(get_db)):
    return list_tasks(db)

# GET tasks for employee
@router.get("/employee/{employee_id}", response_model=list[TaskOut])
def get_tasks_for_employee(employee_id: int, db: Session = Depends(get_db)):
    return list_tasks_for_employee(db, employee_id)

# GET single task
@router.get("/{task_id}", response_model=TaskOut)
def get_single_task(task_id: int, db: Session = Depends(get_db)):
    task = get_task(db, task_id)
    if not task:
        raise HTTPException(status_code=404, detail="Task not found")
    return task

# CREATE task
@router.post("/", response_model=TaskOut)
def create_new_task(data: TaskCreate, db: Session = Depends(get_db)):
    return create_task(db, data)

# UPDATE task
@router.put("/{task_id}", response_model=TaskOut)
def update_existing_task(task_id: int, data: TaskUpdate, db: Session = Depends(get_db)):
    task = update_task(db, task_id, data)
    if not task:
        raise HTTPException(status_code=404, detail="Task not found")
    return task

# DELETE task
@router.delete("/{task_id}")
def delete_existing_task(task_id: int, db: Session = Depends(get_db)):
    result = delete_task(db, task_id)
    if not result:
        raise HTTPException(status_code=404, detail="Task not found")
    return {"status": "deleted"}

# COMPLETE task (korrekt integriert)
@router.put("/{task_id}/complete", response_model=TaskOut)
def complete(task_id: int, db: Session = Depends(get_db)):
    task = complete_task(db, task_id)
    if not task:
        raise HTTPException(status_code=404, detail="Task not found")
    return task
