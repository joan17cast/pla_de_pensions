/**
 * The builder interface specifies mthods for creating the different
 * parts of the product objects
 */

export interface Builder {
    producePartA(): void;
    producePartB(): void;
    producePartC(): void;
}
