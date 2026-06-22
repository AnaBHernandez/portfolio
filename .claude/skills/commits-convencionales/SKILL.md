---
name: commits-convencionales
description: Aplica convenciones de commits al proyecto Palacio de la Memoria. Se activa cuando Ana va a hacer un commit o pide ayuda con el mensaje de commit.
---

## Cuándo se activa
- Ana pide ayuda para escribir un mensaje de commit
- Ana va a hacer un commit y no tiene claro el formato

## Formato obligatorio
tipo(scope): descripción en español en minúsculas

## Tipos permitidos
- feat: nueva funcionalidad
- fix: corrección de bug
- docs: documentación (Wiki, README, spec.md)
- chore: mantenimiento (deps, config)
- refactor: refactorización sin cambio de comportamiento
- test: añadir o modificar tests
- style: cambios de estilos sin lógica

## Scopes del proyecto
- store, routing, hall, history, workshop, library, mailbox
- models, wiki, spec, deps

## Ejemplos
feat(store): añade palacio.store.ts con signal salaActiva
feat(routing): configura lazy loading para las 5 salas
docs(wiki): actualiza especificación del sistema
chore(deps): bump undici y @angular/build

## Qué NO hacer
- No usar inglés en la descripción
- No omitir el scope
- No escribir en mayúsculas
- No superar 72 caracteres en la primera línea
