import { pgTable, serial, varchar, json, integer } from "drizzle-orm/pg-core";


export const CarListing= pgTable ('carListing',{
    id:serial('id').primaryKey(),
    listingTitle:varchar('listingTitle').notNull(),
    TagLine:varchar('TagLine'),
    originalPrice:varchar('originalPrice'),
    sellingPrice:varchar('sellingPrice').notNull(),
    category:varchar('category').notNull(),
    condition:varchar('condition').notNull(),
    make:varchar('make').notNull(),
    model:varchar('model').notNull(),
    year:varchar('year').notNull(),
    driveType:varchar('driveType').notNull(),
    transmission:varchar('transmission').notNull(),
    fuelType:varchar('fuelType').notNull(),
    mileage:varchar('mileage').notNull(),
    engineSize:varchar('engineSize'),
    cylinder:varchar('cylinder'),
    color:varchar('color').notNull(),
    door:varchar('door').notNull(),
    vin:varchar('vin'),
    offerType:varchar('offerType'),
    listingDescription:varchar('listingDescription').notNull(),
    features:json('features'),
    createdBy:varchar('createdBy').notNull(),
    postedOn:varchar('postedOn')
})


<<<<<<< HEAD
export const carpictures= pgTable ('carpictures',{
=======
export const CarImages= pgTable ('carImages',{
>>>>>>> 63afb77ae8ce13b94dd24c066cea83f4298185a7
    id:serial('id').primaryKey(),
    imageUrl:varchar('imageUrl').notNull(),
    CarListingId:integer('carListingId').notNull().references(()=> CarListing.id)
})