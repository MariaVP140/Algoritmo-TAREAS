# TALLER EJERCICIOS PASO A PASO 
# -----------------------------------------------------------------------------------------------------------------------------------
# RECORDEMOS EL METODO 
#  1 ENTENDER(E.P.S) -> 2 BOSQUEJO A MANO -> 3 DESCUBRIR EL PATRÓN
#  4 ESCRIBIR EL CÓDIGO -> 5 PRUEBA DE ESCRITORIO
# -----------------------------------------------------------------------------------------------------------------------------------
# Ejercicio 1 _ Contar del 1 al N
    # Leer un número N y mostrar los números del 1 al N.
# ------------------------------------------------------------------------------------
# 1 ENTENDER EL PROBLEMA 

    # 1 ENTRADA _ qué me dan 
      # n (entero)

    # 2 PROCESO _ qué hago con eso
      # recorrer desde 1 hasta N con un for

    # 3 SALIDA _ qué debo mostrar 
      # los N números uno por línea
# ------------------------------------------------------------------------------------
# 2 BOSQUEJO A MANO 

  # n = 5
  # for i in range(1, 6):   # 1, 2, 3, 4, 5
  # print(i) 

# ------------------------------------------------------------------------------------
# 3 DESCUBRIR EL PATRON 

  # Si quiero contar del 1 al N, uso range(1, N+1). El segundo número es
  # exclusivo: range(1, 6) da 1, 2, 3, 4, 5, no llega a 6.
  # El error clásico es escribir range(1, N): te falta el último número.
# ------------------------------------------------------------------------------------
#  4 ESCRIBIR EL CÓDIGO

n = int(input("Ingrese la cantidad a contar : "))

for i in range(1, n + 1):      # ¡ojo con el n+1!
    print(i)
# ------------------------------------------------------------------------------------
# 🚀 Ahora tú
# Cámbialo para que muestre del N al 1 (hacia atrás). Pista: range(n, 0, -1).
num = int(input("Ingrese la cantidad a contrar en reversa: "))
for i in range(num,0,-1) :
    print(i)
# -----------------------------------------------------------------------------------------------------------------------------------
# Ejercicio 2 _ Suma de los primeros N naturales
    # Leer N y calcular la suma de 1 + 2 + 3 + ... + N.
# ------------------------------------------------------------------------------------
# 1 ENTENDER EL PROBLEMA 

    # 1 ENTRADA _ qué me dan 
      # n (entero)

    # 2 PROCESO _ qué hago con eso
      # acumular en una variable con un bucle

    # 3 SALIDA _ qué debo mostrar 
      # la suma total
# ------------------------------------------------------------------------------------
# 2 BOSQUEJO A MANO 

  # n = 5, suma = 0 (INICIALIZACIÓN)
  # i=1:  suma = 0 + 1 = 1
  # i=2:  suma = 1 + 2 = 3
  # i=3:  suma = 3 + 3 = 6
  # i=4:  suma = 6 + 4 = 10
  # i=5:  suma = 10 + 5 = 15   ← resultado

# ------------------------------------------------------------------------------------
# 3 DESCUBRIR EL PATRON 

  # Aquí aparece el patrón acumulador: una variable (suma) que se va
  # aumentando dentro del bucle.
  # La regla de oro del acumulador: inicializarlo en 0 si vas a sumar, en 1 si
  # vas a multiplicar. Y siempre fuera del bucle, porque si lo pones dentro, en
  # cada vuelta lo reseteas.

  # Curiosidad: Python tiene sum(range(1, n+1)) que hace lo mismo en una
  # línea. Pero como estamos aprendiendo, usamos el bucle explícito.
# ------------------------------------------------------------------------------------
#  4 ESCRIBIR EL CÓDIGO
n = int(input("Cantidad de numero para la suma : "))
suma = 0                    # INICIALIZACIÓN del acumulador

for i in range(1, n + 1):
    suma = suma + i         # equivale a: suma += i

print(f"Suma: {suma}")
# ------------------------------------------------------------------------------------
# 🚀 Ahora tú
# Adaptarlo para calcular la suma de los pares del 2 al 100. Pista: range(2, 101, 2).
suma_Par = 0
for i in range(2,n+1) :
    if(i % 2 == 0):
        suma_Par = suma_Par + i

print(f"La suma de los pares es : {suma_Par}")
# -----------------------------------------------------------------------------------------------------------------------------------
# Ejercicio 3 _ Factorial de N
    # Leer N y calcular el factorial (N! = 1 × 2 × 3 × ... × N). Ejemplo: 5! = 120.
# ------------------------------------------------------------------------------------
# 1 ENTENDER EL PROBLEMA 

    # 1 ENTRADA _ qué me dan 
      # n (entero)

    # 2 PROCESO _ qué hago con eso
      # acumulador multiplicativo

    # 3 SALIDA _ qué debo mostrar 
      # el factorial
# ------------------------------------------------------------------------------------
# 2 BOSQUEJO A MANO 

  # n = 5, fact = 1 (INICIALIZACIÓN)

  # i=1:  fact = 1 * 1 = 1
  # i=2:  fact = 1 * 2 = 2
  # i=3:  fact = 2 * 3 = 6
  # i=4:  fact = 6 * 4 = 24
  # i=5:  fact = 24 * 5 = 120   ← resultado

# ------------------------------------------------------------------------------------
# 3 DESCUBRIR EL PATRON 

  # Mismo patrón que el ejercicio anterior, pero multiplicativo. Lo que cambia es
  # la inicialización: si empiezas en 0, todo el resultado será 0 (porque cualquier
  # cosa × 0 = 0). Empezar en 1 es la clave.
