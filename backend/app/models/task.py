from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship
from app.db.base import Base

class Task(Base):
    __tablename__ = "tasks"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, nullable=False)
    description = Column(String, nullable=False)
    status = Column(String, nullable=False)

    employee_id = Column(Integer, ForeignKey("employees.id"), nullable=False)
    # damit die Beziehung zu employee.py in Models bidirektional wird
    employee = relationship("Employee", back_populates="tasks")

    
    