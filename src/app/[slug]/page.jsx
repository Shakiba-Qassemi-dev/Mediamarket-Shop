import Link from "next/link"
import MyBtn from "./myBtn"
import { Box, Typography,Button } from "@mui/material";

async function getData(id){
    const res = await fetch(`https://69170ff0a7a34288a27f6670.mockapi.io/products/${id}`,{
        cache: "no-store",
      });
      console.log(res)
    
      if (!res.ok) {
        throw new Error("API ERROR");
      }
    
      return await res.json();
}

export default async function Main({params}){
    
    let myParams = await params
    let tempId = parseInt(myParams.slug)
    let data = await getData(tempId)
    const myTempObj ={
        id: data.id,
        name: data.name,
        price: data.price,
        img: data.image,
        count:1,
    }
    return(
        <>     
        <Box component='section' className="md:w-[80%] w-full mx-auto  mt-30 rounded-2xl flex flex-col-reverse md:flex-row justify-evenly items-center border-2 border-gray-300 p-7 gap-9 md:gap-0">
            <Box component='section' sx={{width:{xs:'100%', sm:'100%', md:'50%'} , display:'flex', flexDirection:'column',justifyContent:'flex-start' , gap:'20px'}}>
            <Typography component='h1' variant="h5">{data.name}</Typography>
            <Typography component='h1' variant="h6" sx={{fontSize:'17px'}}>{data.description}</Typography>
            <Typography component='h1' variant="h6">{data.price} TL</Typography>
            <Typography component='h1' variant="h6">4.5⭐</Typography>
            <Box component='section' className="flex justify-start items-start gap-4">
            <MyBtn myTempObj={myTempObj}/>
            <Link href='/basket' className="bg-red-500 px-6 py-3 text-white rounded-2xl">basket</Link>
            </Box>
            </Box>
            <Box component='section' className="md:w-1/2 w-full flex justify-center items-center hover">
            <img src={data.image} className="w-[400px] h-[400px] "/>
            </Box>
            
        </Box>
        <Box component='section' sx={{display:'flex' , justifyContent:'flex-start', alignItems:'flex-start', mx:'30px' , mt:'50px'}}>
        <Link href='./' className="bg-red-500 px-6 py-3 text-white rounded-2xl">back to list</Link>
        </Box>
        
        </>
    )
} 