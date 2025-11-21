import React from 'react'
import { Box, Button, Typography } from '@mui/material';
import Link from 'next/link'
import { AppBar, Toolbar } from "@mui/material";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

export default function Header() {
  return (
   <>
   <AppBar
      position="fixed"
      sx={{
        backgroundColor: "red",
        height: "83px",
        top: 0,
        zIndex: 30,
        px: 3,
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "100%",
        }}
      >
        {/* لوگو */}
        <Box component='section' sx={{width: { xs: "70%", sm: "70%", md: "auto" }, }}>
        <Box component="img" src="/images/logo.webp" alt="logo" 
        sx={{ height: 50 }} />
        </Box>

        {/* لینک‌ها */}
        <Box sx={{ display: { xs: "none", sm: "none", md: "flex" }, gap: 4 , }}>
          <Link href="#" style={{ textDecoration: "none", color: "white" }}>
            <Typography sx={{ "&:hover": { borderBottom: "2px solid white" } }}>about us</Typography>
          </Link>
          <Link href="#" style={{ textDecoration: "none", color: "white"  }}>
            <Typography sx={{ "&:hover": { borderBottom: "2px solid white" } }}>products</Typography>
          </Link>
          <Link href="#" style={{ textDecoration: "none", color: "white" }}>
            <Typography sx={{ "&:hover": { borderBottom: "2px solid white" } }}>contact</Typography>
          </Link>
          <Link href="#" style={{ textDecoration: "none", color: "white" }}>
            <Typography sx={{ "&:hover": { borderBottom: "2px solid white" } }}>news</Typography>
          </Link>
          <Link href="#" style={{ textDecoration: "none", color: "white" }}>
            <Typography sx={{ "&:hover": { borderBottom: "2px solid white" } }}>company</Typography>
          </Link>
        </Box>
        <Box component='section' sx={{ width: { xs: "30%", sm: "30%", md: "auto" }, ml:{xs:'20px',sm:'20px', md:'0' }}}>
        <Link href="/basket" passHref>
        <Button
          variant="contained"
          color="secondary"
          startIcon={<ShoppingBasketIcon />}
          sx={{
            backgroundColor: "white",
            color: "red",
            fontWeight: "bold",
            "&:hover": { backgroundColor: "#f5f5f5" },
          }}
        >
          Basket
        </Button>
        </Link>
        </Box>
        
      </Toolbar>
    </AppBar>
   </>
  )
}
