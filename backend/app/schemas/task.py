from pydantic import BaseModel

class TaskBase(BaseModel):
    title: str
    description: str
    status: str
    employee_id: int

class TaskCreate(BaseModel):
    title: str
    description: str | None = None


class TaskUpdate(BaseModel):
    title: str | None = None
    description: str | None = None
    status: str | None = None

class TaskOut(TaskBase):
    id: int

    class Config:
        from_attributes = True
