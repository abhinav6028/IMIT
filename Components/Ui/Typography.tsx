import React from 'react';
import { Typography } from '@mui/material'
import { FONT_FAMILY } from '@/utils';


export const H1 = (props: any) => {

    const { color, onClick, fontWeight } = props;

    return (

        <Typography sx={{
            fontSize: { xs: 40, sm: 55, md: 50, lg: 73 },
            fontStyle: 'normal',
            color: color, width: '100%', lineHeight: 'normal', textTransform: 'uppercase',
            fontWeight: fontWeight,
            fontFamily: 'Nunito'
        }}>{props.children}</Typography>
    )
}

export const H2 = (props: any) => {

    const { color, onClick, fontWeight, width, textAlign, smTextalign } = props;

    return (

        <Typography sx={{
            fontSize: { xs: 21, sm: 28, md: 35, lg: 34 },
            fontStyle: 'normal',
            color: color,
            fontFamily: 'Nunito',
            textAlign: {
                xs: smTextalign ? smTextalign : 'center',
                sm: smTextalign ? smTextalign : 'center',
                md: textAlign ? textAlign : 'center', lg: textAlign ? textAlign : 'center'
            },
            width: width ? { md: width - 20, lg: width } : { xs: '90%', sm: '90%', md: '90%', lg: '70%' },
            fontWeight: fontWeight ? fontWeight : 570,
            lineHeight: 1.3
        }}>{props.children}</Typography>
    )
}

export const H3 = (props: any) => {

    const { color, onClick, fontWeight, textAlign } = props;

    return (

        <Typography sx={{
            fontSize: { xs: 21, sm: 23, md: 25, lg: 26 },
            fontStyle: 'normal',
            color: color,
            fontFamily: 'Nunito',
            textAlign: { xs: 'center', sm: 'center', md: textAlign ? textAlign : 'center', lg: textAlign ? textAlign : 'center' },
            width: { xs: '90%', sm: '90%', md: '90%', lg: '70%' },
            fontWeight: fontWeight ? fontWeight : 570,
            lineHeight: 1.3
        }}>{props.children}</Typography>
    )
}



export const H4 = (props: any) => {

    const { color, onClick, width, textAlign, py, mt, ml } = props;

    return (

        <Typography sx={{
            fontSize: { xs: 17, sm: 17, md: 20, lg: 22 },
            fontStyle: 'normal',
            color: color,
            fontFamily: 'Nunito',
            textAlign: { xs: 'center', sm: 'center', md: textAlign ? textAlign : 'center', lg: textAlign ? textAlign : 'center' },
            width: width ? width : { xs: '90%', sm: '90%', md: '90%', lg: '78%' },
            fontWeight: 550,
            lineHeight: 1.3,
            py: { xs: py - .4, sm: py - .5, md: py - .5, lg: py },
            mt: { xs: mt - .4, sm: mt - .5, md: mt - .5, lg: mt },
            ml: ml,

        }}>{props.children}</Typography>
    )
}

export const H5 = (props: any) => {

    const { color, onClick, my, cursor, textAlign } = props;

    return (

        <Typography sx={{
            fontSize: { xs: 12, sm: 15, lg: 15 },
            fontStyle: 'normal',
            color: color,
            fontFamily: 'Nunito', width: '100%',
            my: my,
            cursor: cursor && cursor,
            textAlign: textAlign ? textAlign : 'center',
            fontWeight: "200"
        }}>{props.children}</Typography>
    )
}

export const H6 = (props: any) => {

    const { color, onClick, width, textAlign, py, mt, ml, my, fontWeight, pathname, data } = props;
    // const ab = '10%'
    return (

        <Typography sx={{
            fontSize: { xs: 14, sm: 16, md: 17, lg: 19 },
            fontStyle: 'normal',
            color: color,
            fontFamily: 'Nunito',
            textAlign: { xs: 'start', sm: 'start', md: textAlign ? textAlign : 'center', lg: textAlign ? textAlign : 'center' },
            width: width ? { xs: width, sm: width, md: width, lg: width } : { xs: '90%', sm: '90%', md: '90%', lg: '78%' },
            // fontWeight: pathname == data?.path ? 'bold' : 600,
            lineHeight: 1.3,
            py: { xs: py - .4, sm: py - .5, md: py - .5, lg: py },
            mt: { xs: mt - .4, sm: mt - .5, md: mt - .5, lg: mt },
            ml: { xs: ml + 1, sm: ml, md: ml, lg: ml },
            my: { xs: my - .2, sm: my - .3, md: my - 0.5, lg: my },


        }}> {props.children}</Typography >
    )
}
