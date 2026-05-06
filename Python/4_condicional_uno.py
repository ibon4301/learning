edad = int(input("Por favor, ingresa tu edad: "))
# Estructura condicional para determinar el estado según la edad
# Las condiciones más específicas van primero, es decir, comprobar una cosa primero. luego si compruebas varias como mayor o igual que, va despues de mayor que unicamente.
if edad > 65:
    print("Estás jubilado.")
elif edad >= 18:
    print("Eres mayor de edad.")
else:
    print("Eres menor de edad.")
