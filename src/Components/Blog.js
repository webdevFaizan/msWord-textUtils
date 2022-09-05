import React from 'react'

const Blog = (props) => {    
  return (
    <div className={`blogPage`} role="alert" style={{color : `${props.color}`}}>
        <h1>This is the blog page</h1>
        <div className="mb-3">
          <label htmlhtmlFor="exampleFormControlInput1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
          <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
        <button className='btn btn-primary'>Submit</button>

    </div>
  )
}
export default Blog
