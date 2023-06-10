import { Schema, model } from 'mongoose';
export const leftoversModel = model('Leftovers', new Schema({
    cityName: { type: String, unique: true, required: true },
    leftovers: [
        {
            nomenclature: { type: String, required: true },
            unit: { type: String, required: true },
            orderedCount: { type: Number },
            leftoverAtEnd: { type: Number, required: true },
            vendorCode: { type: String },
            incoming: { type: Number },
            consumption: { type: Number },
            leftoverAtStart: { type: Number },
        },
    ],
}));
// root
// jk2CKqcsRqFaVOdY
