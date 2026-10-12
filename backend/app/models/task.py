from sqlalchemy import Column, Integer, String, Boolean, ForeignKey
from app.db.base import Base

class Task(Base):
    __tablename__ = "tasks"

    id = Column(Integer, primary_key=True, index=True)
    employee_id = Column(Integer, ForeignKey("employees.id"))
    description = Column(String, nullable=False)
    completed = Column(Boolean, default=False)
