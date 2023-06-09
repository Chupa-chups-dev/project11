import React from 'react'
import { motion } from 'framer-motion'
import s from './Projects.module.scss'
import map from './../../assets/map.png'
import place from './../../assets/place.svg'


const textAnimation = {
    hidden: {
        y: -100,
        opacity: 0,
    },
    visible: custom => ({
        y: 0,
        opacity: 1,
        transition: { delay: custom * 0.3 },

    }),
}


export default function Projects() {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2, once: true }}
            className={s.projects}>
            <div className="container">
                <motion.h2 custom={1} variants={textAnimation}>ГЕОГРАФИЯ ПРОЕКТОВ</motion.h2>
                <motion.div custom={2} variants={textAnimation} className={s.map__container}>
                    <img className={s.map} src={map} alt="" />
                    <div className={s.place1}>
                        <img className={s.place} src={place} alt="" />
                        <div className={s.text}>
                            <p><span>Псковская область:</span> концессионный проект в сфере ТКО.</p>
                        </div>
                    </div>

                    <div className={s.place2}>
                        <img className={s.place} src={place} alt="" />
                        <div className={s.text}>
                            <p><span>Московская область:</span> концессионные проекты в сферах теплоснабжения, ТКО, фото-видео фиксации.</p>
                        </div>
                    </div>
                    <div className={s.place3}>
                        <img className={s.place} src={place} alt="" />
                        <div className={s.text}>
                            <p><span>Карелия:</span> Представление интересов клиента при подаче заявки в концессионном проекте в сфере ТКО.</p>
                        </div>
                    </div>
                    <div className={s.place4}>
                        <img className={s.place} src={place} alt="" />
                        <div className={s.text}>
                            <p><span>Владимирская область:</span> концессионный проект в сфере ТКО.</p>
                        </div>
                    </div>
                    <div className={s.place5}>
                        <img className={s.place} src={place} alt="" />
                        <div className={s.text}>
                            <p><span>Мордовия:</span> концессионный проект в сфере ТКО.</p>
                        </div>
                    </div>
                    <div className={s.place6}>
                        <img className={s.place} src={place} alt="" />
                        <div className={s.text}>
                            <p><span>Свердловская область:</span> концессионный проект в сфере ТКО.</p>
                        </div>
                    </div>
                    <div className={s.place7}>
                        <img className={s.place} src={place} alt="" />
                        <div className={s.text}>
                            <p><span>ХМАО - Югра:</span> Серия концессионных проектов в сфере ТКО.</p>
                        </div>
                    </div>
                    <div className={s.place8}>
                        <img className={s.place} src={place} alt="" />
                        <div className={s.text}>
                            <p><span>Омская область:</span> Серия концессионных проектов в сфере ТКО. Сопровождение регионального оператора в сфере ТКО.</p>
                        </div>
                    </div>
                    <div className={s.place9}>
                        <img className={s.place} src={place} alt="" />
                        <div className={s.text}>
                            <p><span>ЯНАО:</span> серия концессионных проектов в сфере ТКО, сопровождение региональных операторов в сфере ТКО.</p>
                        </div>
                    </div>
                    <div className={s.place10}>
                        <img className={s.place} src={place} alt="" />
                        <div className={s.text}>
                            <p><span>Алтай:</span> концессионный проект в сфере ТКО.</p>
                        </div>
                    </div>
                    <div className={s.place11}>
                        <img className={s.place} src={place} alt="" />
                        <div className={s.text}>
                            <p><span>Хакасия:</span> концессионный проект в сфере ТКО.</p>
                        </div>
                    </div>
                    <div className={s.place12}>
                        <img className={s.place} src={place} alt="" />
                        <div className={s.text}>
                            <p><span>Саха (Якутия):</span> концессионный проект в сфере ТКО.</p>
                        </div>
                    </div>
                    <div className={s.place13}>
                        <img className={s.place} src={place} alt="" />
                        <div className={s.text}>
                            <p><span>Амурская область:</span> Концессионные проекты в социальной сфере, сфере ТКО.</p>
                        </div>
                    </div>
                    <div className={s.place14}>
                        <img className={s.place} src={place} alt="" />
                        <div className={s.text}>
                            <p><span>Новосибирская область:</span> концессионный проект в сфере ТКО. Сопровождение регионального оператора в сфере ТКО.</p>
                        </div>
                    </div>
                    <div className={s.place15}>
                        <img className={s.place} src={place} alt="" />
                        <div className={s.text}>
                            <p><span>Сахалин:</span> Концессионные проекты в социальной сфере, ТКО.</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    )
}
