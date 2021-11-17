import React, { Component } from 'react'
import {Card, Grid, CardMedia, CardContent, Typography, CardActions, Button} from '@mui/material';



class Product extends Component {
  constructor(props) {
    super(props);

    this.handleAddToCart = this.handleAddToCart.bind(this);

  }
  handleAddToCart() {
    this.props.onAddToCart(this.props.product, 1);
  }
  render(){

    const products = [
      {Name:"Blood Moon", Description: " berries, spice, and life", Id: 9165, Price:"$3.25", PriceLarge: '$8.99'},
      {Name:"Holiday", Description: "Yellow energy from the sun ", Id:4728, Price:"$3.25", PriceLarge: '$8.99'},
      {Name:"Abundant Earth", Description: " Green is clean", Id:32416 , Price:"$3.25", PriceLarge: '$8.99'},  
      {Name:"Abundant Earth", Description: " Green is clean", Id:32416 , Price:"$3.25", PriceLarge: '$8.99'},
      {Name:"Seasonal", Description: " Cylce of variables", Id: 71177, Price:"$3.25", PriceLarge: '$8.99'},
      {Name: "Florals for spring?", Description: "Ground Breaking!", Id: 59212, Price:"$3.50", PriceLarge: '$9.99', }
    ];
    
    

    
 
  
    return (

      <div id="products" className="produk">
        <Grid  container
          direction="column"
          justifyContent="center"
          alignItems="center" 
          spacing={{ xs: 1, md: 4 }} 
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
        { products.map((kombuchaDrink) => (
          <Grid item xs={2} sm={4} md={4} >
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
                <Button 
                size="small" 
                color="error" 
                variant="contained"
                name="Add to cart"
                className="buy__btn"
                onClick={this.handleAddToCart}
                >
                  Buy
                </Button>
              </CardActions>
            </Card>
            </Grid>
            ))}
          </Grid>
      
    
    </div>
  )
}

}
export default Product;


