# Queue

A queue is a linear data structure that is open at both ends and the operations are performed in First In First Out (FIFO) order.

We define a queue to be a list in which all additions to the list are made at one end, and all deletions from the list are made at the other end.  The element which is first pushed into the order, the operation is first performed on that.

__FIFO( First In First Out)/LILO( Last In Last Out):__

This strategy states that the item that is inserted first also comes out first. Queues are great for loading things to process later. One good example in gaming are RTS (Real-Time Strategy) games where you queue up workers to manipulate resources. 

## Basic Operations on a Queue

In order to make manipulations on a queue, there are certain operations provided to us.

> __push()__ inserts an item to the end of the queue..
> __pop()__ removes an an item from the queue.
> __peekFront()__ returns a copy of the item available at the front node of the queue without deleting or removing it.
> __peekRear()__ returns a copy of the item available at the rear node of the queue without deleting or removing it.
> __isEmpty()__ returns true whether the queue is empty.
> __isFull()__ returns true whether the queue is full.

### Push

Algorithm for push:

```
begin
 if stack isFull
    return Overflow Condition
 endif
else  
 increment rearPointer
 queue[rearPointer] assign value
 increase length
end else
end procedure
```

### Pop

Algorithm for pop:

```
begin
placeholder for front item
if stack isEmpty
    return Underflow Condition
 endif
else  
 placeholder = peakFront()
 increment frontPointer
 decrease length
end else
return placeholder
end procedure
```

### PeekFront

Algorithm for PeekFront:

```
begin 
  return queue[frontPointer]
end procedure
```

### PeekRear

Algorithm for PeekRear:

```
begin 
  return queue[rearPointer]
end procedure
```

### isEmpty

Algorithm for isEmpty:

```
begin
 if length == 0
    return true
 else
    return false
end procedure
```

### isFull

Algorithm for isFull:

```
begin
 if length == max
    return true
 else
    return false
end procedure
```
