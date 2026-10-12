import shutil
from pathlib import Path

async def save_document(db, file):
    upload_dir = Path("uploaded_documents")
    upload_dir.mkdir(exist_ok=True)

    saved_path = upload_dir / file.filename

    with saved_path.open("wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    return {
        "filename": file.filename,
        "content_type": file.content_type,
        "saved_path": str(saved_path)
    }
