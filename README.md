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

**Summary in short** : `Factory method` abstract the creator class, the concrete instances are implemented in the concrete creator classes.


## Abstract factory

