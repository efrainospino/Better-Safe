import React, { useEffect, useRef } from 'react';
import Container from 'react-bootstrap/Container';
import Image from 'next/image'

import Navbarr from '../components/Navbar'
import Footer from '../components/Footer'
import CardProduct from '../components/CardProduct';
import { latesItems } from '../Services/ItemService';

import style from '../styles/Home.module.css';

export default function Home({items}) {
  const videoRef = useRef();

    useEffect(() => {
      videoRef.current.play()
    }, []);

  return (
    <>
      <Navbarr title={'Inicio'}>
      </Navbarr>
      <video ref={videoRef} muted loop className={`${style.fondo}`}>
        <source src="/Video/fondo.mp4" type="video/mp4"/>
      </video>
      <Container className={`${style.container} mx-auto px-0`}>
        <div className={`${style.ImageContainer}`}>
          <Image alt='feminism' className={`${style.image}`} src={'/../public/img/imgcover.jpg'} layout="fill" priority/> 
          <div className={`${style.textcover} text-white mx-auto`}>
            <h1 className="fs-1 fw-bold">
              Sientete segura
            </h1>
            <p className="fs-5 fw-bold">En esta pagina podrás encontrar productos de defensa personal para podernos sentir seguras.</p>
          </div>
        </div>
        <div className="">
           <h2 className='ms-4 ps-1 mt-4 fw-bold'>Ultimos productos</h2> 
           <div className="row gap-2 row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 mt-2 pb-5 mx-auto px-5 justify-content-center">
                    {items && items.map((item)=>(
                    <CardProduct 
                    key={item.id}
                    item={item}
                    showAs={'default'}
                    />
                    ))}
                </div>
        </div>
      </Container>
      <div className="d-flex flex-column">
        <Footer/>
      </div>
    </>
  )
}

export async function getStaticProps(){
  const res = await latesItems();

  return{
      props:{
          items: res
      },
  };
}
