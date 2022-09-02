import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import ShoppingCar from './ShoppingCar';

import imglogo from '../public/logo-better-safe.png';


import style from '../styles/Navbar.module.css';

import { useAppContext } from './StateWrapper';

export default function Navbarr({children, title}){

    const Car = useAppContext();

    function handleBarCar(){
        Car.handleBarCar();
    }

    return(
        <>
            <Head>
                <title>Better Safe {title ? `| ${title}` : ''}</title>
                <meta name="better safe" content="Productos de defensa personal" />
            </Head>
            <Navbar className={`pt-1 pb-0 d-flex justify-content-center shadow-sm ${style.background}`} expand="lg">
                <Container className={`ps-0 ${style.navbarMargin}`}>
                    <div className={`${style.navIcons}`}>
                        <Navbar.Brand className="py-0">
                            <Image src={imglogo} height={38} alt="better safe" width={35}/>
                        </Navbar.Brand>
                        <div className="d-flex ms-auto">
                            <Nav className={`${style.navIcon} me-3`}>
                                <span className={`${style.span} mb-2`} onClick={handleBarCar}>
                                    <i className="bi bi-cart4"></i> ({Car.getNumberOfItems()})
                                </span>
                            </Nav>
                            <Navbar.Toggle className={`shadow-none ms-auto mb-2 ${style.toggleIcon}`} aria-controls="basic-navbar-nav" />
                        </div>
                    </div>
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link href="/">
                            <a className={`${style.a} mb-2`}>Inicio</a>
                        </Link>
                        <Link href="/tienda">
                            <a className={`${style.a} mb-2`}>Tienda</a>
                        </Link>
                        <Link href="/pyr">
                            <a className={`${style.a} mb-2`}>PyR</a>
                        </Link>
                    </Nav>
                    </Navbar.Collapse>
                    <Nav className={`${style.navIconLg}`}>
                        <span className={`mb-2 ${style.span}`} onClick={handleBarCar}>
                            <i className="bi bi-cart4"></i> ({Car.getNumberOfItems()})
                        </span>
                    </Nav>
                </Container>
            </Navbar>
            <Container>
                {children}
            </Container>
            <ShoppingCar/>
            <style jsx global>{`
            body {
                background-color: #D2ABDA !important;
            }
            `}</style>
        </>
    )
}