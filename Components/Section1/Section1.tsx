"use client"
import { Box, Grid, Typography, List, ListItem } from '@mui/material'
import React from 'react'
import { H2, H3, H4 } from '../Ui/Typography'
import CustomButton from '../Ui/Button';

export default function Section1() {

  const items = [
    {
      heading: 'Create Attractive Profiles',
      img: 'Assets/Section1/image1.png'
    },
    {
      heading: 'Real-Time Insightful Reporting',
      img: 'Assets/Section1/image2.png'
    },
    {
      heading: 'Target The Right Trends',
      img: 'Assets/Section1/image3.png'
    },
    {
      heading: 'Manage The Account',
      img: 'Assets/Section1/image4.png'
    },
    {
      heading: 'Lead Management System',
      img: 'Assets/Section1/image5.png'
    },
  ]















  return (
    <Grid container sx={{
      justifyContent: 'center',
      mt: 6
    }}>

      <Grid container xs={9} sm={8} md={8} lg={8} sx={{ justifyContent: 'center', }}>

        <H2 fontWeight='bold'>We offer a complete spectrum
          of services for your real estate needs</H2>

      </Grid>



      {
        items.map((data, index) =>



          <Grid container sx={{
            mt: { xs: 3, sm: 4, md: 6, lg: 6 },
            justifyContent: 'center',
            flexDirection: (index + 1) % 2 ? 'row' : 'row-reverse'
          }} >



            <Grid container xs={9} sm={9} md={6} lg={6} bgcolor='' sx={{
              justifyContent: 'center', alignItems: 'center', bgcolor: ''
            }}>

              <Grid xs={10} sm={7} md={9} lg={7.4}
                component='img'
                src={data.img}
              />

            </Grid>



            <Grid xs={9} sm={9} md={6} lg={5} bgcolor='' sx={{
              mt: { xs: 3, sm: 3, md: 0, lg: 0 }
            }}>


              <H3 fontWeight="bold" textAlign='start' >{data.heading}</H3>

              <H4 width='100%' textAlign='start' py={2.5}>
                Interior brings 41 years of interior designs experience right to your home or office. Our design professionals are equipped to help you determine the products and design that work best for our customers.
              </H4>

              <Grid container sx={{ justifyContent: { xs: 'center', sm: 'center', md: 'start', lg: 'start' } }} >

                <Grid>
                  {
                    [
                      'Create folders and files',
                      'Set up an internet connection',
                      'Connect your computer',
                      'Navigate all of the programs ',
                      'Operating system'
                    ].map((data, index) =>
                      <Box sx={{ py: { xs: 0.3, sm: 0.4, md: 0.5, lg: 0.6 }, }}>
                        <li style={{ fontFamily: 'Nunito', fontSize: '18px' }}>{data}</li>
                      </Box>
                    )
                  }
                </Grid>
              </Grid>

              <Grid container sx={{ justifyContent: { xs: 'center', sm: 'center', md: 'start', lg: 'start' } }}>

                <CustomButton my={4} border='1px solid #12C2E9'> GET STARTED</CustomButton>

              </Grid>

            </Grid>

          </Grid>

        )
      }

    </Grid>
  )
}
