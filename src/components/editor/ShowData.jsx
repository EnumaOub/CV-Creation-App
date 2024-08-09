import { useState } from 'react'
import Form from "./Form";

function ShowWorkEduc(
    label,
    data,
    callback,
    emptyData) {
    const [pos, setPos] = useState(null);


    function getPos(e) {
        console.log(e.target.classList);
        if (e.target.classList.contains("data-show")) {
            setPos(parseInt(e.target.id.split("-")[1]));
        }
    }
    function resetShow() {
        setPos(null);
    }

    function addElem() {
        console.log(data)
        setPos(data.length);
        callback(emptyData, data.length, label)
    }

    const classGen = "data-show "+label;
    const headers = Object.keys(data[0]);
    if (pos === null) {
            return ( 
                <>
                <div className='show-data-glob'>{
                    data.map((elem, i) => 
                        <div className={classGen} id={label+"-"+i} key={i} onClick={getPos}>{
                            headers.map((cle) => 
                                <div className={"data-res "+cle} id={cle+"-"+i} key={cle}>{elem[cle]}</div>
                            
                            )
                        }
                        <h2 className='edit'>EDIT</h2>
                        </div>
                    )
                    }
                    
                </div>
                <button type="button" onClick={addElem}>Add</button>
                </>
            )
    }
    else {
        return (
                    <Form
                        key={label}
                        label={label}
                        name={label}
                        data={data[pos]}
                        reset={resetShow}
                        callback={callback}
                        type="text"
                        loc={pos}
                    >
                    
                    </Form>

        )
    }
    
}

function ShowTask(
    label,
    data,
    callback) {

        return (
            <Form
                key={label}
                label={label}
                name={label}
                data={data}
                reset={null}
                callback={callback}
                type="text"
                loc={0}
            >
            
            </Form>

        )
    
    
}


export default function ShowData({ 
    label,
    data,
    callback,
    emptyData
 }) {

    return Array.isArray(data) ? ShowWorkEduc(label, data, callback, emptyData) : ShowTask(label, data, callback);
    
 }