import React from "react";
import { Container, Grid, Button, Hidden } from '@material-ui/core';

const Produtos = () => {
    return (
        <Container>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <img src="https://www.friboi.com.br/_next/image/?url=https%3A%2F%2Ffuture-brand-frib.s3.amazonaws.com%2Flinguica_de_costela_bovina_300g_maturatta_friboi_thumb_a68b9bee47.jpg&w=1440&q=85" alt="" />
                    <div style={{ position: "relative" }}>
                        <Button className="botoes" style={{ position: "absolute", left: "0", backgroundColor: "red", color: "white", borderRadius: "8px", marginTop: "20px" }} variant="contained" disableElevation>
                            <b>SAIBA MAIS</b>
                        </Button>
                    </div>
                </Grid>
                <Hidden xsDown>
                    <Grid item sm={6}>
                        <img src="https://www.friboi.com.br/_next/image/?url=https%3A%2F%2Ffuture-brand-frib.s3.amazonaws.com%2Flinguica_de_costela_bovina_300g_maturatta_friboi_thumb_a68b9bee47.jpg&w=1440&q=85" alt="" />
                        <div style={{ position: "relative" }}>
                            <Button className="botoes" style={{ position: "absolute", left: "0", backgroundColor: "red", color: "white", borderRadius: "8px", marginTop: "20px" }} variant="contained" disableElevation>
                                <b>SAIBA MAIS</b>
                            </Button>
                        </div>
                    </Grid>
                </Hidden>
            </Grid>
        </Container>
    );
};

export default Produtos;






























