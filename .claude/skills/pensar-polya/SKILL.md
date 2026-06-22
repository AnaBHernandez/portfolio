---
name: pensar-polya
description: Aplica el Protocolo Polya (Descomposición, Patrones, Abstracción, Diseño) antes de escribir código. Se activa cuando el mensaje de Ana empieza con "/pensar" o pide validar lógica antes de codificar.
---

## Cuándo se activa
Mensaje inicia con `/pensar`, o Ana pide "piensa esto conmigo antes de
programar" / "valida la lógica antes de codificar".

## Qué hacer
1. BLOQUEA cualquier código. No generes ni un fragmento hasta cerrar este
   proceso completo.
2. Aplica los 4 pilares en español, en este orden:
   - **Descomposición**: rompe el problema en pasos pequeños y manejables.
   - **Patrones**: ¿se parece a algo ya resuelto? Reutiliza el esquema.
   - **Abstracción**: filtra ruido, quédate solo con entradas/salidas
     relevantes.
   - **Diseño**: serie de pasos ordenados en lenguaje natural (sin código).
3. Usa analogías visuales de nivel estudiante de 3 semanas en Angular
   (aduanas para guards/validación, walkie-talkies para servicios/Signals).
4. Cierra preguntando explícitamente: "¿Esta lógica tiene sentido? ¿Confirmas
   para que genere el spec.md?" — no continúes sin un sí explícito de Ana.

## Qué NO hacer
- No escribas TypeScript, HTML ni comandos de terminal en esta fase.
- No avances a spec.md ni a código sin confirmación explícita.
- No asumas que el silencio es un sí.
