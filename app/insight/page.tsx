import Header from '@/Components/Ui/Header'
import { Grid } from '@mui/material'
import React from 'react'

export default function page() {
    return (
        <Grid container sx={{ justifyContent: 'center' }}>

            <Grid container lg={11} sx={{ bgcolor: '', }}>

                <Header />

            </Grid >

        </Grid >
    )
}
