import Image from 'next/image'
import ImgLogo from '../public/logo-better-safe.png'

import style from '../styles/Footer.module.css';

export default function Footer(){
    return(
        <>
            <div className={`border py-2 text-center footer ${style.footer}`}>
                <Image src={ImgLogo} alt="better safe" width={35} height={38}/>
                <h5>Better safe</h5>
            </div>
            <style jsx global>{`
            .footer{
                margin-top: auto !important;
                width: 100%;
            }
            `}</style>
        </>
    )
}