def pedir_edades():
    edades = []
    edad = int(input(f"Ingrese una edad, 0 para terminar: "))

    while edad != 0:
        edades.append(edad)
        edad = int(input(f"Ingrese una edad, 0 para terminar: "))

    return edades

def calcular_mayores_y_menores(edades):
    menores = 0
    mayores = 0
    for edad in edades:
        if edad < 18:
            menores += 1
        else:
            mayores += 1
    return menores, mayores 

edades = pedir_edades()
menores, mayores = calcular_mayores_y_menores(edades)

print(f"Resultados: ")
print(f"Cantidad de menores de edad: {menores}")
print(f"Cantidad de mayores de edad: {mayores}")