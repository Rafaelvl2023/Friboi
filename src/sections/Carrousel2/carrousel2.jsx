import React, { useState } from 'react';
import './carrousel2.css';
import { Container } from '@material-ui/core';
import { Carousel } from 'primereact/carousel';
import { Button } from 'primereact/button';
import { Tag } from 'primereact/tag';

const CarouselProducts = () => {
    const [images] = useState([
        {
            url: "https://www.friboi.com.br/_next/image/?url=https%3A%2F%2Ffuture-brand-frib.s3.amazonaws.com%2Flinguica_de_costela_bovina_300g_maturatta_friboi_thumb_a68b9bee47.jpg&w=1440&q=85",
            name: "Linguiça de Costela",
            buttonText: "Saiba Mais"
        },
        {
            url: "https://www.friboi.com.br/_next/image/?url=https%3A%2F%2Ffuture-brand-frib.s3.amazonaws.com%2Fcostela_janelinha_maturatta_friboi_kg_thumb_802c546ad6.jpg&w=1440&q=85",
            name: "Costela Janelinha",
            buttonText: "Saiba Mais"
        },
        {
            url: "https://www.friboi.com.br/_next/image/?url=https%3A%2F%2Ffuture-brand-frib.s3.amazonaws.com%2Fcostela_ripa_maturatta_friboi_kg_thumb_50814cb50f.jpg&w=1440&q=85",
            name: "Costela Ripa",
            buttonText: "Saiba Mais"
        },
        {
            url: "https://www.friboi.com.br/_next/image/?url=https%3A%2F%2Ffuture-brand-frib.s3.amazonaws.com%2Ffraldinha_maturatta_friboi_298_thumb_b555d42d5e.jpg&w=1440&q=85",
            name: "Fraldinha",
            buttonText: "Saiba Mais"
        },
        {
            url: "https://www.friboi.com.br/_next/image/?url=https%3A%2F%2Ffuture-brand-frib.s3.amazonaws.com%2Ffile_de_costela_maturatta_friboi_5368_thumb_d3acb304a1.jpg&w=1440&q=85",
            name: "Filé de Costela",
            buttonText: "Saiba Mais"
        },
        {
            url: "https://www.friboi.com.br/_next/image/?url=https%3A%2F%2Ffuture-brand-frib.s3.amazonaws.com%2Fpicanha_maturatta_friboi_300_resfriada_thumb_ad93960e6c.jpg&w=1440&q=85",
            name: "Picanha",
            buttonText: "Saiba Mais"
        }
    ]);

    const responsiveOptions = [
        {
            breakpoint: '1400px',
            numVisible: 4,
            numScroll: 1
        },
        {
            breakpoint: '1199px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '767px',
            numVisible: 2, // Alterado para exibir 4 itens por vez
            numScroll: 1
        },
        {
            breakpoint: '575px',
            numVisible: 1,
            numScroll: 1
        }
    ];

    const productTemplate = (image) => {
        return (
            <Container>
                <div className="product-item">
                    <div className="product-item-content">
                        <div className="p-mb-3">
                            <img src={image.url} alt="Product" className="product-image" />
                        </div>
                        <div>
                            <h4 className="p-mb-1">{image.name}</h4>
                        </div>
                        <div className="p-mt-5">
                            <Button style={{ fontSize: '15px', width: '150%', padding: '5px', backgroundColor: '#02169c', color: 'white', border: 'none', borderRadius: '5px', marginTop: '10px' }} label={image.buttonText} className="p-button p-button-rounded" />
                        </div>
                    </div>
                </div>
            </Container>
        );
    };

    return (
        <Container>
            <div className='titleCarrousel2'>
                <h1>Produtos Maturatta Friboi</h1>
            </div>
            <div className="carousel-demo-container">
                <Carousel value={images} numScroll={1} numVisible={4} responsiveOptions={responsiveOptions} itemTemplate={productTemplate}></Carousel>
            </div>
        </Container>
    );
}

export default CarouselProducts;




