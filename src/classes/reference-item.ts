import { timeout } from "../decorators";

export abstract class ReferenceItem {
    // title: string;
    // year: number;

    private _publisher: string;

    get publisher(): string {
        return this._publisher.toUpperCase();
    }

    set publisher(newPublisher: string) {
        this._publisher = newPublisher;
    }

    static department: string = 'Research';

    // constructor(newTitle: string, newYear: number) {
    //     console.log('Creating a new ReferenceItem...');
    //     this.title = newTitle;
    //     this.year =  newYear;
    // }

    constructor(public title: string, protected year: number) {
        console.log('Creating a new ReferenceItem...');
    }

    @timeout(10)
    printItem(): void {
        console.log(`${this.title} was published in ${this.year}`);
        console.log(`Department ${ReferenceItem.department}`)
    }
    abstract printCitation(): void;
}