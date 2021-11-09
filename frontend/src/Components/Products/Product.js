import React from 'react'
import {Card, CardMedia, CardContent, Typography} from '@mui/material';


// import Typography from '@mui/material/Typography';
// import { Button, CardActionArea, CardActions } from '@mui/material';
// import { typography } from '@mui/system';


export function CardProduct () {

  const products = [
    {Name:"Blood Moon", Description: " berries, spice, and life", Id: 9165, Price:"$3.25", PriceLarge: '$8.99'},
    {Name:"Holiday", Description: "Yellow energy from the sun ", Id:4728, Price:"$3.25", PriceLarge: '$8.99'},
    {Name:"Abundant Earth", Description: " Green is clean", Id:32416 , Price:"$3.25", PriceLarge: '$8.99'},  
    {Name:"Seasonal", Description: " Cylce of variables", Id: 71177, Price:"$3.25", PriceLarge: '$8.99'},
    {Name: "Florals for spring? Groundbreaking!", Description: "The notorious floral escape", Id: 59212, Price:"$3.50", PriceLarge: '$9.99', }
  ];

  
  return (
    <>
    { products.map((kombuchaDrink) => (
       <Card sx={{ maxWidth: 345 }}>
       
    
        <CardContent>
         
          <Typography gutterBottom variant="h5" component="div">
           
          
            {kombuchaDrink.Name} {kombuchaDrink.Price}
          </Typography>
            
          </CardContent>
        </Card>
        ))}
           
    
  
  </>
  )
}


