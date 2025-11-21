import { Box, Typography } from '@mui/material'
import React from 'react'

export default function Section() {
    return (
        <>
             <Box component="section" sx={{ padding:'6px', border: '1px solid grey', display: 'flex', flexDirection:'column', justifyContent:'center' , alignItems:'center',gap:'4px',  borderRadius:'8px', boxShadow:'2px 2px 2px gray',width:{xs:'100%',sm:'100%' , md:'20%'}}}>
            <Box component='img' src='/images/tik.webp'></Box>
            <Typography variant="h6" component="h1" sx={{fontSize:'15px'}}>guaratee of authenticity</Typography>
            </Box>

            <Box component="section" sx={{padding:'6px',  border: '1px solid grey', display: 'flex', flexDirection:'column', justifyContent:'center' , alignItems:'center',gap:'4px',  borderRadius:'8px', boxShadow:'2px 2px 2px gray',width:{xs:'100%',sm:'100%' , md:'20%'} }}>
            <Box component='img' src='/images/hedphon.webp'></Box>
            <Typography variant="h6" component="h1" sx={{fontSize:'15px'}}>7 days a week,24 hours a day</Typography>
            </Box>

            <Box component="section" sx={{ padding:'6px', border: '1px solid grey', display: 'flex', flexDirection:'column', justifyContent:'center' , alignItems:'center',gap:'4px',  borderRadius:'8px', boxShadow:'2px 2px 2px gray',width:{xs:'100%',sm:'100%' , md:'20%'} }}>
            <Box component='img' src='/images/return.webp'></Box>
            <Typography variant="h6" component="h1" sx={{fontSize:'15px'}}>seven day return guarantee</Typography>
            </Box>

            <Box component="section" sx={{ padding:'6px', border: '1px solid grey', display: 'flex', flexDirection:'column', justifyContent:'center' , alignItems:'center',gap:'4px',  borderRadius:'8px', boxShadow:'2px 2px 2px gray',width:{xs:'100%',sm:'100%' , md:'20%'} }}>
            <Box component='img' src='/images/pardakht.webp'></Box>
            <Typography variant="h6" component="h1" sx={{fontSize:'15px'}}>possibility  of payment on site</Typography>
            </Box>

            <Box component="section" sx={{ padding:'6px', border: '1px solid grey', display: 'flex', flexDirection:'column', justifyContent:'center' , alignItems:'center',gap:'4px',  borderRadius:'8px', boxShadow:'2px 2px 2px gray',width:{xs:'100%',sm:'100%' , md:'20%'} }}>
            <Box component='img' src='/images/express.webp'></Box>
            <Typography variant="h6" component="h1" sx={{fontSize:'15px'}}>Express delivery possible</Typography>
            </Box> 




        </>
    )
}
