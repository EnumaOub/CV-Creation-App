import { useState } from 'react'
import Icon from '@mdi/react';
import { mdiArrowDownThick, mdiArrowUpThick } from '@mdi/js';

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
                    { open ? (<Icon path={mdiArrowUpThick} size={1} />) : 
                    (<Icon path={mdiArrowDownThick} size={1} />) 
                    }
                </div>
            </div>
            { !open ? (<div className='content-editor'></div>) : 
                    (<div className='content-editor active'>{content}</div>) 
            }
            
        </div>
    )
}