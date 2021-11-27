import React from 'react'

function Searchbox(props) {


    return (
      <div className="container">
  <div className="row">
  <section className="col s4 offset-s4">
    <form  action="" onSubmit={props.handleSubmit}>
     < div className="input-field">
    <input 
    type="text" 
    placeholder="Search movie..." 
    className="searchbox" 
    onChange={props.handleChange}
    />
    </div>
    </form>
    </section>
  </div>
</div>
    )
}

export default Searchbox























// 1
// {props.handleSubmit}  creat function in Appjs function
//  as aprop in searchbox comp und accessing it with (this)
// so write prose hier Searchbox(props) als parameter

// 2
// anthore props onChange      onChange={props.handleChange}

// 3
// in app js set up apiKey in the constructor 

// 4 creat movie component list component 