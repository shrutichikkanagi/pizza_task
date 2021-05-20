export interface Orders {
    id?: Number,
    Customer_Name?: String,
    No_Of_Items:Number,
    Total:Number,
    Status:String,
    Delivery_Address:String,
    Items?:Items[]
    
}

interface Items{
   itemName:String;
   Itemprice:Number
}
