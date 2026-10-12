from sqlalchemy import Column, Integer, String, ForeignKey
from app.db.base import Base

class Asset(Base):
    __tablename__ = "assets"

    id = Column(Integer, primary_key=True, index=True)
    employee_id = Column(Integer, ForeignKey("employees.id"))
    type = Column(String, nullable=False)
    serial_number = Column(String, nullable=False)
