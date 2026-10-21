from pydantic import BaseModel

class EmployeeCreate(BaseModel):
    name: str
    email: str
    department: str

class EmployeeOut(BaseModel):
    id: int
    name: str
    email: str
    department: str

    model_config = {
        "from_attributes": True
    }
