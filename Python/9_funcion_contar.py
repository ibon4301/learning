menores = 0
mayores = 0
edades = [5, 12, 15, 18, 22, 30, 45, 67, 80]

def contar_mayores_y_menores(menores, mayores):
    for edad in edades:
        if edad <18:
            menores += 1
        else:
            mayores += 1
    return menores, mayores

print(f"En la lista hay {contar_mayores_y_menores(menores, mayores)[0]} menores de edad y {contar_mayores_y_menores(menores, mayores)[1]} mayores de edad.")