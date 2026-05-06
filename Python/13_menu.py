notas = []

def mostrar_menu():
    print("Menú de opciones:")
    print("1. Añadir nota")
    print("2. Ver notas")
    print("3. Ver resumen (aprobados, suspensos, media)")
    print("4. Salir")

def añadir_nota(notas):
    nota = int(input("Ingrese una nota (0-10): "))
    if nota < 0 or nota > 10:
        print("Nota inválida. Debe estar entre 0 y 10.")
    else:
        notas.append(nota)
        print("Nota añadida")


def resumen_notas(notas):
    aprobados = 0
    suspensos = 0
    media = 0
    for nota in notas:
        if nota >= 5:
            aprobados += 1
        else:
            suspensos += 1
    
    
    media = sum(notas) / len(notas) if notas else 0
    return aprobados, suspensos, media

while True:
    mostrar_menu()
    opcion = input("Seleccione una opción (1-4): ")

    if opcion == '1':
        añadir_nota(notas)

    elif opcion == '2':
        print("Notas ingresadas:", notas)

    elif opcion == '3':
        aprobados, suspensos, media = resumen_notas(notas)
        print("Resumen de notas:")
        print(f"Aprobados: {aprobados}")
        print(f"Suspensos: {suspensos}")
        print(f"Media: {media:.2f}")

    elif opcion == '4':
        print("Saliendo del programa.")
        break