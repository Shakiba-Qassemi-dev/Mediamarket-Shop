import Section from "@/components/Section";
import Slider from "@/components/Slider";
import { List, ListItem } from "@mui/material";
import { Box, Typography ,Grid } from "@mui/material";
import Link from "next/link"
async function getData(url) {
  const res = await fetch(url);
  return res.json();
}

export default async function Main() {
  let data = await getData("https://69170ff0a7a34288a27f6670.mockapi.io/products")
  return (
    <>
      <Box component='section' className="h-[400px] mt-32 md:w-[80%] w-full mx-auto">
        <Slider />
      </Box>

      <Box component='section' className="w-[80%] mx-auto flex flex-col md:flex-row justify-between items-center gap-2 mt-10">
        <Section />
      </Box>
      <Box component='section' className="flex justify-start items-start w-[80%] mx-auto mt-11">
        <Typography component='h1' variant="h5" className="text-2xl text-red-700">New product</Typography>
      </Box>
      <Grid
          item
          xs={12}     // موبایل → یک ستون
          sm={6}      // تبلت → دو ستون
          md={4}      // لپ‌تاپ → سه ستون
          lg={3}      // مانیتور → چهار ستون
          sx={{ display: "flex", justifyContent: "center" }}
        >
       <List   sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent:{
        xs: "center",   // موبایل
        sm: "center",   // تبلت
        md: "space-between", 
        },
        alignItems: "center",
        gap: 3,
        width: "80%",
        mx: "auto",
        mt: 5,
        padding: 0,
      }}>
        {data && data.map((val) => {
          let myUrl = val.id + '-' + val.name;
          return (
            <ListItem key={val.id}  sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: 200,
              height: 300,
              p: 1,
              gap: 2,
              border: "2px solid #d1d5db",
              borderRadius: "12px",
              transition: "0.2s",
              "&:hover": {
                boxShadow: 6,
              },
            }}>
              <Link href={myUrl} style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "4px",
                  gap: "16px",
                }}>
                <Box component='img' src={val.image} sx={{
                    width: 150,
                    height: 150,
                    objectFit: "contain",
                  }} ></Box>
               <Typography variant="h6" component="h1" sx={{fontSize:'15px'}}>
                  {val.name}
                </Typography>

                <Typography variant="h6" component="h1" sx={{fontSize:'15px'}}>
                  {val.price}
                </Typography>
              </Link>
            </ListItem>
          )
        })}
      </List>
      </Grid>
        
    </>
  )
}