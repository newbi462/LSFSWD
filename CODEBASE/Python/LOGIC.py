# and !== &&, or the word "and" operator

# or !== ||, or the word "or" as the operator

# not !== !, or the word "not" as the operator


# to log use "print"
print("Hello, world!")



# cheet sheet  https://github.com/LambdaSchool/CS-Wiki/wiki/Javascript-Python-cheatsheet


## TURTLE HAIR LOGIC
class Node:
    def __init__(self, value, next=None):
        self.value = value
        self.next = next
four = Node(4)
three = Node(3, four)
two = Node(2, three)
one = Node(1, two)
head_node = Node(0, one)
def find_middle(head):
    fast_pointer = head
    slow_pointer = head
    while fast_pointer.next is not None:
        fast_pointer = fast_pointer.next
        if fast_pointer.next is None:
            return slow_pointer
        fast_pointer = fast_pointer.next
        slow_pointer = slow_pointer.next
    return slow_pointer
print(find_middle(head_node).value)
## need to look at how th slow/fast log iterated flex point




# recurshion
def recusion(key_to_check_for):
    try:
        #print(keys[ str(key_to_check_for) ][0])
        hold = keys[ str(key_to_check_for) ]
        keys["count"] += 1
        recusion(keys[ str(key_to_check_for) ][0])
    except KeyError:
        #print(f"recusion faild {key_to_check_for}")
        #print(key_to_check_for)
        if keys["count"] > 0:
            keys["result"] = key_to_check_for
        else:
            keys["result"] = -1


recusion(starting_node)
