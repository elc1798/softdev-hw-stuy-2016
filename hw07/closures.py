def h(x):
    return lambda y : x + y

print h(1)
print h(1)(2)

b = h(1)

print b
print b(2)

def a(x):
    def c(y):
        return x + y
    return c

print a(1)(2)

def repeat(string):
    def multiply(times):
        return string * times
    return multiply

r1 = repeat("hello")

def r2(times):
    return repeat("goodbye")(times)

print repeat('cool')(3)
print r2(2)
print r1(1)

def f(x, y):
    print x
    y(x)

def z(x):
    print x * x

f(5, z)

