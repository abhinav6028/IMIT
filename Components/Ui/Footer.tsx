import { Box, Grid } from '@mui/material'
import React from 'react'
import { H5, H6 } from './Typography'
import FacebookSharpIcon from '@mui/icons-material/FacebookSharp';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EditLocationIcon from '@mui/icons-material/EditLocation';

export default function Footer() {
    return (

        <Grid container sx={{ bgcolor: "#FFF", justifyContent: 'center', py: { xs: 2, sm: 3, md: 5, lg: 5 } }}>

            <Grid container md={10.5} lg={11} sx={{ bgcolor: '' }}>

                <Grid container sm={6} md={3} lg={3} sx={{ bgcolor: '', justifyContent: { sm: 'center', md: 'start' } }}>

                    <Box

                        // onClick={() => router.push('/')}
                        style={{ cursor: 'pointer' }}
                        component="img"
                        sx={{
                            bgcolor: '',
                            py: { xs: 0.6, sm: 1 },
                            height: { sm: 50, xs: 40, md: 50 },
                            width: { sm: 120, xs: 120, md: 100 },
                            ml: { xs: 3, sm: 0, md: 0 }
                        }}
                        alt="The house from the offer."
                        src="/Assets/logo.png"

                    />

                </Grid>

                <Grid container sm={6} md={2} lg={2} sx={{
                    bgcolor: '',
                    justifyContent: { sm: 'center' },
                    my: { xs: 2, sm: 2, md: 0 }
                }}>

                    <Grid sx={{
                        ml: { xs: 3, sm: 0, md: 0 }
                    }}>

                        <H5 textAlign='start' cursor='pointer' >HOME</H5>
                        <H5 textAlign='start' cursor='pointer' my={0.6}>PROFILE</H5>
                        <H5 textAlign='start' cursor='pointer' my={0.6}>REPORTS</H5>
                        <H5 textAlign='start' cursor='pointer' my={0.6}>INSIGHTS</H5>

                    </Grid>

                </Grid>

                <Grid container sm={6} md={2} lg={2.5} sx={{
                    bgcolor: '',
                    justifyContent: { sm: 'center' },
                    my: { sm: 3, md: 0 },
                    ml: { xs: 3, sm: 0, md: 0 }
                }}>
                    <Grid >
                        <H5 textAlign='start' cursor='pointer' >INFORMATION CENTRE</H5>
                        <H5 textAlign='start' cursor='pointer' my={0.6}>TERMS & CONDITIONS</H5>
                        <H5 textAlign='start' cursor='pointer' my={0.6} >PRIVACY POLICY</H5>
                    </Grid>
                </Grid>

                <Grid container sm={6} md={4} lg={4.5} sx={{
                    bgcolor: '', justifyContent: { sm: 'center', md: 'flex-end' },
                    my: { xs: 2, sm: 2, md: 0 },
                    ml: { xs: 3, sm: 0, md: 'auto' },

                }}>

                    <Box
                        component='img'
                        src='Assets/FooterSection/facebook.png'
                        sx={{
                            width: { xs: 12, sm: 12, md: 12, lg: 12 },
                            height: { xs: 25, sm: 25, md: 25, lg: 25 },
                            mr: 2.8,
                            cursor: 'pointer'
                        }}

                    />

                    <Box
                        component='img'
                        src='Assets/FooterSection/instagram.png'
                        sx={{
                            width: { xs: 24, sm: 24, md: 24, lg: 24 },
                            height: { xs: 25, sm: 25, md: 35, lg: 25 },
                            mr: 2.8,
                            cursor: 'pointer'
                        }}

                    />

                    <Box
                        component='img'
                        src='Assets/FooterSection/skype.png'
                        sx={{
                            width: { xs: 27, sm: 27, md: 27, lg: 27 },
                            height: { xs: 22, sm: 22, md: 22, lg: 22 },
                            mr: 2.8,
                            cursor: 'pointer'
                        }}
                    />

                    <Box
                        component='img'
                        src='Assets/FooterSection/linkedin.png'
                        sx={{
                            width: { xs: 26, sm: 26, md: 26, lg: 26 },
                            height: { xs: 25, sm: 25, md: 25, lg: 25 },
                            cursor: 'pointer'
                        }}

                    />

                </Grid>

            </Grid>
        </Grid>
    )
}