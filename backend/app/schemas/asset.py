from pydantic import BaseModel

class AssetCreate(BaseModel):
    employee_id: int
    type: str
    serial_number: str

class AssetOut(BaseModel):
    id: int
    employee_id: int
    type: str
    serial_number: str

    class Config:
        from_attributes = True
