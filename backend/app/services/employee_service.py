from app.models.employee import Employee

def create_employee(db, data):
    emp = Employee(**data.dict())
    db.add(emp)
    db.commit()
    db.refresh(emp)
    return emp

def list_employees(db):
    return db.query(Employee).all()
