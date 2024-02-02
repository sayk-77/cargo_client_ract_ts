import React, {CSSProperties} from 'react'
import { Header } from '../header/Header'
import { Feedback } from '../home/feedback'

export const Question:React.FC = () => {
    const styles: CSSProperties = {
        textAlign: 'center',
        fontSize: '24px',
        fontWeight: 'normal',
        paddingBottom: '30px',
        maxWidth: '700px',
        margin: '0 auto',
        padding: '0 10px 30px'
    }

    return (
        <>
            <Header />
            <h1 style={styles}>
                Если у вас есть вопросы, напишите нам. Наши специалисты свяжуться с вами в ближайшее время
            </h1>
            <Feedback />
        </>
    )
}