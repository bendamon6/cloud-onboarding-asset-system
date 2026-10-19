from pydantic import BaseModel

class EmployeeCreate(BaseModel):
    name: str
    role: str
    start_date: str

class EmployeeOut(EmployeeCreate):
    id: int
    name: str
    role: str
    start_date: str

    class Config:
        from_attributes = True
