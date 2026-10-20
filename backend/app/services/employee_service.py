from sqlalchemy.orm import Session
from app.models.employee import Employee

def list_employees(db: Session):
    return db.query(Employee).all()

def get_employees(db: Session):
    return db.query(Employee).all()

def create_employee(db: Session, employee_data):
    employee = Employee(**employee_data.model_dump())
    db.add(employee)
    db.commit()
    db.refresh(employee)
    return employee

def create_test_employees(db: Session):
    # Wenn bereits Mitarbeiter exisiteren - nichts tun
    if db.query(Employee).count() > 0:
        return
    employees = [
        {"name": "Alan Ruck", "role": "IT Support", "start_date": "2024-01-01"},
        {"name": "Michael Boatman", "role": "Developer", "start_date": "2024-02-15"},
        {"name": "Michael J Fox", "role": "HR Manager", "start_date": "2024-03-10"}
    ]

    for emp in employees:
        employee = Employee(**emp)
        db.add(employee)

    db.commit()

def remove_duplicate_employees(db: Session):
    employees = db.query(Employee).all()
    seen = set()
    duplicates = []

    for emp in employees:
        key = (emp.name, emp.role, emp.start_date)
        if key in seen:
            duplicates.append(emp)
        else:
            seen.add(key)

    # Dubletten löschen
    for emp in duplicates:
        db.delete(emp)

    db.commit()

