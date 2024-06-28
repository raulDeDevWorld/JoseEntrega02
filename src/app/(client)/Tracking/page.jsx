
'use client'
import { useUser } from '@/context/Context'
import { onAuth, signInWithEmail, writeUserData, getSpecificData } from '@/firebase/utils'
import { useEffect, useState, useRef } from 'react'
import Subtitle from '@/components/Subtitle'
import { useRouter } from 'next/navigation';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.compat.css"
import priceFTL from '@/db/priceFTL.json'
import 'react-awesome-slider/dist/styles.css';
import Footer from '@/components/Footer'
import { useSearchParams } from 'next/navigation'
import Button from '@/components/Button'
import InputFlotante from '@/components/InputFlotante'






function Pages() {
    const { user, introVideo, userDB, setUserProfile, setUserSuccess, nav, navItem, setuserDB, focus, setFocus, seeMore, setSeeMore } = useUser()


    const [query, setQuery] = useState('')
    const [db, setDB] = useState(null)

    console.log(db)
    useEffect(() => {
        if (window && typeof window !== "undefined") {
            setQuery(window.location.href.split('=')[1])
        }
        query && getSpecificData(`Tracking/${query}`, setDB)
    }, [query])

    return <div className="relative flex justify-center min-h-screen pt-[70px]">
        <img src="/airplane-bg.jpg" className='fixed top-0 w-screen h-screen  object-cover ' alt="" />

        <div className="relative  py-[25px] max-w-[960px] w-[80vw] bg-white p-[20px]  shadow-[0 4px 8px rgba(0,0,0,0.1)]">
            {db ? <form className="relative  pt-5 sm:col-span-3 mb-5 pb-5 border-b-[.5px] "  >
                <div className='relative p-5 my-5 mt-10 bg-white space-y-5'>
                    <h5 className='text-center font-medium text-[16px]'>Informacion de Carga<br /> </h5>

                    <div className='relative p-5 my-5 bg-white space-y-5 shadow-2xl '>

                        <h5 className=' font-medium text-[16px]'>DETALLE DEL SERVICIO <br /> </h5>


                        <table className='w-full mt-[20px] border-collapse	table-fixed'>
                            <tr>
                                <th className=' border-[1px]  border-[#ccc] p-[8px] text-left font-bold bg-[#f9f9f9]' >
                                    FECHA DE CREACION
                                </th>
                                <td className=' border-[1px]  border-[#ccc] p-[8px] text-left break-words'>
                                    {db['FECHA DE CREACION']}
                                </td>
                            </tr>
                            <tr>
                                <th className=' border-[1px]  border-[#ccc] p-[8px] text-left font-bold bg-[#f9f9f9]' >
                                    CODIGO DE SERVICIO
                                </th>
                                <td className=' border-[1px]  border-[#ccc] p-[8px] text-left break-words'>
                                    {db['CODIGO DE SERVICIO']}
                                </td>
                            </tr>
                            <tr>
                                <th className=' border-[1px]  border-[#ccc] p-[8px] text-left font-bold bg-[#f9f9f9]' >
                                    CODIGO DE CLIENTE
                                </th>
                                <td className=' border-[1px]  border-[#ccc] p-[8px] text-left break-words'>
                                    {db['CODIGO DE CLIENTE']}
                                </td>
                            </tr>
                            <tr>
                                <th className=' border-[1px]  border-[#ccc] p-[8px] text-left font-bold bg-[#f9f9f9]' >
                                    MODALIDAD DE TRANSPORTE
                                </th>
                                <td className=' border-[1px]  border-[#ccc] p-[8px] text-left break-words'>
                                    {db['MODALIDAD DE TRANSPORTE']}
                                </td>
                            </tr>
                            <tr>
                                <th className=' border-[1px]  border-[#ccc] p-[8px] text-left font-bold bg-[#f9f9f9]' >
                                    DESTINO
                                </th>
                                <td className=' border-[1px]  border-[#ccc] p-[8px] text-left break-words'>
                                    {db['DESTINO']}
                                </td>
                            </tr>
                            <tr>
                                <th className=' border-[1px]  border-[#ccc] p-[8px] text-left font-bold bg-[#f9f9f9]' >
                                    MERCANCIA
                                </th>
                                <td className=' border-[1px]  border-[#ccc] p-[8px] text-left break-words'>
                                    {db['MERCANCIA']}
                                </td>
                            </tr>
                            <tr>
                                <th className=' border-[1px]  border-[#ccc] p-[8px] text-left font-bold bg-[#f9f9f9]' >
                                    PESO TN
                                </th>
                                <td className=' border-[1px]  border-[#ccc] p-[8px] text-left break-words'>
                                    {db['PESO TN']}
                                </td>
                            </tr>
                            <tr>
                                <th className=' border-[1px]  border-[#ccc] p-[8px] text-left font-bold bg-[#f9f9f9]' >
                                    SHIPPER
                                </th>
                                <td className=' border-[1px]  border-[#ccc] p-[8px] text-left break-words'>
                                    {db['SHIPPER']}
                                </td>
                            </tr>
                            <tr>
                                <th className=' border-[1px]  border-[#ccc] p-[8px] text-left font-bold bg-[#f9f9f9]' >
                                    CONSIGNATARIO
                                </th>
                                <td className=' border-[1px]  border-[#ccc] p-[8px] text-left break-words'>
                                    {db['CONSIGNATARIO']}
                                </td>
                            </tr>
                            <tr>
                                <th className=' border-[1px]  border-[#ccc] p-[8px] text-left font-bold bg-[#f9f9f9]' >
                                    MANIFIESTO
                                </th>
                                <td className=' border-[1px]  border-[#ccc] p-[8px] text-left break-words'>
                                    {db['MANIFIESTO']}
                                </td>
                            </tr>
                            <tr>
                                <th className=' border-[1px]  border-[#ccc] p-[8px] text-left font-bold bg-[#f9f9f9]' >
                                    ETD
                                </th>
                                <td className=' border-[1px]  border-[#ccc] p-[8px] text-left break-words'>
                                    {db['ETD']}
                                </td>
                            </tr>
                            <tr>
                                <th className=' border-[1px]  border-[#ccc] p-[8px] text-left font-bold bg-[#f9f9f9]' >
                                    ETA
                                </th>
                                <td className=' border-[1px]  border-[#ccc] p-[8px] text-left break-words'>
                                    {db['ETA']}
                                </td>
                            </tr>
                        </table>

                        <h5 className=' font-medium text-[16px]'>STATUS <br /> </h5>

                        <table className='w-full mt-[20px] border-collapse	table-fixed'>
                          

                            {db && db.subItems && Object.values(db.subItems).map((item, index) => {
                                return <tr>
                                    <th className=' border-[1px]  border-[#ccc] p-[8px] text-left font-bold bg-[#f9f9f9]' >
                                        {item[`ip`]}
                                    </th>
                                    <td className=' border-[1px]  border-[#ccc] p-[8px] text-left break-words'>
                                        {item[`ic`]}
                                    </td>
                                </tr>
                            })
                            }

                        </table>

                    </div>



                    {/* 
                        <div className='flex justify-center'>
                            <Button theme="Primary" click={(e) => { saveFrontPage(e,) }}>Guardar</Button>
                        </div> */}
                </div>
            </form> :
               <div> DATOS INEXISTENTES</div> 
            }





        </div>
    </div>
}

export default Pages
