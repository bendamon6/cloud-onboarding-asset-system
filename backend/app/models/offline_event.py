from sqlalchemy import Column, Integer, String
from app.db.session import Base

class OfflineEvent(Base):
    __tablename__ = "offline_events"

    id = Column(Integer, primary_key=True, index=True)
    event_type = Column(String, nullable=False)
    timestamp = Column(String, nullable=False)
    description = Column(String, nullable=True)
