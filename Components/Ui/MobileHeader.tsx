"use client"
import { Grid, Box, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';
import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import { H5 } from './Typography';
import CustomButton from './Button';

export default function MobileHeader() {
    const [menu, setMenu] = React.useState(false)
    const router = useRouter();

    const navbarItems = [
        { name: 'HOME', path: '/' },
        { name: 'PROFILE', path: '/profile' },
        { name: 'REPORTS', path: '/reports' },
        { name: 'INSIGHT', path: '/insight' },
    ]


    const MenuBar = () => {

        setMenu(!menu)

    }

    return (

        <Grid container sx={{
            display: { xs: "block", md: "none" }, overflow: 'none'

        }}>

            <Box sx={{
                width: "100%", display: 'flex',
                justifyContent: "center", alignItems: "center",
                py: 1,
                position: "fixed",
                zIndex: "110", top: "0", left: "0",
                bgcolor: "#FFF"
            }} >

                <Box position="fixed" left="0" sx={{}}>

                    {menu ? <CloseIcon sx={{ ml: 2, color: "#513328", fontSize: { xs: '2rem' } }} onClick={() => setMenu(!menu)} /> :
                        <MenuIcon sx={{ ml: 2, color: "#513328", fontSize: "2rem" }} onClick={() => setMenu(!menu)} />}

                </Box>

                <Box

                    onClick={() => router.push('/')}
                    style={{ cursor: 'pointer' }}
                    component="img"
                    sx={{
                        bgcolor: '',
                        py: { xs: 0.6, sm: 1 },
                        height: { sm: 50, xs: 40 },
                        width: { sm: 150, xs: 120 },

                    }}
                    alt="The house from the offer."
                    src="/Assets/logo.png"
                />

            </Box>

            <Box sx={{
                transition: "0.5s",
                width: "100%", height: "fit-content",
                position: "fixed", zIndex: "100", left: "0%", top: menu ? "70px" : "-50%",
                bgcolor: "#FFF"

            }}>

                {
                    navbarItems.map((data: any, index: any) =>

                        <Box key={index} sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", bgcolor: '' }}>

                            <Box onClick={MenuBar} sx={{ display: "flex", justifyContent: "center", alignItems: "center", py: 1, px: 2 }}>

                                <H5
                                    // sx={{ color: "black", fontWeight: '550', cursor: 'pointer' }}
                                    onClick={() => router.push(data.path)}>{data.name}</H5>

                            </Box>

                        </Box>
                    )}

                <Box sx={{ display: '', py: 1, px: 2 }}>

                    <CustomButton mt={1} color="#2E2E2E" width={120}> LOGIN </CustomButton>

                    <CustomButton mt={2}> GET STARTED </CustomButton>

                </Box>

            </Box>

        </Grid >
    )
}
