

personas = []

personas.append({"nombre": "Isa", "edad": 28})

personas.append({"nombre": "Luis", "edad": 34})

personas.append({"nombre": "David", "edad": 17})

for persona in personas:
    print(f"{persona['nombre']} tiene {persona['edad']} años")



mayores = 0

for persona in personas:
    if persona['edad'] >= 18:
        mayores += 1

print(f"Hay {mayores} personas mayores de edad")


suma = 0
for persona in personas:
    suma += persona['edad']

media = suma / len(personas)

print(f"La edad media es {media}")


## Función para añadir personas al listado
def añadir_person(personas):
    nombre = input("Ingrese el nombre: ")
    edad = int(input("Ingrese la edad: "))

    persona = {
        "nombre": nombre,
        "edad": edad
    }    

    personas.append(persona)
