from fastapi import APIRouter

router = APIRouter(prefix="/status", tags=["Status"])

@router.get("/")
def get_status():
    """
    Gibt den aktuellen Systemstatus zurück.
    Wird vom Frontend genutzt, um Offline/Online anzuzeigen.
    """
    return {"status": "online"}
