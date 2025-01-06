'use client'

import { React } from 'react'
import ButtonSlider from '../CategorySlider/Categoryslider'

const Agregator = (props) => {
    const labels = props.data;

    return (
        <section className="gradient">
            <div className="block">
                <ButtonSlider data={labels} />
            </div>
        </section>
    )
}

export default Agregator