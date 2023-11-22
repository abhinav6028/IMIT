"use client"
import React from 'react';
import { Grid, Box } from '@mui/material'
import CustomButton from './Button';
import { H5 } from './Typography';
import { usePathname, useRouter } from 'next/navigation';
import { log } from 'console';

export default function Header() {

    const router = useRouter();

    // const pathname = usePathname()

    // console.log("pathname", pathname);


    const navItems = [
        { name: 'HOME', path: '/' },
        { name: 'PROFILE', path: '/profile' },
        { name: 'REPORTS', path: '/reports' },
        { name: 'INSIGHT', path: '/insight' },
    ]


    const [scrolling, setScrolling] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolling(true);
            } else {
                setScrolling(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    console.log(scrolling);



    return (
        <Grid container justifyContent='center' sx={{
            position: 'fixed',
            zIndex: 100,
            bgcolor: scrolling ? '#FFF' : 'transparent',
        }}>
            <Grid md={10.5} lg={11} container sx={{
                alignItems: 'center', justifyContent: 'space-between',
                my: { md: 3.5, lg: 2 },
                display: { xs: 'none', sm: 'none', md: 'flex', lg: 'flex' },
            }}>

                <Grid
                    component='img'
                    src='Assets/logo.png'
                    sx={{
                        width: 160,
                        height: 36
                    }}
                />

                <Grid container md={5} lg={4} bgcolor='' sx={{ justifyContent: 'space-around' }}>
                    {
                        navItems.map((data: any, index: any) =>

                            <Box

                                onClick={() => router.push(data.path)}
                                sx={{
                                    // bgcolor: pathname == data.path ? 'red' : 'green',
                                    cursor: 'pointer'
                                }}>
                                <H5>
                                    {data.name}
                                </H5>

                            </Box>

                        )
                    }
                </Grid>




                <Box sx={{ display: 'flex' }}>

                    <CustomButton mr={4} color="#2E2E2E" width={120}> LOGIN </CustomButton>

                    <CustomButton> GET STARTED </CustomButton>

                </Box>

            </Grid >
        </Grid>
    )
}


