import PropTypes from 'prop-types'

export default function ShowWorkEduc({ arrData }){
    console.log("ShowWorkEduc")
    return (
        <>
            {arrData.length > 0 ? (
                arrData.map((data,iter) => 
                    <div key={iter} className="print"> 
                    <div className="main">
                        <div id='title'>
                            {data.title}
                        </div>
                        <div id='name'>
                            {data.name}
        
                        </div>
                        <div id='date'>
                            {data.date}
                        </div>
                    </div>
                    {('tasks' in data && data.tasks.length > 0) ? (
                        <ul className="print task">
                            {data.tasks.map((item,i) => 
                            <li key={i}>{item}</li>
                            )}
                        </ul>
                    ) : (
                        <div />
                    ) }
                    </div>
                    )
                ) : (
                    <div />
                )}
            
            
        </>
    )
}

ShowWorkEduc.PropTypes = {
    arrData: PropTypes.array,
};