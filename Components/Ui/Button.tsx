import React from 'react';
import { Box, Grid, Typography } from '@mui/material'
import { FONT_FAMILY } from '@/utils';
import { H5 } from './Typography';

export default function CustomButton(props: any) {

    const { mr, color, width, background, border, my, mt } = props



    return (
        <Box sx={{
            fontFamily: 'Nunito', fontWeight: FONT_FAMILY,
            borderRadius: '4px',
            border: border ? border : '1px solid #2E2E2E',
            width: width ? { xs: width - 20, sm: width - 20, md: width - 20, lg: width } : { xs: 120, sm: 130, md: 150, lg: 180 },
            height: { xs: 40, sm: 45, md: 40, lg: 47 },
            mr: { md: mr - 1, lg: mr },
            cursor: 'pointer  ',
            background: background,
            my: { xs: my - 1.7, sm: my - 1.5, md: my - 2, lg: my },
            mt: mt

        }}>

            <Grid container sx={{ justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                <H5 color={color}>{props.children}</H5>
            </Grid>


        </Box>


    )
}
