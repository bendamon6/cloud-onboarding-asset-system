from sqlalchemy.orm import Session
from app.models.task import Task

def list_tasks(db: Session):
    return db.query(Task).all()

def list_tasks_for_employee(db: Session, employee_id: int):
    return db.query(Task).filter(Task.employee_id == employee_id).all()

def get_task(db: Session, task_id: int):
    return db.query(Task).filter(Task.id == task_id).first()

def create_task(db: Session, data):
    task = Task(**data.model_dump())
    db.add(task)
    db.commit()
    db.refresh(task)
    return task

def update_task(db: Session, task_id: int, data):
    task = get_task(db, task_id)
    if not task:
        return None

    for key, value in data.model_dump(exclude_unset=True).items():
        setattr(task, key, value)

    db.commit()
    db.refresh(task)
    return task

def delete_task(db: Session, task_id: int):
    task = get_task(db, task_id)
    if not task:
        return None

    db.delete(task)
    db.commit()
    return True

def complete_task(db: Session, task_id: int):
    task = get_task(db, task_id)
    if not task:
        return None

    # Konsistente Statusänderung
    task.status = "completed"

    db.commit()
    db.refresh(task)
    return task
