import { ReferenceItem } from '../classes';
import { positiveInteger } from '../decorators';

export default class Encyclopedia extends ReferenceItem {
    private _copies: number;

    @positiveInteger 
    get copies(): number {
        return this.copies;
    }

    set copies(value: number) {
        this._copies = value;
    }

    constructor(title: string, year: number, public edition: number) {
        super(title, year);
    }

    printItem(): void {
        super.printItem();
        console.log(`Edition: ${this.edition} ${this.year}`)
    }

    printCitation(): void {
        console.log(`${this.title} - ${this.year}`)
    }
}