import { useState } from 'react'
import Input from './Input'
import Form from "./Form";

export default function ShowData({ 
    label,
    data,
 }) {

    const [pos, setPos] = useState(null)

    function getPos(e) {
        console.log(e.target.classList)
        if (e.target.classList.contains("data-glob")) {
            setPos(parseInt(e.target.id.split("-")[1]))
        }
    }

    const classGen = "data-glob "+label;
    const headers = Object.keys(data[0]);
    if (pos === null) {
            return ( data.map((elem, i) => 
                <div className={classGen} id={label+"-"+i} key={i} onClick={getPos}>{
                    headers.map((cle) => 
                        <div className={"data-glob "+cle} id={cle+"-"+i} key={cle}>{elem[cle]}</div>
                    
                    )
                }</div>
            )
        )
    }
    else {
        return (
            
                
                    
                        <Form
                        label="test-label"
                    name="work"
                    data={data[pos]}
                    callback={()=>{}}
                    type="text"
                    loc={pos}
                    >
                    
                    </Form>
                    
                
            
        )
    }
    
 }