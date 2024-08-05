import PropTypes from 'prop-types'

export default function Skills({ info }){
    const sizeLanguage = info.language.length;
    const sizeTech = info.technologies.length;
    return (
        <>
            {sizeLanguage > 0 ? (
                <div id="language" className='skills'>
                <p>Language: </p>
                <div className="skill-list">
                    {info.language.map((lang,iter) => 
                            iter<sizeLanguage-1 ? (
                                <p key={iter}>{lang}, </p>
                            ): (
                                <p key={iter}>{lang} </p>
                            )
                    )}
                </div>
                </div>
            ) : (
                <div />
            )}
            {sizeTech > 0 ? (
                <div id="technology" className='skills'>
                <p>Technologies: </p>
                <div className="skill-list">
                    {info.technologies.map((tech,iter) => 
                        iter<sizeTech-1 ? (
                            <p key={iter}>{tech}, </p>
                        ): (
                            <p key={iter}>{tech} </p>
                        )
                            
                    )}
                </div>
                </div>
            ) : (
                <div />
            )}
        </>
    )
}

Skills.PropTypes = {
    info: PropTypes.objectOf(
        PropTypes.arrayOf(
            PropTypes.string
        )
    ).isRequired
};