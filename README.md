# Introduction
Implement design patterns in javascript.

# Factory patterns

## Simple factory

If we want to make many products of the same category,  we can make a factory class to help us.
We make products through the api instead of `new`. 

The benefits are clear: if we want to make some change, we just need to update the factory create interface.

**Summary in short** : `Simple Factory` is a factory that only creates one kind of products.


## Factory method

There is an abstract factory class which just defines the actions of concrete classes.
And the instances will be created in the concrete classes.

**Summary in short** : `Factory method` abstract the factory class, the concrete instances are implemented in the concrete factory classes.


## Abstract factory

Abstract the factory class and product class. The real factory classes will be extended from the abstract factory class, and the real product classes will be extended from the abstract factory class.

**Summary in short** : `Abstract factory` abstract both factory class and product class, the concrete factory class can create concrete products.


## Builder
Using `constructor` to create instances. At first, we create one instance, then change this instance step by step.


## Singleton
Only one instance can be created.



