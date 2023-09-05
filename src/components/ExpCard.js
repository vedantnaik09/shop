import React from 'react'

function ExpCard(props) {
  return (
    
    <div className="card" style={{width:props.screenSize.width/2, margin:"auto",backgroundColor:"black", color:"white",border:"5px solid white", padding:"2rem", maxHeight:"90%",marginTop:props.screenSize.height/4}}>
  <div className="card-body" >
    <h1 className="card-title" style={{textAlign:"center",fontSize: props.screenSize.width/40,color:"#94cdff"}}>Explore</h1>
    <p className="card-text my-5" style={{fontSize: props.screenSize.width/70, textAlign:"center"}}>Explore across the categories of our products</p>
    <select className="form-select" aria-label="Default select example" style={{backgroundColor:"#183039",color:"white",fontSize: props.screenSize.width/80,}} >
    <option selected>All</option>
    <option value="1">Electronics</option>
    <option value="2">Jewelry</option>
    <option value="3">Men's Clothing</option>
    <option value="3">Women's clothing</option>
</select>
<button type="button" className="btn btn-primary" style={{display:"block",margin:"auto", marginTop:"10%",fontSize: props.screenSize.width/60}}>Explore this nest</button>
  </div>
</div>
    
  )
}

export default ExpCard
