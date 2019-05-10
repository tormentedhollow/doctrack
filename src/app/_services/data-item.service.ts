import { Injectable, EventEmitter } from '@angular/core';
import { BehaviorSubject, Observable } from "rxjs";

export class Document {
    constructor(
        public id?: string, 
        public purpose?: string, 
        public items?: {id: number, name: string, unit: string, qty: number, cost: number}[]

        ) {
    }
}

@Injectable()
export class DataItemService {

    private _selectedId;

    getAllDocument(): Document[] {
        return [
            { id: 'PMED-120', purpose: "For PMED's use", items: [
                {id: 1, name: 'Paper, A-4', qty: 88, cost: 180, unit: 'rem'}
            ]},
            { id: 'PMED-121', purpose: "Catering Service", items: [
                {id: 1, name: 'Breakfast', qty: 88, cost: 180, unit: 'rem'}
            ]},

        ];
    }

    setSelectedId(id: string) {
        this._selectedId = id;
    }

    getDocument(id: string): Document {
        return this.getAllDocument().filter(doc => doc.id === id)[0];
    }

    getSelected(): Document {
        return this._selectedId < 0 ? null : this.getDocument(this._selectedId);
    }
}