def pedir_numeros():
    numeros = []
    numero = int(input(f"Ingrese un número, 0 para terminar:"))

    while numero != 0:
        numeros.append(numero)
        numero = int(input(f"Ingrese un número, 0 para terminar:"))

    return numeros
    
def clasificar_numeros(numeros):
    positivos = 0
    negativos = 0
    cero = 0

    for numero in numeros:
        if numero == 0:
            cero += 1
        elif numero > 0:
            positivos += 1
        else:
            negativos += 1

    return positivos, negativos, cero

numeros = pedir_numeros()
positivos, negativos, cero = clasificar_numeros(numeros)
print(f"Resultados:")
print(f"Números positivos: {positivos}")
print(f"Números negativos: {negativos}")
print(f"Números ceros: {cero}")