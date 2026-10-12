from pathlib import Path
import shutil
from fastapi import UploadFile

def save_file(file: UploadFile, folder: str = "uploaded_documents"):
    """
    Speichert eine Datei in einem angegebenen Ordner.
    Wird von document_service.py genutzt.
    """

    # Ordner erstellen, falls nicht vorhanden
    target_dir = Path(folder)
    target_dir.mkdir(exist_ok=True)

    # Speicherpfad bestimmen
    saved_path = target_dir / file.filename

    # Dateiinhalt speichern
    with saved_path.open("wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    return str(saved_path)
