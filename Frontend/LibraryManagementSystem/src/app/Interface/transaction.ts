import { Book } from "./book";
import { customer } from "./customer";

export interface transaction{
    "transactionID":number,
    "bookID":number,
    "customerID":number,
    "transactionDate":Date,
    "dueDate":Date,
    "returnDate":Date
}