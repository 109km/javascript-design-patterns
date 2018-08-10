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

