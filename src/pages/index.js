import { HeaderSearch } from "@/components/Header";
import { FooterCentered } from "@/components/Footer";
import React from "react";
import { Grid } from "@mantine/core";

export default function Home(){
    return(
        <div>
            <HeaderSearch/>
            <h1>Home Page</h1>
            <Grid>
      <Grid.Col span={4}>1</Grid.Col>
      <Grid.Col span={4}>2</Grid.Col>
      <Grid.Col span={4}>3</Grid.Col>
    </Grid>
            <FooterCentered/>
        </div>
    )
}