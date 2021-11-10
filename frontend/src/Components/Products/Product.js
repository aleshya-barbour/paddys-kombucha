import React from 'react'
import {Card, CardMedia, CardContent, Typography, CardActions, Button} from '@mui/material';


<img width="100" alt ="kombucha" height="200" src="://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh9hejjotJbTsLNCMVxIypdKuodVKAB3Pivw&usqp=CAU"></img>

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
       
        <CardMedia
          component="img"
          alt="kombucha"
          height="140"
          image="https://media.istockphoto.com/photos/fermented-strawberry-kombucha-tea-with-bottles-picture-id1294202740?b=1&k=20&m=1294202740&s=170667a&w=0&h=8BrBAXD-5uroYOwfeVGGdK610NJhGKPg-mkYZh_ckU4="
        />
        <CardContent>
         
          <Typography gutterBottom variant="h5" component="div">
            {kombuchaDrink.Name}
          </Typography>

          <Typography variant="body2" color="text.secondary">
            {kombuchaDrink.Description} 
          </Typography>
            
          </CardContent>
          <CardActions>
            <Button size="small" color="error" variant="contained">
              Buy
            </Button>
          </CardActions>
        </Card>
        ))}
           
    
  
  </>
  )
}


