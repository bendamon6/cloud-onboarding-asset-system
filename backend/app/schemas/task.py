from pydantic import BaseModel

class TaskCreate(BaseModel):
    employee_id: int
    description: str

class TaskOut(TaskCreate):
    id: int
    completed: bool

    class Config:
        orm_mode = True
