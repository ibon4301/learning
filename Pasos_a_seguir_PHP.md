# PHP Moderno → Symfony (Roadmap de Ibón)

## Objetivo

Dejar de hacer "vibe coding" y entender completamente qué ocurre debajo de Symfony.

Cada punto debe estudiarse en PHP puro desde CLI antes de avanzar.

**Regla:** No avanzar al siguiente tema hasta haber entendido y aprobado ejercicios del tema actual.

---

# 🟢 Bloque 1: Fundamentos y Sintaxis Moderna

* ✅ 01 - Entorno de Desarrollo y CLI
* ✅ 02 - Variables, Constantes y Ámbito
* ⬜ 03 - Tipado Estricto (`strict_types=1`)
* ⬜ 04 - Operadores Avanzados (`??`, `??=`, `<=>`)
* ⬜ 05 - Condicionales (`if`, `switch`, `match`)
* ⬜ 06 - Bucles (`while`, `for`, `foreach`)

---

# 🟡 Bloque 2: Estructuras de Datos y Funciones

* ⬜ 07 - Arrays Indexados y Asociativos
* ⬜ 08 - Desestructuración y Operador Spread/Rest (`...`)
* ⬜ 09 - Funciones: Tipado estricto de parámetros y retorno
* ⬜ 10 - Funciones Anónimas y Arrow Functions (`fn()`)
* ⬜ 11 - Manipulación Avanzada de Strings y Arrays

## Temas complementarios

* ⬜ 11.1 - Argumentos Nombrados (Named Arguments)
* ⬜ 11.2 - Funciones Variádicas
* ⬜ 11.3 - Recursividad

---

# 🔵 Bloque 3: Programación Orientada a Objetos (POO)

* ⬜ 12 - Clases, Objetos y Promoción de Propiedades en Constructor
* ⬜ 13 - Encapsulamiento, Visibilidad y Propiedades `readonly`
* ⬜ 14 - Herencia, Sobreescritura y uso de `parent`
* ⬜ 15 - Abstracción: Clases Abstractas e Interfaces
* ⬜ 16 - Miembros Estáticos (`static`) y Constantes de Clase
* ⬜ 17 - Traits (Reutilización de código)
* ⬜ 18 - Métodos Mágicos (`__construct`, `__toString`, etc.)
* ⬜ 19 - Namespaces, Autoloading y Estándar PSR-4

## Temas complementarios

* ⬜ 19.1 - Polimorfismo
* ⬜ 19.2 - Inyección de Dependencias

---

# 🟠 Bloque 4: Ecosistema Profesional y Datos

* ⬜ 20 - Composer: Gestión de dependencias y Autoloader
* ⬜ 21 - Gestión de Errores, Excepciones y Bloques `try/catch`
* ⬜ 22 - Atributos de PHP 8 (Metadata para rutas y servicios)
* ⬜ 23 - Manejo de Archivos (Lectura, Escritura y JSON)
* ⬜ 24 - Base de Datos con PDO y Consultas Preparadas

## Temas complementarios

* ⬜ 24.1 - CSV
* ⬜ 24.2 - XML
* ⬜ 24.3 - Variables de Entorno (`.env`)
* ⬜ 24.4 - Seguridad Básica

  * XSS
  * CSRF
  * Password Hashing

---

# 🔴 Bloque 5: Arquitectura de Software y APIs (Pre-Symfony)

* ⬜ 25 - Patrones de Diseño

  * Singleton
  * Factory
  * Repository
  * Inyección de Dependencias

* ⬜ 26 - Principios SOLID aplicados a PHP

* ⬜ 27 - Pruebas Unitarias Básicas con PHPUnit

* ⬜ 28 - Manejo de HTTP puro

  * Superglobales
  * Cabeceras
  * Sesiones

* ⬜ 29 - Proyecto Final

  * Construcción de una API REST desde cero en PHP puro

## Temas complementarios

* ⬜ 29.1 - PHPStan
* ⬜ 29.2 - PHP CS Fixer
* ⬜ 29.3 - PSR-1
* ⬜ 29.4 - PSR-4
* ⬜ 29.5 - PSR-12
* ⬜ 29.6 - Introducción a Symfony

---

# Temática de los ejemplos

Todos los ejemplos y ejercicios usarán principalmente:

## World of Warcraft

* Personajes
* Clases
* Facciones
* Misiones
* Objetos

## Star Wars

* Jedi
* Sith
* Planetas
* Naves
* Fuerza

## One Piece

* Piratas
* Tripulaciones
* Frutas del Diablo
* Marines

---

# Meta final

Ser capaz de abrir cualquier clase de Symfony y entender exactamente:

* qué es una clase
* qué es un objeto
* qué es una interfaz
* qué es una dependencia
* qué es un servicio
* qué es Composer
* qué es PSR-4
* qué hace el contenedor de dependencias
* por qué funciona el autowiring
* por qué funcionan los atributos
* por qué Symfony hace lo que hace

Sin copiar y pegar.
Sin magia.
Entendiendo cada pieza.
