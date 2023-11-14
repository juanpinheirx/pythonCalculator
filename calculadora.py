def add(x, y):
    return x + y

def subtract(x, y):
    return x - y

def multiply(x, y):
    return x * y

def divide(x, y):
    return x / y


print("Selecione a operação.")
print("1.Soma")
print("2.Subtração")
print("3.Multiplicação")
print("4.Divisão")

while True:
    choice = input("Escolha a operação(1/2/3/4): ")

    if choice in ('1', '2', '3', '4'):
        try:
            num1 = float(input("Escolha o primeiro numero: "))
            num2 = float(input("Escolha o segundo numero: "))
        except ValueError:
            print("Valor inválido. Por favor, escolha um número.")
            continue

        if choice == '1':
            print(num1, "+", num2, "=", add(num1, num2))

        elif choice == '2':
            print(num1, "-", num2, "=", subtract(num1, num2))

        elif choice == '3':
            print(num1, "*", num2, "=", multiply(num1, num2))

        elif choice == '4':
            print(num1, "/", num2, "=", divide(num1, num2))
        
        next_calculation = input("Deseja outro cálculo? (sim/não): ")
        if next_calculation == "não":
          break
    else:
        print("Entrada inválida")