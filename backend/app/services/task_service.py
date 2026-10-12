from app.models.task import Task

def list_tasks(db, employee_id: int):
    return db.query(Task).filter(Task.employee_id == employee_id).all()

def complete_task(db, task_id: int):
    task = db.query(Task).filter(Task.id == task_id).first()
    task.completed = True
    db.commit()
    db.refresh(task)
    return task
