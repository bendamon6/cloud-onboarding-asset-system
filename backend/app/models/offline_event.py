from sqlalchemy import Column, Integer, String, Text
from app.db.base import Base

class OfflineEvent(Base):
    __tablename__ = "offline_events"

    id = Column(Integer, primary_key=True)
    endpoint = Column(String)
    payload = Column(Text)
    timestamp = Column(String)
