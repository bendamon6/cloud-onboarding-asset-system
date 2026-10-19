from pydantic import BaseModel

class DocumentOut(BaseModel):
    filename: str
    content_type: str
    saved_path: str

    class Config:
        from_attributes = True
