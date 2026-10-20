📘 README — Sprint 1
Cloud Onboarding & Asset Management System
Überblick
Sprint 1 legt die komplette technische Basis für das Backend des Cloud‑Onboarding‑Systems.
Ziel war es, eine stabile, erweiterbare und produktionsreife Grundlage zu schaffen, die in späteren Sprints mit Frontend, Cloud‑Deployment, ML‑Modulen und DevOps‑Automatisierung erweitert wird.
Ziele von Sprint 1
Aufbau der Backend‑Grundstruktur mit FastAPI
Einrichtung der Datenbank (SQLite für lokale Entwicklung)
Implementierung der Kernmodelle Employee und Task
Aufbau der vollständigen CRUD‑API für Tasks
Initiales Seed‑Data‑Setup für Employees
Sicherstellung eines fehlerfreien Startup‑Flows
Vorbereitung für Frontend‑Integration und Cloud‑Deployment
Architektur (Sprint 1)
Das Backend folgt einer klaren, modularen Struktur:
Code
backend/
│
├── app/
│   ├── api/            # Router & Endpoints
│   ├── models/         # SQLAlchemy ORM Models
│   ├── schemas/        # Pydantic Schemas
│   ├── services/       # Business-Logik
│   ├── db/             # DB-Setup & Session
│   └── main.py         # FastAPI App + Startup
│
└── requirements.txt
Datenbank & ORM
SQLAlchemy + SQLite
Sprint 1 implementiert:
Engine‑Setup
Session‑Management
automatische Tabellenerstellung beim Startup
vollständige ORM‑Modelle mit Beziehungen
Modelle
Employee
id
name
role
start_date
tasks (Beziehung zu Task)
Task
id
title
description
status
employee_id (ForeignKey)
employee (Beziehung zu Employee)
API‑Endpoints (Sprint 1)
Tasks
POST /tasks — neuen Task anlegen
GET /tasks — alle Tasks abrufen
GET /tasks/{id} — Task nach ID abrufen
GET /tasks/employee/{employee_id} — Tasks eines Mitarbeiters
PUT /tasks/{id} — Task aktualisieren
DELETE /tasks/{id} — Task löschen
POST /tasks/{id}/complete — Task abschließen
Employees
Seed‑Daten werden beim Startup automatisch erzeugt
CRUD folgt in Sprint 2
Startup‑Flow
Beim Start der Anwendung:
Tabellen werden erzeugt
Session wird geöffnet
Test‑Employees werden eingefügt (falls DB leer)
Session wird geschlossen
API ist bereit
Sprint‑1‑Ergebnisse
Backend startet fehlerfrei
Alle Task‑Endpoints funktionieren
Beziehungen zwischen Employee ↔ Task sind stabil
Datenbank ist konsistent
API ist bereit für Frontend‑Integration
Grundlage für Cloud‑Deployment ist gelegt
Installation & Start (lokal)
bash
pip install -r requirements.txt
uvicorn app.main:app --reload
API‑Dokumentation:
Code
http://127.0.0.1:8000/docs
Status Sprint 1
Abgeschlossen  
Backend‑Basis steht vollständig und stabil.
Sprint 2 kann mit Frontend‑Integration und Cloud‑Architektur starten.
Ausblick auf Sprint 2
React‑Frontend anbinden
API‑Client implementieren
UI für Employees & Tasks
Cloud‑Architektur vorbereiten (AWS ECS, RDS, S3, CloudFront)
Terraform‑Struktur anlegen
CI/CD vorbereiten (GitHub Actions + OIDC)