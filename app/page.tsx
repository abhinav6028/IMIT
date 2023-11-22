"use client"
import FooterSection from '@/Components/FooterSection/FooterSection'
import Section1 from '@/Components/Section1/Section1'
import CustomButton from '@/Components/Ui/Button'
import Header from '@/Components/Ui/Header'
import MobileHeader from '@/Components/Ui/MobileHeader'
import { H1, H2, H4 } from '@/Components/Ui/Typography'
import { Grid, Box, TextField } from '@mui/material'
import react from 'react'
import { useFormState } from 'react-dom';
import { useState } from 'react'

export default function Home() {





  return (


    <Grid container sx={{ justifyContent: 'center' }}>

      <Grid container md={10.5} lg={11} sx={{ bgcolor: '', zIndex: 5 }}>

        {/* <Header /> */}

        <MobileHeader />

        <Grid container bgcolor='=' sx={{
          mt: { xs: 12, sm: 15, md: 7, lg: 5 },
          flexDirection: { xs: 'column-reverse', sm: 'column-reverse', md: 'row', lg: 'row' },
          height: 'fit-content'
        }}>


          <Grid md={5} lg={5} container sx={{
            bgcolor: '',

          }}>

            <Grid sx={{
              ml: { xs: 2, sm: 10, md: 0, lg: 0 },
              mt: { xs: 6, sm: 5 },
              justifyContent: { xs: 'end' }
            }}>

              <H1 >BUY YOUR</H1>
              <H1 fontWeight='bold'>DREM HOME</H1>
              <H1>IN KYIV!</H1>

              <Box sx={{ bgcolor: '', mt: { xs: 1.5, sm: 1.2, md: 3 } }}>

                <CustomButton
                  background='linear-gradient(90deg, #12C2E9 -15.84%, #C471ED 53.22%, #F64F59 122.28%)'
                  color='#FFF'
                  border='0px'
                >GET STARTED</CustomButton>

              </Box>

            </Grid>

          </Grid>



          <Grid md={7} lg={7} container bgcolor=''
            sx={{
              justifyContent: { xs: 'center', sm: 'center', md: 'end' },
              alignItems: { xs: 'center' }
            }}
          >

            <Grid
              xs={9} sm={9} md={9} lg={9.5}
              component='img'
              src='Assets/Banner/Banner.png'
              sx={{
                bgcolor: '',
                mt: 2
              }}
            />


          </Grid>

        </Grid>




        <Grid container sx={{ bgcolor: '', justifyContent: 'center', alignItems: 'center', mt: 6.3 }}>

          <H2>
            Senlling a property can be quite challenging
            If you don't have the right tools at your disposals.
          </H2>

        </Grid>


        <Grid container sx={{ bgcolor: '', justifyContent: 'center', alignItems: 'center', mt: 3 }}>

          <H4>
            We help our clients sell, buy or rent properties hassle free. Due to our unparalleled results, expertise and dedication, we rank amongst the top 6 agencies in Kyiv.We are very proud of the service we provide and what our guests have to say about us.
          </H4>

        </Grid>

        <Section1 />

      </Grid >

      <FooterSection />

      <Grid
        sx={{
          display: { xs: 'none', sm: 'flex', md: 'flex', lg: 'flex' },
          width: '510px',
          height: '400px', flexShrink: 0,
          borderRadius: '510px',
          opacity: 0.56,
          background: '#12C2E9',
          filter: 'blur(200px)',
          zIndex: -2,
          position: 'absolute',
          left: 0,
          top: 500
        }}
      />



      <Grid
        sx={{
          display: { xs: 'none', sm: 'flex', md: 'flex', lg: 'flex' },
          width: '510px',
          height: '350px',
          flexShrink: 0,
          borderRadius: '510px',
          opacity: 0.56,
          background: '#C471ED',
          filter: 'blur(200px)',
          zIndex: -2,
          position: 'absolute',
          top: 0
        }}
      />

      <Grid
        sx={{
          width: '510px',
          height: '400px',
          flexShrink: 0,
          borderRadius: '50px',
          opacity: 0.56,
          background: '#F64F59',
          filter: 'blur(100px)',
          zIndex: -2,
          position: 'absolute',
          right: 0,
          top: { md: 100, lg: 250 }
        }}
      />


    </Grid >

  )
}
