import { useState } from 'react'

export default function Accordion({ legend, content }) {
    const [open, setOpen] = useState(false);

    function openAccordion(e) {
        console.log(e.target.classList)
        e.target.classList.toggle("active");
        setOpen(!open);
    }

    return (
        <div className="accordion">
            <div 
                className="header" 
                onClick={openAccordion}
                role="button">
                <h2 className="title">{legend}</h2>
                <div className="icon">
                    { open ? (<p>&darr;</p>) : 
                    (<p>&uarr;</p>) 
                    }
                </div>
            </div>
            { !open ? (<div className='content-editor'></div>) : 
                    (<div className='content-editor active'>{content}</div>) 
            }
            
        </div>
    )
}