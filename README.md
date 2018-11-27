# Introduction
Implement design patterns in javascript.

# Factory patterns

## Simple factory

If we want to make many products of the same category,  we can make a factory class to help us.
We make products through the api instead of `new`. 

The benefits are clear: if we want to make some change, we just need to update the factory create interface.

**Summary** : `Simple Factory` is a factory that only creates one kind of products.


## Factory method

There is an abstract factory class which just defines the actions of concrete classes.
And the instances will be created in the concrete classes.

**Summary** : `Factory method` abstract the factory class, the concrete instances are implemented in the concrete factory classes.


## Abstract factory

Abstract the factory class and product class. The real factory classes will be extended from the abstract factory class, and the real product classes will be extended from the abstract factory class.

**Summary** : `Abstract factory` abstract both factory class and product class, the concrete factory class can create concrete products.


## Builder

Using `constructor` to create instances. At first, we create one instance, then change this instance step by step.


## Singleton
Only one instance can be created.


# Structural patterns

## Adapter

Adapter pattern lets you wrap an otherwise incompatible object in an adapter to make it compatible with another class.

**Summary** : The animals have different yelling types, after using the `Adapter`, all the animals can have only one type of yelling type.


## Bridge

Bridge pattern is about preferring composition over inheritance. Implementation details are pushed from a hierarchy to another object with a separate hierarchy.

**Summary** : `Bridge` split different features into different classes. For example, a water color pen may have two  main features: color and size. So we can make `Color` and `Size` as classes. 

## Composite

Composite pattern lets clients to treat the individual objects in a uniform manner.

**Summary** : `Composite` is like a organization that can have some actions at the level of groups.
For example, one company have many employees, though their positions are different, they have something in common, like calculate the
whole company's average salary.


## Decorator

Decorator pattern lets you dynamically change the behavior of an object at run time by wrapping them in an object of a decorator class.

**Summary** : `Decorator` is a class which extends the instance's abilities.

## Facade

Facade pattern provides a simplified interface to a complex subsystem.

**Summary** : `Facade` tells you to package complex things together.

## Flyweight

It is used to minimize memory usage or computational expenses by sharing as much as possible with similar objects.


## Proxy

It's like a puppet, you can control it with lines. The lines are like `proxy`, the controller just need to interact with the lines.

**Summary** : `Proxy` is a class in the middle level, the user don't need to interact with the bottom class directly.


# Behavioral Design Patterns

## Chain of Responsibility

It helps building a chain of objects. Request enters from one end and keeps going from object to object till it finds the suitable handler.

**Summary** : `Chain of Responsibility` looks like pipes that are linked up, the water flows from one to another.

## Command

Allows you to encapsulate actions in objects. The key idea behind this pattern is to provide the means to decouple client from receiver.

**Summary** : There are three main characters: receiver, invoker, command. The invoker just send the command, the receiver really reseponse the command.

## Iterator

In object-oriented programming, the iterator pattern is a design pattern in which an iterator is used to traverse a container and access the container's elements. The iterator pattern decouples algorithms from containers in some cases, algorithms are necessarily container-specific and thus cannot be decoupled.

**Summary** : The user can visit each elements in the container.


## Mediator

Mediator pattern adds a third party object (called mediator) to control the interaction between two objects (called colleagues). It helps reduce the coupling between the classes communicating with each other. Because now they don't need to have the knowledge of each other's implementation.

**Summary** : It's like when we are talking to someone on the phone, the phone is a `Mediator`. We can find mediators everywhere in real wolrd.

## Memento

The memento pattern is a software design pattern that provides the ability to restore an object to its previous state (undo via rollback).

**Summary** : When we are editing a Word document, if we type something wrong, we can press `ctrl + z` to undo the current aciton, and go back to the previous state.

## Observer

Defines a dependency between objects so that whenever an object changes its state, all its dependents are notified.

**Summary** : You tell your friend if he/she is going to swim, call you. You two communicate with each other directly.

## Publisher and Subscriber

It's different from  `Observer` pattern. In observer pattern, the observer and subject know each other. But in this pattern, the relation looks like `Publisher <--> Pub <--> Subscriber` , the pubslisher and subscriber don't interact directly. They communicate through `Pub` which is like a message center.

**Summary** : You subscribe some wechat channels, the authors publish articles to the platform, and you receive the notices from the platform.

## Visitor

In object-oriented programming and software engineering, the visitor design pattern is a way of separating an algorithm from an object structure on which it operates. A practical result of this separation is the ability to add new operations to existing object structures without modifying those structures. It is one way to follow the open/closed principle.

**Summary** : Imagine you can walk/jump/run, and one day you learned how to swim, we just modify the `actions`, no need to modify `you`.

## Strategy

In computer programming, the strategy pattern (also known as the policy pattern) is a behavioural software design pattern that enables an algorithm's behavior to be selected at runtime.

**Summary** : Strategy pattern allows you to switch the algorithm or strategy based upon the situation.

## State

The state pattern is a behavioral software design pattern that implements a state machine in an object-oriented way. With the state pattern, a state machine is implemented by implementing each individual state as a derived class of the state pattern interface, and implementing state transitions by invoking methods defined by the pattern's superclass. The state pattern can be interpreted as a strategy pattern which is able to switch the current strategy through invocations of methods defined in the pattern's interface.

**Summary** : It lets you change the behavior of a class when the state changes.

## Template Method

In software engineering, the template method pattern is a behavioral design pattern that defines the program skeleton of an algorithm in an operation, deferring some steps to subclasses. It lets one redefine certain steps of an algorithm without changing the algorithm's structure.

**Summary** : If you want to build a house, the basic steps are always the same, so we define the steps together.
