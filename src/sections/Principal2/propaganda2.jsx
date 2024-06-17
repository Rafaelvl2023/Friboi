import React from "react";
import { Container, Grid, Button } from '@material-ui/core';
import './propaganda2.css'

const Propaganda2 = () => {

    return (
        <Container>
            <Grid container className="container2">
                <Grid item xs={12} md={6}>
                    <img className="img" src="https://www.friboi.com.br/_next/image/?url=https%3A%2F%2Ffuture-brand-frib.s3.amazonaws.com%2Fmaturatta_friboi_e_churrascoo_e_ponto_landing_748443163c.png&w=480&q=85" alt="" />
                </Grid>
                <Grid className="texto" item xs={12} md={6}>
                    <h4 className="sub-titulo"><b>MATURATTA É CHURRASCO E PONTO</b></h4>
                    <h1 className="titulo">Seleção de carnes maturadas que é garantia de maciez e sabor.</h1>
                    <h4 className="comentario">Proporcionamos um churrasco inesquecível com tudo que você precisa para saborear e viver momentos especiais ao redor da grelha. Porque para nós o churrasco é uma festa e o churrasqueiro o maestro que faz a festa acontecer.</h4>
                </Grid>
            </Grid>
            <Grid container className="container2">
                <Grid item xs={12} md={6} className="texto">
                    <h4 className="sub-titulo"><b>OS MELHORES CHURRASCOS COMEÇAM AQUI</b></h4>
                    <h1 className="titulo">Encontre os produtos Maturatta nos principais supermercados do país.</h1>
                    <h4 className="comentario">Sabemos o quanto é importante para você encontrar e comprar os produtos da linha Maturatta, e é por isso que trabalhamos arduamente para oferecer a melhor experiência de compra para todos que querem fazer um churrasco incrível.</h4>
                </Grid>
                <Grid item xs={12} md={6} className="img">
                    <img className="img" src="https://www.friboi.com.br/_next/image/?url=https%3A%2F%2Ffuture-brand-frib.s3.amazonaws.com%2Fespaco_churras_maturatta_friboi_landing_3e3a70420b.png&w=1440&q=85" alt="Churrasco" />
                </Grid>
            </Grid>
            <Grid container className="container2">
                <Grid item xs={12} md={6}>
                    <img className="img" src="https://www.friboi.com.br/_next/image/?url=https%3A%2F%2Ffuture-brand-frib.s3.amazonaws.com%2Fhamburguer_maturatta_experimente_o_hamburguer_do_churrasco_0f2d432d0d.png&w=1440&q=85" alt="" />
                </Grid>
                <Grid className="texto" item xs={12} md={6}>
                    <h4 className="sub-titulo"><b>PERFEITOS NA GRELHA E PONTO!</b></h4>
                    <h1 className="titulo">Experimente o hambúrguer do seu churrasco.</h1>
                    <h4 className="comentario">Os novos Hambúrgueres Maturatta vão conquistar os amantes de carne, pois são suculentos, perfeitos para grelhar e muito fáceis de preparar: direto do freezer para a grelha.</h4>
                    <div style={{ position: "relative" }}>
                        <Button className="botoes" style={{ position: "absolute", left: "0", backgroundColor: "red", color: "white", borderRadius: "8px", marginTop: "20px" }} variant="contained" disableElevation>
                            <b>SAIBA MAIS</b>
                        </Button>
                    </div>
                </Grid>
            </Grid>
            <Grid container className="container2">
                <Grid className="texto" item xs={12} md={6}>
                    <h4 className="sub-titulo"><b>A MELHOR EXPERIÊNCIA</b></h4>
                    <h1 className="titulo">Seja um Mestre Churrasqueiro Maturatta.</h1>
                    <h4 className="comentario">Você pode se tornar um embaixador de excelência em carnes, através de certificações e reconhecimento, elevando padrões de qualidade e profissionalismo no seu trabalho. </h4>
                    <div style={{ position: "relative" }}>
                        <Button className="botoes" style={{ position: "absolute", left: "0", backgroundColor: "red", color: "white", borderRadius: "8px", marginTop: "20px" }} variant="contained" disableElevation>
                            <b>SAIBA MAIS</b>
                        </Button>
                    </div>
                </Grid>
                <Grid item xs={12} md={6} className="img">
                    <img className="img" src="https://www.friboi.com.br/_next/image/?url=https%3A%2F%2Ffuture-brand-frib.s3.amazonaws.com%2FFrame_6417_2385cd908b.png&w=1440&q=85" alt="" />
                </Grid>
            </Grid>
            <Grid container className="container2">
                <Grid item xs={12} md={6}>
                    <img className="img" src="https://www.friboi.com.br/_next/image/?url=https%3A%2F%2Ffuture-brand-frib.s3.amazonaws.com%2Fchurrascometro_maturatta_landing_c46242edf9.png&w=1440&q=85" alt="" />
                </Grid>
                <Grid className="texto" item xs={12} md={6}>
                    <h4 className="sub-titulo"><b>CHURRASCÔMETRO MATURATTA</b></h4>
                    <h1 className="titulo">Seja o maestro do seu churrasco.</h1>
                    <h4 className="comentario">Para nós o churrasco é uma festa e o churrasqueiro o maestro que faz a festa acontecer. Então separamos algumas dicas para você encontar seus convidados.</h4>
                    <div style={{ position: "relative" }}>
                        <Button className="botoes" style={{ position: "absolute", left: "0", backgroundColor: "red", color: "white", borderRadius: "8px", marginTop: "20px" }} variant="contained" disableElevation>
                            <b>FAÇA SEU CÁLCULO</b>
                        </Button>
                    </div>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Propaganda2;

