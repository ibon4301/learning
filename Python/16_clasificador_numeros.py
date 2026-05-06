def es_par(numero):
    return numero % 2 == 0

def es_positivo(numero):
    return numero > 0

def menu():
    print("Menú de Clasificación de Números:")
    print("1 - Clasificar número")
    print("2 - Salir")

while True:
    menu()
    opcion = int(input("Seleccione una opción: "))

    if opcion == '1':
        numero = int(input("Ingrese un numero: "))

        if es_par(numero):
            print("El numero es par")
        else:
            print("El numero es impar")

        if es_positivo(numero):
            print("El numero es positivo")
        else:
            print("El numero es negativo")

    elif opcion == '2':
        print("Saliendo del programa...")
        break

    else:
        print("Opción no valida")