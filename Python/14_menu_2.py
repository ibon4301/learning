nombres = []
edades = []

def mostrar_menu():
    print("Menú de opciones:")
    print("1. Añadir persona")
    print("2. Ver personas")
    print("3. Ver estadísticas de edades")
    print("4. Salir")

def añadir_persona(nombres, edades):
    nombre = input("Ingrese el nombre: ")
    edad = int(input("Ingrese la edad: "))
    if edad < 0:
        print("Edad inválida. Debe ser un número positivo.")
    else:
        edades.append(edad)
        nombres.append(nombre)
    print("Persona añadida.")

def ver_personas(nombres, edades):
    if not nombres:
        print ("No hay personas registradas.")
        return
    print("Personas ingresadas: ")
    for nombre, edad in zip(nombres, edades):
        print(f"{nombre}: {edad} años")

def ver_estadisticas(edades):
    if not edades:
        print("No hay datos para mostrar estadísticas.")
        return
    edad_media = sum(edades) / len(edades)
    mayores = 0
    menores = 0
    for edad in edades:
        if edad >= 18:
            mayores += 1
        else:
            menores += 1
    print("Estadísticas de edades:")
    print(f"Edad media: {edad_media:.2f}")
    print(f"Mayores de edad: {mayores}")
    print(f"Menores de edad: {menores}")
        
while True:
    mostrar_menu()
    opcion = input("Seleccine una opcion (1-4); ")
    if opcion == '1':
        añadir_persona(nombres, edades)
    elif opcion == '2':
        ver_personas(nombres, edades)
    elif opcion == '3':
        ver_estadisticas(edades)
    elif opcion == '4':
        print("Saliendo del programa...")
        break
    else:
        print("Opción inválida. Por favor, seleccione una opción válida.")