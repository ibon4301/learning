def pedir_notas():
    notas = []
    nota = int(input(f"Ingrese una nota (0-10), -1 para terminar: "))

    while nota != -1:
        notas.append(nota)
        nota = int(input(f"Ingrese una nota (0-10), -1 para terminar: "))

    return notas

def analizar_notas(notas):
    aprobados = 0
    suspensos = 0
    for nota in notas:
        if nota >= 5:
            aprobados += 1
        else:
            suspensos += 1
    return aprobados, suspensos

def calcular_media(notas):
    if len(notas) == 0:
        return  0
    else:
        return sum(notas) / len(notas)

notas = pedir_notas()
aprobados, suspensos = analizar_notas(notas)
media = calcular_media(notas)
print(f"Resultados: ")
print(f"Cantidad de aprobados: {aprobados}")
print(f"Cantidad de suspensos: {suspensos}")
print(f"Nota media: {media:.2f}")