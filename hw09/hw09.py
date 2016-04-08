from time import time
from time import sleep
from random import randint

def timer(func):
    def stopwatch(*args):
        start = time()
        func_retval = func(*args)
        end = time()
        print "%s ran in %f ms" % (func.__name__, end - start)
        return func_retval
    return stopwatch

def arg_printer(func):
    def printargs(*args):
        print "Running %s with args: " % (func.__name__) + str(args)
        return func(*args)
    return printargs

@timer
@arg_printer
def randomSleep():
    sleep_time = randint(1, 10)
    sleep(sleep_time)
    return sleep_time

print randomSleep()

