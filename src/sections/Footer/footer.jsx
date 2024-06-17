
import { Container, Grid } from '@material-ui/core';
import './footer.css'

const Footer = () => {

    return (
        <>
            <div className='redeSocial' style={{ backgroundColor: '#02169c' }}>
                <Container style={{ display: 'flex', justifyContent: 'center' }}>
                    <h6 style={{ fontSize: '16px', padding: '20px', color: 'white' }}>Siga nas Redes</h6>
                    <a href=""><img style={{ height: '30px', width: '30px',marginBottom: '10px', padding: '15px' }} src="../../../img/Face2.png" alt="" /></a>
                    <a href=""><img style={{ height: '30px', width: '30px', padding: '15px' }} src="../../../img/insta.png" alt="" /></a>
                    <a href=""><img style={{ height: '30px', width: '30px', padding: '15px'  }} src="../../../img/youTube.png" alt="" /></a>
                </Container>
            </div>
            <div  style={{ backgroundColor: '#000e5e' }}>
                <Container>
                    <Grid container spacing={0}>
                        <Grid item className='linkBox' md={2} xs={12}>
                                <h5 className='linkFooterTop'><a>SOBRE A FRIBOI</a></h5>
                                <h5 className='linkFooter'><a>SUSTENTABILIDADE</a></h5>
                                <h5 className='linkFooter'><a>QUALIDADE</a></h5>
                                <h5 className='linkFooter'><a>BOITEL JBS</a></h5>
                                <h5 className='linkFooter'><a>NOSSOS PROGRAMAS</a></h5>
                                <h5 className='linkFooter'><a>FALA CONOSCO</a></h5>
                        </Grid>
                        <Grid item className='alerta' md={5} xs={12}>
                            <div className='alertaTextos'>
                                <h3 style={{ fontFamily: 'Arial' }}>Alerta</h3>
                                <h5 style={{ fontFamily: 'Arial', paddingTop: '10px', paddingBottom: '10px' }}>Prezados clientes e parceiros, a JBS S.A. informa que apenas se comunica através de seus canais e domínios eletrônicos oficiais, sendo os principais.</h5>
                                <h5 style={{ fontFamily: 'Arial', paddingTop: '10px' }}>@jbs.com.br | @friboi.com.br</h5>
                                <h5 style={{ fontFamily: 'Arial', paddingBottom: '10px' }}>@jbssa.com | @seara.com.br</h5>
                                <h5 style={{ fontFamily: 'Arial', paddingTop: '10px', paddingBottom: '10px' }}>Qualquer tentativa de contato e/ou comunicação envolvendo algum domínio diferente pode ser considerada como indevida e/ou uma tentativa de fraude.</h5>
                            </div>
                        </Grid>
                        <Grid item className='sac' md={3} xs={5}>
                            <div className='imagensSac'>
                                <img src="../../../img/SAC.webp" alt="" />
                                <img style={{  marginTop: '10px' }} src="../../../img/Atendimento.webp" alt="" />
                            </div>
                        </Grid>
                        <Grid item className='linkBox2' md={2} xs={7}>
                            <div className='ajuste'>
                                <h5 className='linkboxTop'><a href=''>Política de Privacidade</a></h5>
                                <h5 className='linkBox'><a href=''><b>Política de cookies</b></a></h5>
                                <div className='descricao'>
                                    <h5><b>2023</b></h5>
                                    <h5>Todos os direitos reservados</h5>
                                    <h5>Site by <a href="">FutureBrand</a></h5>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </>
    )
}

export default Footer;

