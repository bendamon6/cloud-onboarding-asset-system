# cloud-onboarding-asset-system
Cloud-basiertes IT-Onboarding & Asset-Management-System – Sprint 1

Dieses Projekt bildet die technische Grundlage für ein cloudbasiertes IT‑Onboarding‑ und Asset‑Management‑System.
In Sprint 1 wurde die komplette Backend‑Basisstruktur mit FastAPI implementiert, inklusive Datenbank, API‑Endpoints und Dokument‑Upload.
Das System ist lokal lauffähig und stellt die Basis für spätere Erweiterungen wie Cloud‑Deployment, Governance, Security, FinOps, Business‑Continuity und ML‑gestützte Dokumentanalyse dar.

Sprint‑1‑Lieferumfang:

Das Backend umfasst folgende Funktionen:

Verwaltung von Mitarbeitenden

Verwaltung von Aufgaben

Dokument‑Upload mit Speicherung im lokalen Dateisystem

Systemstatus‑Endpoint

Automatische Erstellung einer lokalen SQLite‑Datenbank

Saubere modulare Struktur (api, models, schemas, services, utils, db)

Die Architektur ist so aufgebaut, dass sie in späteren Sprints problemlos um Cloud‑Komponenten, CI/CD‑Pipelines, Containerisierung, ML‑Modelle und Infrastructure‑as‑Code erweitert werden kann.

Sprint 1 konzentriert sich bewusst auf die Backend‑Grundlagen, um eine stabile Basis für die kommenden Sprints zu schaffen.