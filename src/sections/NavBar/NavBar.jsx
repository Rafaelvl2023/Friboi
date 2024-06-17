import React, { useState } from 'react';
import { Container, Grid, Button, Drawer, List, ListItem, ListItemText, Hidden } from '@material-ui/core';
import styled from 'styled-components';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';

const LogoStyle = styled.div`
  color: black;
`;

const LinksStyle = styled.div`
  font-family: Roboto;
  font-size: 17px;
  display: flex;
  justify-content: flex-end;

  a {
    color: black;
    margin-left: 35px;
    text-decoration: none;

    &:hover {
      color: red;
    }
  }
`;

const CustomDrawer = styled(Drawer)`
  .MuiDrawer-paper {
    width: 100%;
    max-width: 280px; /* Defina um valor máximo para garantir que o drawer não fique muito largo */
  }
`;

const NavBar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    setIsDrawerOpen(open);
  };

  return (
    <Container>
      <Grid container alignItems="center" style={{ padding: '15px' }}>
        <Grid item xs={6} sm={3}>
          <LogoStyle>
            <img
              src="https://www.friboi.com.br/_next/static/media/assets/logo.53add00b7aab001f405fbce1a7a68626.svg"
              alt=""
            />
          </LogoStyle>
        </Grid>
        <Grid item xs={6} sm={9}>
          <Hidden mdDown>
            <LinksStyle>
              <a href="#"><b>Nossas Marcas</b></a>
              <a href="#"><b>Nossos Programas</b></a>
              <a href="#"><b>Sustentabilidade</b></a>
              <a href="#"><b>Minha Receita</b></a>
              <a href="#"><b>Fale Conosco</b></a>
              <a href=""><CircleNotificationsIcon/></a>
            </LinksStyle>
          </Hidden>
          <Hidden lgUp>
            <LinksStyle>
              <Button color="primary" onClick={toggleDrawer(true)}><FormatListBulletedIcon/></Button>
              <CustomDrawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer(false)}>
                <List>
                  <ListItem button>
                    <ListItemText primary="Nossas Marcas" />
                  </ListItem>
                  <ListItem button>
                    <ListItemText primary="Nossos Programas" />
                  </ListItem>
                  <ListItem button>
                    <ListItemText primary="Sustentabilidade" />
                  </ListItem>
                  <ListItem button>
                    <ListItemText primary="Minha Receita" />
                  </ListItem>
                  <ListItem button>
                    <ListItemText primary="Fale Conosco" />
                  </ListItem>
                </List>
              </CustomDrawer>
            </LinksStyle>
          </Hidden>
        </Grid>
      </Grid>
    </Container>
  );
};

export default NavBar;

