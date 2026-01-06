
import React,{useState} from 'react'

const Toggle = ()=>{

   const [ toggle, settoggle] = useState(true)
return(

  <div style={{backgroundColor: "pink", padding: "10px",}} >
    {toggle &&(
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit reiciendis inventore, a repellendus quis, rerum ab eaque harum cumque  <br/>
        cupiditate velit optio nostrum veniam, ducimus molestias excepturi alias. Qui earum non perspiciatis asperiores atque? Earum at iure  <br/>
        blanditiis ratione. Ex fugiat inventore, deserunt, debitis sed officia repellendus unde veniam magnam quae alias tempore officiis corrupti id  <br/>
        sint sunt odit accusamus. Neque tempore odio facere. Maiores dolore atque enim odit, nam obcaecati error porro debitis sed, fugit iste nisi <br/>
         reprehenderit nostrum voluptatem, et suscipit id. Debitis recusandae animi culpa fuga, quo eius esse expedita magnam autem ea delectus reprehenderit hic eum dolores  <br/>
        sed pariatur, vero a minus eveniet sapiente! Consequatur maxime ratione quia eveniet alias exercitationem aperiam quasi assumenda iure nemo.</p>
    )}

                      <button onClick={()=>{settoggle(!toggle)}}>  { toggle? "Hide" : "Show"} </button>
  </div>
)


}


export default Toggle;