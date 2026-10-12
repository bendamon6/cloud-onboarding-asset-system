from pydantic import BaseModel

class AssetCreate(BaseModel):
    employee_id: int
    type: str
    serial_number: str

class AssetOut(AssetCreate):
    id: int

    class Config:
        orm_mode = True
