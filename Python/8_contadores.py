menores = 0
mayores = 0

edades = [5, 12, 15, 18, 22, 30, 45, 67, 80]

for edad in edades:
    if edad <18:
        menores += 1
    else:
        mayores += 1

print(f"En la lista hay {menores} menores de edad y {mayores} mayores de edad.")