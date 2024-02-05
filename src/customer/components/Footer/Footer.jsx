import { Button, Grid, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div>
        <Grid className=' bg-black text-white text-center mt-10 '
        container
        sx={{bgcolor:'black',color:'white',py:3}}
        >
            <Grid item xs={12} sm={6} md={4}>
                <Typography className='pb-5' variant='h6'>Company</Typography>
                <div className='flex flex-wrap'>
                    <Link href='' className='pb-2 w-full' variant='h6' >Abou Us</Link>
                    <Link href='' className='pb-2 w-full' variant='h6' >Contact Us</Link>
                    <Link href='' className='pb-2 w-full' variant='h6' >Privacy Policy</Link>
                </div>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <Typography className='pb-5' variant='h6'>Company</Typography>
                <div className='flex flex-wrap'>
                    <Link href='' className='pb-2 w-full' variant='h6' >Abou Us</Link>
                    <Link href='' className='pb-2 w-full' variant='h6' >Contact Us</Link>
                    <Link href='' className='pb-2 w-full' variant='h6' >Privacy Policy</Link>
                </div>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <Typography className='pb-5' variant='h6'>Company</Typography>
                <div className='flex flex-wrap'>
                    <Link href='' className='pb-2 w-full' variant='h6' >Abou Us</Link>
                    <Link href='' className='pb-2 w-full' variant='h6' >Contact Us</Link>
                    <Link href='' className='pb-2 w-full' variant='h6' >Privacy Policy</Link>
                </div>
            </Grid>
            
            <Grid className='pt-20' item xs={12}>
                <Typography variant='body2' component="p" align='center'>
                    &copy; 2024 My Company. All Rights Reserved
                </Typography>
            </Grid>
        </Grid>
        
    </div>
  )
}

export default Footer