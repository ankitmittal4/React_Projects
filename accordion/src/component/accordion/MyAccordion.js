import React, {useState} from 'react';
const MyAccordion = ({question, answer}) => {
    const [show, setShow] = useState(false);
    return(
        <>
            <div className='ques-name'>
                <p onClick={() => setShow(!show)} className='symbol'> {show ? '-' : '+' }</p>
                <h3>{question}</h3>
            </div>
            {   show &&     <p className='answers'>{answer}</p> }
        </>
    )
}
export default MyAccordion;