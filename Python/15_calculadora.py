def sumar (a, b):
    return a + b

def restar(a ,b):
    return a - b

def multiplicar(a, b):
    return a * b

def dividir(a, b):
    if b == 0:
        return "Error: División por cero"
    return a / b

def mostrar_menu():
    print("Menú de la Calculadora:")
    print("1. Sumar")
    print("2. Restar")
    print("3. Multiplicar")
    print("4. Dividir")
    print("5. Salir")

while True:
    mostrar_menu()
    opcion = input("Seleccione una opción (1-5): ")
    if opcion == '1':
        a = float(input("Ingrese el primer número: "))
        b = float(input("Ingrese el segundo número: "))
        resultado = sumar(a, b)
        print(f"Resultado: {resultado}")
    elif opcion == '2':
        a = float(input("Ingrese el primer número: "))
        b = float(input("Ingrese el segundo número: "))
        resultado = restar(a, b)
        print(f"Resultado: {resultado}")
    elif opcion == '3':
        a = float(input("Ingrese el primer número: "))
        b = float(input("Ingrese el segundo número: "))
        resultado = multiplicar(a, b)
        print(f"Resultado: {resultado}")
    elif opcion == '4':
        a = float(input("Ingrese el primer número: "))
        b = float(input("Ingrese el segundo número: "))
        resultado = dividir(a, b)
        print(f"Resultado: {resultado}")
    elif opcion == '5':
        print("Saliendo de la calculadora...")
        break
    else:
        print("Opción inválida. Por favor, seleccione una opción válida.")