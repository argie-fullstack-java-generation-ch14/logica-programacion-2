# Conversor de Temperaturas 🌡️

Programa en JavaScript que convierte una temperatura ingresada en grados **Celsius** a grados **Fahrenheit** y **Kelvin**.

## Descripción

El programa solicita al usuario una temperatura en grados Celsius, valida que el dato ingresado sea de tipo numérico y, si es válido, imprime en consola la conversión a Fahrenheit y Kelvin. En caso de que el dato no sea numérico, muestra un mensaje de error y vuelve a solicitar la entrada.

## Fórmulas

- **Celsius a Kelvin:** `K = °C + 273.15`
- **Celsius a Fahrenheit:** `°F = (°C × 9/5) + 32`

## Requisitos

- [Node.js](https://nodejs.org/) instalado (v14 o superior).

## Cómo ejecutar

```bash
node main.js
```

## Ejemplo de uso

```
¡Bienvenido a mi conversor de temperaturas! 🌚
Ingresa la temperatura en grados Celsius: 45
Grados Kelvin: 318.15
Grados Fahrenheit: 113
```

```
¡Bienvenido a mi conversor de temperaturas! 🌚
Ingresa la temperatura en grados Celsius: 14
Grados Kelvin: 287.15
Grados Fahrenheit: 57.2
```

### Entrada inválida

```
Ingresa la temperatura en grados Celsius: hola
Error: el dato ingresado no es un número. Intenta de nuevo.
Ingresa la temperatura en grados Celsius: 
```

## Casos de prueba

| Entrada (°C) | Kelvin   | Fahrenheit |
| ------------ | -------- | ---------- |
| 45           | 318.15   | 113        |
| 14           | 287.15   | 57.2       |
| 0            | 273.15   | 32         |
| 100          | 373.15   | 212        |
| -40          | 233.15   | -40        |

## Tecnologías

- JavaScript
- Node.js (`readline` para leer la entrada del usuario)
