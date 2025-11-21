'use client'
import useStore from '@/Store/Store'
import { Box, Button, Typography } from '@mui/material';
import Link from 'next/link';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  TextField,
  Select,
  MenuItem,
  
} from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import React from 'react'
export default function Basket(
  {
    discountCode,
    setDiscountCode,
    applyDiscount,
    shippingType,
    setShippingType,
  }
) {
    const {basket , myPlus , myMinus , remove} =useStore();
  return (
    <>
      <Typography variant="h5" sx={{ ml:'80px' , mt:'50px' }}>
        Basket:
      </Typography>

      <TableContainer component={Paper} sx={{ maxWidth: "90%", mx: "auto", mt:'50px' }}>
        <Table>
          {/* سرستون‌ها */}
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Image</TableCell>
              <TableCell>Count</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>

          {/* بدنه جدول */}
          <TableBody>
            {basket &&
              basket.map((val, i) => (
                <TableRow key={i}>
                  <TableCell>{val.id}</TableCell>
                  <TableCell>{val.name}</TableCell>
                  <TableCell>{val.price}</TableCell>

                  <TableCell>
                    {val.img && (
                      <Box
                        component="img"
                        src={val.img}
                        sx={{ width: 70, height: 70, objectFit: "cover" }}
                      />
                    )}
                  </TableCell>

                  {/* تعداد */}
                  <TableCell>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <IconButton onClick={() => myPlus(val.id)}>
                        <AddIcon />
                      </IconButton>
                      <Typography>{val.count}</Typography>
                      <IconButton onClick={() => myMinus(val.id)}>
                        <RemoveIcon />
                      </IconButton>
                    </Box>
                  </TableCell>

                  {/* حذف */}
                  <TableCell>
                    <IconButton onClick={() => remove(val.id)} color="error">
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TableContainer component={Paper} sx={{ maxWidth: "600px", mx: "auto", mt: 5 }}>
      <Table>

        <TableBody>
          {/* ردیف کد تخفیف */}
          <TableRow>
            <TableCell>Discount Code</TableCell>
            <TableCell>
              <Box sx={{ display: "flex", gap: 2 }}>
                <TextField
                  label="Enter discount code"
                  value={discountCode}
                  onChange={(e) => setDiscountCode(e.target.value)}
                  size="small"
                />
                <Button
                  variant="contained"
                  onClick={applyDiscount}
                >
                  Apply
                </Button>
              </Box>
            </TableCell>
          </TableRow>

          {/* ردیف انتخاب نوع ارسال */}
          <TableRow>
            <TableCell>Shipping</TableCell>
            <TableCell>
              <Box sx={{ display: "flex", gap: 2 }}>
                <Select
                  value={shippingType}
                  onChange={(e) => setShippingType(e.target.value)}
                  size="small"
                >
                  <MenuItem value="free">Free Shipping</MenuItem>
                  <MenuItem value="normal">Normal (30,000)</MenuItem>
                  <MenuItem value="express">Express (60,000)</MenuItem>
                </Select>
              </Box>
            </TableCell>
          </TableRow>

        </TableBody>
      </Table>
    </TableContainer>
      <Box component='section' sx={{display:'flex', mx:'auto', mt:'30px'}}>
      <Link href='#' className='flex mx-auto bg-red-500 text-white px-20 py-3 rounded-lg text-xl hover:bg-black'>Payment</Link>
      </Box>
      
      <Box component='section' sx={{display:'flex' , justifyContent:'flex-start', alignItems:'flex-start', mx:'30px' , mt:'50px'}}>
        <Link href='./' className="bg-red-500 px-6 py-3 text-white rounded-2xl">back to list</Link>
        </Box>
    </>
  )
}
