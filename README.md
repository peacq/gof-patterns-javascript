# Design Patterns JavaScript

Collection of 23 (GoF) design patterns implemented in JavaScript using both prototype and ES6 classes.

## Patterns

The patterns can be divided in three different categories.

### [Creational](src/creational)

Creational patterns provide ways to instantiate single objects or groups of related objects.

* [Abstract Factory](src/creational/abstractFactory) - provides an interface for creating families of related or dependent objects without specifying their concrete classes. [Read more.](http://robdodson.me/javascript-design-patterns-factory/)

* [Builder](src/creational/builder) - separates the construction of a complex object from its representation, allowing the same construction process to create various representations. [Read more.](http://dealwithjs.io/design-patterns-the-builder-pattern-in-javascript/)

* [Factory method](src/creational/factoryMethod) - defines an interface for creating a single object, but let subclasses decide which class to instantiate. Factory Method lets a class defer instantiation to subclasses. [Read more.](http://robdodson.me/javascript-design-patterns-factory/)

* [Prototype](src/creational/prototype) - specify the kinds of objects to create using a prototypical instance, and create new objects from the 'skeleton' of an existing object, thus boosting performance and keeping memory footprints to a minimum. [Read more.](http://www.dofactory.com/javascript/prototype-design-pattern)

* [Singleton](src/creational/singleton) - ensure a class has only one instance, and provide a global point of access to it. [Read more.](http://robdodson.me/javascript-design-patterns-singleton/)

### [Structural](src/structural) 

Structural patterns concern class and object composition. They use inheritance to compose interfaces and define ways to compose objects to obtain new functionality.

* [Adapter](src/structural/adapter) - allows classes with incompatible interfaces to work together by wrapping its own interface around that of an already existing class. [Read more.](https://thejsguy.com/2015/10/16/the-adapter-pattern-in-javascript.html)

* [Bridge](src/structural/bridge) - decouples an abstraction from its implementation so that the two can vary independently. [Read more.](https://www.joezimjs.com/javascript/javascript-design-patterns-bridge/)

* [Composite](src/structural/composite) - composes zero-or-more similar objects so that they can be manipulated as one object. [Read more.](https://www.joezimjs.com/javascript/javascript-design-patterns-composite/)

* [Decorator](src/structural/decorator) - dynamically adds/overrides behaviour in an existing method of an object. [Read more.](http://robdodson.me/javascript-design-patterns-decorator/)

* [Facade](src/structural/facade) - provides a simplified interface to a large body of code. [Read more.](https://www.joezimjs.com/javascript/javascript-design-patterns-facade/)

* [Flyweight](src/structural/flyweight) - reduces the cost of creating and manipulating a large number of similar objects. [Read more.](http://www.dofactory.com/javascript/flyweight-design-pattern)

* [Proxy](src/structural/proxy) - provides a placeholder for another object to control access, reduce cost, and reduce complexity. [Read more.](http://www.dofactory.com/javascript/proxy-design-pattern)

### [Behavioral](src/behavioral)

* [Chain of responsibility](src/behavioral/chainOfResp) - delegates commands to a chain of processing objects. [Read more.](https://www.joezimjs.com/javascript/javascript-design-patterns-chain-of-responsibility/)

* [Command](src/behavioral/command) - creates objects which encapsulate actions and parameters. [Read more.](https://www.joezimjs.com/javascript/javascript-design-patterns-command/)

* [Interpreter](src/behavioral/interpreter) - implements a specialized language. [Read more.](http://www.dofactory.com/javascript/interpreter-design-pattern)

* [Iterator](src/behavioral/iterator) - accesses the elements of an object sequentially without exposing its underlying representation. [Read more.](http://robdodson.me/javascript-design-patterns-iterator/)

* [Mediator](src/behavioral/mediator) - allows loose coupling between classes by being the only class that has detailed knowledge of their methods. [Read more.](http://www.dofactory.com/javascript/mediator-design-pattern)

* [Memento](src/behavioral/memento) - provides the ability to restore an object to its previous state (undo). [Read more.](http://www.dofactory.com/javascript/memento-design-pattern)

* [Observer](src/behavioral/observer) - is a publish/subscribe pattern which allows a number of observer objects to see an event. [Read more.](https://medium.com/@patrickackerman/the-observer-pattern-with-vanilla-javascript-8f85ea05eaa8)

* [State](src/behavioral/state) - allows an object to alter its behavior when its internal state changes. [Read more.](https://medium.com/@patrickackerman/the-state-pattern-with-vanilla-javascript-e40ff83e85d0)

* [Strategy](src/behavioral/strategy) - allows one of a family of algorithms to be selected on-the-fly at runtime. [Read more.](http://robdodson.me/javascript-design-patterns-strategy/)

* [Template](src/behavioral/template) - method defines the skeleton of an algorithm as an abstract class, allowing its subclasses to provide concrete behavior. [Read more.](https://thejsguy.com/javascript/design%20patterns/2015/01/01/template-method-pattern.html)

* [Visitor](src/behavioral/visitor) - separates an algorithm from an object structure by moving the hierarchy of methods into one object. [Read more.](http://www.dofactory.com/javascript/visitor-design-pattern)