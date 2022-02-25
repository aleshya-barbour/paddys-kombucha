import React from 'react'
import {Card, Grid, CardContent, Typography, CardActions, Button} from '@mui/material';
import stripHtml from 'cli-strip-html'




 const ProductItem = ({ product, onAddToCart }) => {

   const result  = stripHtml(product.description)

   const handleAddToCart = () => {
     onAddToCart(product.id, 1)
   }
 
   
    return (

      <div id="products" className="product__cart">
        <Grid  container
          direction="column"
          justifyContent="center"
          alignItems="center" 
          spacing={{ xs: 1, md: 4 }} 
          columns={{ xs: 4, sm: 8, md: 12 }}
        >  
          
          <Grid item xs={2} sm={4} md={4} >
          <Card sx={{ maxWidth: 345 }}>
          
           <img className="Product__card" src={product.image.url} alt={product.name} />
            <CardContent>
              
              <Typography gutterBottom variant="h5" component="div">
                <h4>{product.name}</h4>
              </Typography>

              <Typography variant="body2" color="text.secondary">  
                {result}
              </Typography>
                
              </CardContent>
              <CardActions>
                <Button 
                size="small" 
                color="error" 
                variant="contained"
                name="Add to cart"
                className="buy__btn"
                onClick={handleAddToCart}
                >
                  Buy
                </Button>
              </CardActions>
            </Card>
            </Grid>
            
          </Grid>
      
    
    </div>
  )
  }

export default ProductItem;


