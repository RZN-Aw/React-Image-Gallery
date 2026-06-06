import cat1 from './assets/cat1.jpg'
import cat2 from './assets/cat1.jpg'
import cat3 from './assets/cat1.jpg'
import cat4 from './assets/cat1.jpg'
import cat5 from './assets/cat1.jpg'
import cat6 from './assets/cat1.jpg'
import cat7 from './assets/cat1.jpg'
import cat8 from './assets/cat1.jpg'
function Cards(props){
    return(
        
        <div style={{backgroundColor:"beige",display:"inline-block",width:"25%"}}>
        
                <img style={{width:"200px",height:"220px",border:"1px solid",paddingBottom:"30px",paddingLeft:"10px",paddingRight:"10px",paddingTop:"10px"}} src={props.image} alt="" />
            <p style={{position:"relative",bottom:"50px",fontSize:"20px",left:"5px"}}>{props.name}</p>
    
        </div>
    )
}
export default Cards