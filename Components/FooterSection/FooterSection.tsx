"use client"
import { Box, Divider, Grid } from '@mui/material'
import React from 'react'
import { H2, H4, H6 } from '../Ui/Typography'
import CustomButton from '../Ui/Button'
import Footer from '../Ui/Footer'

export default function FooterSection() {

    const upperFooter = [
        {
            icon: 'Assets/FooterSection/trust.png',
            description: 'Trusted and verified property listings.'
        },
        {
            icon: 'Assets/FooterSection/personalised.png',
            description: 'Trusted and verified property listings.'
        },
        {
            icon: 'Assets/FooterSection/complete.png',
            description: 'Trusted and verified property listings.'
        },
        {
            icon: 'Assets/FooterSection/detail.png',
            description: 'Trusted and verified property listings.'
        },
        {
            icon: 'Assets/FooterSection/home.png',
            description: 'Trusted and verified property listings.'
        },
        {
            icon: 'Assets/FooterSection/qr.png',
            description: 'Trusted and verified property listings.'
        }
    ]



    return (
        <Grid container sx={{ bgcolor: '#2E2E2E', justifyContent: 'center', }}>

            <Grid container xs={11} sm={10} md={10.5} lg={11} sx={{ my: { sm: 1.5, xs: 2, md: 5, lg: 5, height: 'fit-content', } }}>

                <Grid md={6} lg={6} container sx={{ bgcolor: '', mt: { xs: 2, sm: 2, md: 0, lg: 0 } }}>

                    <H2 color='#FFF' width="70%" textAlign='start' fontWeight='bold' >
                        Explore the most attractive areas in Kyiv neighborhoods to buy a home
                    </H2>

                    <H6 color='#FFF' width="95%" textAlign='start' my={1.5}>
                        We are very proud of the service we provide. Discover the hottest communities available in our portfolio. Look through the most popular areas. Our locations and services prove we are the best.
                    </H6>

                    <H6 color='#FFF' width="95%" textAlign='start' mt='auto' my={1} >
                        Kyiv is the capital and most populous city of Ukraine.The city’s name is said to derive from the name of Kyi, one of its four legendary founders. We rank amongst the Top 6 agencies in the world.
                    </H6>

                </Grid>



                <Grid md={6} lg={6} container sx={{
                    bgcolor: '', display: 'flex', justifyContent: { xs: 'center', md: 'space-between' }, height: '',
                    mt: { xs: 1.8, sm: 2, md: 0, lg: 0 }
                }}>

                  

                    {
                        upperFooter.map((data, index) =>

                            <Grid xs={8} sm={6} md={6} lg={5.5} container bgcolor='' sx={{
                                height: 'fit-content', alignItems: 'center',
                                my: { xs: 1, sm: 1.6, md: 1, lg: 1.2 }
                            }}>
                                <Box
                                    component='img'
                                    src={data.icon}
                                    sx={{
                                        width: { xs: 40, sm: 45, md: 50, lg: 55 },
                                        height: { xs: 40, sm: 45, md: 50, lg: 55 }
                                    }}
                                />

                                <H6 ml={2} color='#FFF' width="70%" textAlign='start'>Trusted and verified property listings.</H6>
                            </Grid>


                        )
                    }


                    <Grid container sx={{ bgcolor: '#C471ED', justifyContent: 'center', height: 'fit-content', borderRadius: '4px', mt: 3, }}>

                        <H6 py={1.4} color='#FFF' textAlign='start' width="90%">With tons of benefits for customers. Go True People Wall is the ultimate place where a buyer will search for properties online.</H6>

                    </Grid>

                </Grid>

            </Grid>

            <Grid
                container
                sx={{
                    height: '1px',
                    bgcolor: '#616161',
                    my: { xs: 4, sm: 1, md: 1.8, lg: 2 }
                }}
            />

            <Grid container sx={{ bgcolor: '', justifyContent: 'center', my: { sm: 1.5, xs: 2, md: 5, lg: 5 }, }}>

                <Grid container xs={11} sm={10} md={10.5} lg={11} sx={{}}>

                    <Grid container xs={12} sm={6} md={6} lg={6} sx={{
                        bgcolor: '', justifyContent: 'center', alignItems: 'center',
                        my: { xs: 3, sm: 0, md: 0, lf: 0 }
                    }}>
                        <Grid
                            component='img'
                            src='/Assets/FooterSection/secondfooterimg.png'
                            lg={6.8} md={9} sm={9} xs={10}
                            sx={{
                                mt: { xs: -7, sm: 0, md: 0, lg: 0 }
                            }}
                        />
                    </Grid>

                    <Grid container xs={12} sm={6} md={6} lg={6} sx={{ bgcolor: '' }}>

                        <H2 color='#FFF' width="70%" textAlign='start' smTextalign="start" fontWeight='bold' >
                            Let Us Help You Find Your Ideal Buyer!
                        </H2>

                        <H6 py={2.5} color='#FFF' textAlign='start' width="100%">
                            Interior brings 41 years of interior designs experience right to your home or office. Our design professionals are equipped to help you determine the products and design that work best for our customers.
                        </H6>

                        <CustomButton
                            my={3}
                            widthF={210}
                            border="0px" color='#FFF'
                            background="linear-gradient(90deg, #12C2E9 -15.84%, #C471ED 53.22%, #F64F59 122.28%)"
                        >REGISTER NOW</CustomButton>
                    </Grid>

                </Grid>
            </Grid>


            <Footer />



        </Grid>
    )
}