# ------------------------------------------------------------------------------------
#  4 ESCRIBIR EL CÓDIGO
n = int(input("Infgrese el numero a factorizar : "))
fact = 1                    # INICIALIZACIÓN: 1 porque vamos a multiplicar

for i in range(1, n + 1):
    fact = fact * i         # o: fact *= i

print(f"{n}! = {fact}")

# ------------------------------------------------------------------------------------
# 🚀 Ahora tú
# ¿Qué pasa con N muy grande (100!)? Python maneja enteros infinitos, pruébalo. En JS con enteros normales explotaría.
# -----------------------------------------------------------------------------------------------------------------------------------
# Ejercicio 4 _ Cuántos aprobaron
    # Leer las notas de N estudiantes (una por una) y contar cuántos aprobaron (nota ≥ 70).
# ------------------------------------------------------------------------------------
# 1 ENTENDER EL PROBLEMA 

    # 1 ENTRADA _ qué me dan 
      # n (cantidad) y n notas

    # 2 PROCESO _ qué hago con eso
      # recorrer con for y contar con un contador

    # 3 SALIDA _ qué debo mostrar 
      # cuántos tienen nota ≥ 70
# ------------------------------------------------------------------------------------
# 2 BOSQUEJO A MANO 

  # n = 4, aprobados = 0 (INICIALIZACIÓN)

  # nota=8 → 8 >= 7 → aprobados = 1
  # nota=5 → 5 >= 7 → NO cambia
  # nota=9 → 9 >= 7 → aprobados = 2
  # nota=6 → 6 >= 7 → NO cambia

  # resultado: 2 aprobados
# ------------------------------------------------------------------------------------
# 3 DESCUBRIR EL PATRON 

  # Aquí aparece el patrón contador: como el acumulador, pero solo suma 1
  # cuando pasa algo. Se combina con un if dentro del bucle.

  # Fíjate que hay dos bucles imaginarios juntos: (1) uno que lee las N notas, (2)
  # dentro del cuerpo, un if que decide si aumentar el contador.

# ------------------------------------------------------------------------------------
#  4 ESCRIBIR EL CÓDIGO
n = int(input("¿Cuántos estudiantes?: "))
aprobados = 0                       # contador arranca en 0

for i in range(n):
    nota = float(input(f"Nota {i+1}: "))
    if nota >= 7:                   # el 7 es el umbral (o 70 si es sobre 100)
        aprobados += 1              # aumenta solo si aprobó

print(f"Aprobados: {aprobados} de {n}")
# ------------------------------------------------------------------------------------
# 🚀 Ahora tú
# Añade un contador para reprobados y muestra el porcentaje de aprobación.
numero_estudiantes = int(input("¿Cuántos estudiantes?  "))
apro = 0
rep = 0

for i in range(numero_estudiantes):
     nota = float(input(f"Nota {i+1}: "))
     if nota >= 7 :
        apro += 1
     else:
        rep += 1

porcentaje = apro / numero_estudiantes * 100

print(f"Aprobados: {apro} de {numero_estudiantes}")
print(f"Reprobados: {rep} de {numero_estudiantes}")
print(f"Porcentaje: {porcentaje} de {numero_estudiantes}")

# -----------------------------------------------------------------------------------------------------------------------------------
# Ejercicio 5 _ La nota más alta (patrón campeón)
    # Leer las notas de N estudiantes y mostrar la nota más alta.
# ------------------------------------------------------------------------------------
# 1 ENTENDER EL PROBLEMA 

    # 1 ENTRADA _ qué me dan 
      # n y las n notas

    # 2 PROCESO _ qué hago con eso
      # guardar la nota más alta encontrada hasta ahora, actualizarla si aparece una mayor

    # 3 SALIDA _ qué debo mostrar 
      # la nota más alta
# ------------------------------------------------------------------------------------
# 2 BOSQUEJO A MANO 

  # nota máxima = -infinito (o = primera nota)

  # leo 6  → 6 > -inf → máx = 6
  # leo 9  → 9 > 6   → máx = 9
  # leo 4  → 4 > 9   → NO cambia
  # leo 8  → 8 > 9   → NO cambia
  # leo 10 → 10 > 9  → máx = 10

  # resultado: 10
# ------------------------------------------------------------------------------------
# 3 DESCUBRIR EL PATRON 

  # Patrón campeón (o mayor). Guardas la mejor nota vista hasta ese momento y
  # la actualizas cuando aparece una mayor.

  # El problema es cómo inicializar. Dos opciones:

  #  Con la primera nota leída (mejor): el bucle empieza en el segundo dato.
  # Con un valor imposible (float negativo infinito): el bucle empieza en el primero.

  # Aquí usamos la segunda porque queda más limpia con range(n).  
# ------------------------------------------------------------------------------------
#  4 ESCRIBIR EL CÓDIGO
numero_Notas = int(input("¿Cuántas notas? "))
maximo = 0

for i in range (numero_Notas):
    nota = float(input(f"Nota {i+1}: "))
    if nota > maximo :
        maximo = nota 

print (f"Máxima : {maximo}")
# ------------------------------------------------------------------------------------
# 🚀 Ahora tú
# Adaptarlo para encontrar la menor nota. Cambio: float("inf") y if nota < minima:.
minimo = 10
for i in range (numero_Notas):
    nota = float(input(f"Nota {i+1}: "))
    if nota < minimo :
        minimo = nota 

print (f"Minimo : {minimo}")
# -----------------------------------------------------------------------------------------------------------------------------------
