def union(L1, L2):
    """
    Returns the union of the 2 sets, L1 and L2
    """
    return [ i for i in L1 if i not in L2 ] + L2

print "Union Tests:"
print union([1,2,3,4,5], [2,7,10,1,5])

def intersection(L1, L2):
    """
    Returns the intersection of the 2 sets, L1 and L2
    """
    return [ i for i in L1 if i in L2 ]

print "Intersection Tests:"
print intersection([1,2,3,4,5,6,7,8], [1,2,5,6,7,10,17,19])

def set_difference(L1, L2):
    """
    Returns all elements in L1 that are not in L2
    """
    return [ i for i in L1 if i not in L2 ]

print "Set Difference Tests:"
print set_difference([1,2,3,4,5,6], [2,4,6])

def symmetric_difference(L1, L2):
    """
    Returns all elements that are in a single set, but not both
    """
    return set_difference(union(L1, L2), intersection(L1, L2))

print "Symmetric Difference Tests:"
print symmetric_difference([1,2,3,4,5,6,7], [2,3,4,5])

def cartesian_product(L1, L2):
    """
    Returns all possible pairs of elements of L1 and L2.
    """
    return [ (i, j) for i in L1 for j in L2 ]

print "Cartesian Product Tests:"
print cartesian_product([1, 2, 3], ["white", "red", "blue"])

