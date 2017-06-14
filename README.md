# Design Patterns JavaScript

Collection of 23 (GoF) design patterns implemented in JavaScript using both prototype and ES6 classes.

## Patterns

The patterns can be divided in three different categories.

### Creational

Creational patterns provide ways to instantiate single objects or groups of related objects.

* [Abstract Factory](src/creational/abstractFactory) - provides an interface for creating families of related or dependent objects without specifying their concrete classes. [Read more.](http://robdodson.me/javascript-design-patterns-factory/)

* [Builder](src/creational/builder) - separates the construction of a complex object from its representation, allowing the same construction process to create various representations. [Read more.](http://dealwithjs.io/design-patterns-the-builder-pattern-in-javascript/)

* [Factory method](src/creational/factoryMethod) - defines an interface for creating a single object, but let subclasses decide which class to instantiate. Factory Method lets a class defer instantiation to subclasses. [Read more.](http://robdodson.me/javascript-design-patterns-factory/)

* [Prototype](src/creational/prototype) - specify the kinds of objects to create using a prototypical instance, and create new objects from the 'skeleton' of an existing object, thus boosting performance and keeping memory footprints to a minimum. [Read more.](http://www.dofactory.com/javascript/prototype-design-pattern)

* [Singleton](src/creational/singleton) - ensure a class has only one instance, and provide a global point of access to it. [Read more.](http://robdodson.me/javascript-design-patterns-singleton/)

### Structural

### Behavioral