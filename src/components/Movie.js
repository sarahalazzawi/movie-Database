import React from 'react'


function Movie(props) {


return (
     <div className="col s12 m6 l3 ">
         <div className="card">
             <div className="card-image waves-effect waves-block waves-light ">
                 {
                    props.image === 'N/A' ?
                     <img src={'https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg'} alt="card" />
                    : <img src={props.image} alt="card" style={{ width: "120", height: 360 }} />

                  }

                </div>
                <div className="card-content">
               
            {/* <a className="waves-effect waves-light red btn"  onClick= {()=>props.handelDetails(props.imdbID) }>ViewDetails</a> */}
            <a className="waves-effect waves-light red btn" onClick= {()=>props.handelDetails(props.imdbID) }>ViewDetails</a>
            </div>
         </div>
     </div>
    )
}

export default Movie
