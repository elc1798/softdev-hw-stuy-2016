import random

def pt(n):
    """
    Generates all pythagorean triplets less than n
    """
    retval = []
    for a in range(1, n):
        for b in range(a, n):
            for c in range(b, n):
                if a * a + b * b == c * c:
                    retval.appen([a,b,c])
    return retval

def pt2(n):
    """
    Better way to do pt(n)
    """
    return [(a,b,c) for a in range(1, n) for b in range(a, n) for c in range(b, n) if a*a + b*b == c*c]

