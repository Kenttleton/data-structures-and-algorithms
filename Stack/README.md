# Stack

A stack is a linear data structure that follows a particular order in which the operations are performed.

To implement the stack, it is required to maintain the pointer to the top of the stack, which is the last element to be inserted because we can access the elements only on the top of the stack.

__LIFO( Last In First Out )/FILO( First In Last Out):__

This strategy states that the element that is inserted last will come out first and the first element inserted will come out last. You can take a deck of cards sitting on a table as a real-life example. The card which we put last is on the top and since we remove the card that is at the top, we can say that the card that was put last comes out first.

## Basic Operations on Stack

In order to make manipulations in a stack, there are certain operations provided to us.

> __push()__ to insert an item onto the top of the stack.
> __pop()__ to remove an item from the top of the stack.
> __top()__ returns the top item of the stack without removing the item.
> __isEmpty()__ returns true if stack is empty else false.
> __size()__ returns the size of stack.

### Push

Adds an item to the stack. If the stack is full, then it is said to be an Overflow condition. Normally in Javascript/Typescript we do not have to worry about stack limits but there is a physical limit of 4,294,967,295 (32 bit index limit) elements in practice. Most cases will not see this limit but to save on space limits should be considered.

Algorithm for push:

```
begin
 if stack is full
    return
 endif
else  
 increment top
 stack[top] assign value
end else
end procedure
```

### Pop

Removes an item from the stack. The items are popped in the reversed order in which they are pushed. If the stack is empty, then it is said to be an Underflow condition.

Algorithm for pop:

```
begin
 if stack is empty
    return
 endif
else
 store value of stack[top]
 decrement top
 return value
end else
end procedure
```

### Top

Returns the top item of the stack without removing the item from the stack.

Algorithm for Top:

```
begin 
  return stack[top]
end procedure
```

### isEmpty

Returns true if the stack is empty, else false.

Algorithm for isEmpty:

```
begin
 if top < 1
    return true
 else
    return false
end procedure
```

## Understanding stack practically

There are many real-life examples of a stack. Consider the simple example of a deck of cards stacked sitting on a table. The card which is at the top is the first one to be removed, i.e. the card which has been placed at the bottommost position remains in the stack for the longest period of time. So, it can be simply seen to follow the LIFO/FILO order.

__Complexity Analysis:__

| Operations | Time Complexity |
| - | - |
| push() | O(1) |
| pop() | O(1) |
| isEmpty() | O(1) |
| size() | O(1) |

### Types of Stacks

__Register Stack:__ This type of stack is also a memory element present in the memory unit and can handle a small amount of data only. The height of the register stack is always limited as the size of the register stack is very small compared to the memory.

__Memory Stack:__ This type of stack can handle a large amount of memory data. The height of the memory stack is flexible as it occupies a large amount of memory data.

### Applications of the stack

- Infix to Postfix /Prefix conversion
- Redo-undo features at many places like editors, photoshop.
- Forward and backward features in web browsers
- Used in many algorithms like Tower of Hanoi, tree traversals, stock span problems, and histogram problems.
- Backtracking is one of the algorithm designing techniques. Some examples of backtracking are the Knight-Tour problem, N-Queen problem, find your way through a maze, and game-like chess or checkers in all these problems we dive into some way if that way is not efficient we come back to the previous state and go into another path. To get back from a current state we need to store the previous state for that purpose we need a stack.
- In Graph Algorithms like Topological Sorting and Strongly Connected Components
- In Memory management, any modern computer uses a stack as the primary management for a running purpose. Each program that is running in a computer system has its own memory allocations
- String reversal is also another application of stack. Here one by one each character gets inserted into the stack. So the first character of the string is on the bottom of the stack and the last element of a string is on the top of the stack. After Performing the pop operations on the stack we get a string in reverse order.
- Stack also helps in implementing function calls in computers. The last called function is always completed first. Javascript uses a stack in the engine to run Javascript code.
- Stacks are also used to implement the undo/redo operation in text editor.

### Implementation of Stack

There are two ways to implement a stack

- Using array
- Using linked list