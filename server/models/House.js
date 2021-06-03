import { Schema } from "mongoose";

const House = new Schema(
  {
    bedrooms: {type: Number, required: true},
    bathrooms: {type: Number, required: true},
    price: {type: Number, required: true},
    year: {type: Number, required: true},
    description: {type: String, required: true},
    imgUrl: {type: String, default: "https://www.pinclipart.com/picdir/middle/548-5480712_generic-placeholder-image-transparent-car-accident-icon-clipart.png" }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default House


