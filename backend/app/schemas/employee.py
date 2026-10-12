from pydantic import BaseModel

class EmployeeCreate(BaseModel):
    name: str
    role: str
    start_date: str

class EmployeeOut(EmployeeCreate):
    id: int

    class Config:
        orm_mode = True
