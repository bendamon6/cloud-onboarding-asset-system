from app.db.base import Base
from app.db.session import engine
from app.models import employee, task, asset, offline_event
from .base import Base

def init_db():
    Base.metadata.create_all(bind=engine)
