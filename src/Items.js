import React, {useState} from 'react'
import data from './Data'

function Items() {
    const [count, setCount] = useState(0)
    const [text, setText] = useState([])

    const handleSubmit =(e) =>{
        e.preventDefault()
        let amount = parseInt(count)
        if(count<=0){
            amount = 1
        }
        if(count >8){
            amount = 8
        }
        setText(data.slice(0, amount))
    }
    
    return (
        <div>
            <div className="lorem-main">
                <p className="heading">TIRED OF BORING LOREM IPSUM?</p>
                <div className="lorem-form">
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="amount">Paragraph: </label>
                        <input type="number" 
                                name="amount" 
                                id="amount"
                                value= {count}
                                onChange={(e)=>setCount(e.target.value)}
                        />
                        <button className="btn"> Generate</button>
                    </form>
                </div>
                <article className="lorem-text">
                    {text.map((item, index)=>{
                        return <p key={index}>{item} </p>
                    })}
                </article>
            </div>
        </div>
    )
}

export default Items
