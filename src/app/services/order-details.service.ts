import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }
  // fooddetails
  foodDetails = [
    {
      id: 1,
      foodName: "Paneer Grilled Sandwich",
      foodDetails: "Pan-fried masala paneer.",
      foodPrice: 200,
      foodImg: "https://res.cloudinary.com/swiggy/image/upload/f1_lossy,f_auto,q_auto,w_1024/wzfq7djolqxgdhghebbq"
    },
    {
      id: 2,
      foodName: "Paneer Grilled Sandwich",
      foodDetails: "Pan-fried masala paneer.",
      foodPrice: 300,
      foodImg: "https://res.cloudinary.com/swiggy/image/upload/f1_lossy,f_auto,q_auto,w_1024/wzfq7djolqxgdhghebbq"
    },
    {
      id: 4,
      foodName: "Paneer Grilled Sandwich",
      foodDetails: "Pan-fried masala paneer.",
      foodPrice: 400,
      foodImg: "https://res.cloudinary.com/swiggy/image/upload/f1_lossy,f_auto,q_auto,w_1024/wzfq7djolqxgdhghebbq"
    },
    {
      id: 5,
      foodName: "Paneer Grilled Sandwich",
      foodDetails: "Pan-fried masala paneer.",
      foodPrice: 500,
      foodImg: "https://res.cloudinary.com/swiggy/image/upload/f1_lossy,f_auto,q_auto,w_1024/wzfq7djolqxgdhghebbq"
    },
    {
      id: 6,
      foodName: "Paneer Grilled Sandwich",
      foodDetails: "Pan-fried masala paneer.",
      foodPrice: 600,
      foodImg: "https://res.cloudinary.com/swiggy/image/upload/f1_lossy,f_auto,q_auto,w_1024/wzfq7djolqxgdhghebbq"
    },
    {
      id: 7,
      foodName: "Paneer Grilled Sandwich",
      foodDetails: "Pan-fried masala paneer.",
      foodPrice: 700,
      foodImg: "https://res.cloudinary.com/swiggy/image/upload/f1_lossy,f_auto,q_auto,w_1024/wzfq7djolqxgdhghebbq"
    },
    {
      id: 8,
      foodName: "Paneer Grilled Sandwich",
      foodDetails: "Pan-fried masala paneer.",
      foodPrice: 800,
      foodImg: "https://res.cloudinary.com/swiggy/image/upload/f1_lossy,f_auto,q_auto,w_1024/wzfq7djolqxgdhghebbq"
    },
    {
      id: 9,
      foodName: "Paneer Grilled Sandwich",
      foodDetails: "Pan-fried masala paneer.",
      foodPrice: 900,
      foodImg: "https://res.cloudinary.com/swiggy/image/upload/f1_lossy,f_auto,q_auto,w_1024/wzfq7djolqxgdhghebbq"
    },
    {
      id: 10,
      foodName: "Paneer Grilled Sandwich",
      foodDetails: "Pan-fried masala paneer.",
      foodPrice: 1000,
      foodImg: "https://res.cloudinary.com/swiggy/image/upload/f1_lossy,f_auto,q_auto,w_1024/wzfq7djolqxgdhghebbq"
    },
    {
      id: 11,
      foodName: "Paneer Grilled Sandwich",
      foodDetails: "Pan-fried masala paneer.",
      foodPrice: 400,
      foodImg: "https://res.cloudinary.com/swiggy/image/upload/f1_lossy,f_auto,q_auto,w_1024/wzfq7djolqxgdhghebbq"
    },
    {
      id: 12,
      foodName: "Paneer Grilled Sandwich",
      foodDetails: "Pan-fried masala paneer.",
      foodPrice: 200,
      foodImg: "https://res.cloudinary.com/swiggy/image/upload/f1_lossy,f_auto,q_auto,w_1024/wzfq7djolqxgdhghebbq"
    },
    {
      id: 13,
      foodName: "Paneer Grilled Sandwich",
      foodDetails: "Pan-fried masala paneer.",
      foodPrice: 500,
      foodImg: "https://res.cloudinary.com/swiggy/image/upload/f1_lossy,f_auto,q_auto,w_1024/wzfq7djolqxgdhghebbq"
    },
    {
      id: 14,
      foodName: "Paneer Grilled Sandwich",
      foodDetails: "Pan-fried masala paneer.",
      foodPrice: 600,
      foodImg: "https://res.cloudinary.com/swiggy/image/upload/f1_lossy,f_auto,q_auto,w_1024/wzfq7djolqxgdhghebbq"
    },
    {
      id: 15,
      foodName: "Paneer Grilled Sandwich",
      foodDetails: "Pan-fried masala paneer.",
      foodPrice: 800,
      foodImg: "https://res.cloudinary.com/swiggy/image/upload/f1_lossy,f_auto,q_auto,w_1024/wzfq7djolqxgdhghebbq"
    },
    {
      id: 16,
      foodName: "Paneer Grilled Sandwich",
      foodDetails: "Pan-fried masala paneer.",
      foodPrice: 1200,
      foodImg: "https://res.cloudinary.com/swiggy/image/upload/f1_lossy,f_auto,q_auto,w_1024/wzfq7djolqxgdhghebbq"
    },
    {
      id: 17,
      foodName: "Paneer Grilled Sandwich",
      foodDetails: "Pan-fried masala paneer.",
      foodPrice: 600,
      foodImg: "https://res.cloudinary.com/swiggy/image/upload/f1_lossy,f_auto,q_auto,w_1024/wzfq7djolqxgdhghebbq"
    }
  ]

}
