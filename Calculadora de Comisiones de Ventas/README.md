# 💰 Calculadora de Comisiones de Ventas

Aplicación web que permite a los vendedores calcular su comisión mensual según el país en que operan.

## 🌐 Demo rápida

Abre `index.html` en cualquier navegador moderno — no requiere servidor ni dependencias externas.

## 📐 Reglas de negocio

| País         | Fórmula                                    | Tasa |
|--------------|--------------------------------------------|------|
| 🇮🇳 India    | (Ventas Totales − Descuentos) × 10%        | 10%  |
| 🇺🇸 EE.UU.  | (Ventas Totales − Descuentos) × 15%        | 15%  |
| 🇬🇧 R. Unido | (Ventas Totales − Descuentos) × 12%        | 12%  |

## 🗂️ Estructura del proyecto

```
comisiones-ventas/
├── index.html              ← Aplicación principal
├── css/
│   └── style.css           ← Estilos (capa de presentación)
├── js/
│   ├── countryRates.js     ← Capa de datos: tasas por país
│   ├── validator.js        ← Capa lógica: validación de entradas
│   └── engine.js           ← Capa lógica: motor de cálculo
├── docs/
│   └── diagramas.docx      ← Diagramas de arquitectura
└── README.md
```

## 🏛️ Arquitectura (3 capas)

```
┌─────────────────────────────────┐
│     PRESENTACIÓN (index.html)   │  ← Formulario, selector país, resultado
├─────────────────────────────────┤
│   LÓGICA DE NEGOCIO             │  ← validator.js · engine.js
├─────────────────────────────────┤
│   DATOS (countryRates.js)       │  ← Mapa de tasas por país
└─────────────────────────────────┘
```

## 🚀 Uso

1. Selecciona tu país en las pestañas superiores.
2. Ingresa las ventas totales del mes.
3. Ingresa los descuentos aplicados.
4. La comisión se calcula automáticamente en tiempo real.

## ✅ Validaciones

- Ventas y descuentos deben ser ≥ 0.
- Los descuentos no pueden superar las ventas totales.

## 📄 Documentación

Los diagramas de diseño (solución, capas y componentes) se encuentran en `docs/diagramas.docx`.

## 🛠️ Tecnologías

- HTML5 / CSS3 / JavaScript (Vanilla ES6)
- Sin dependencias externas ni frameworks
- Compatible con todos los navegadores modernos
