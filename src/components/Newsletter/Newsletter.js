import SendIcon from '@mui/icons-material/Send';
import "./NewsLetter.css"
export const Newsletter = () => {
  return (
    <>
<div className='container-fluid mt-5' style={{backgroundColor:"#fcf5f5"}}>
    <div className='row text-align-center' style={{textAlign:"center",textAlign:"center"}}>
        <h1 style={{fontSize:"50px"}}>Newsletter</h1>
        <p>Get timely updates from your favourite products</p>
    </div>
    <div className='container-fluid justify-content-center align-item-center w-50 widthcont' >
   <div className='row g-0 mb-3'>
    <div className='col-11 text-center mb-5 g-0'>
    <input type="text" className="form-control border-radius-none " placeholder="Email" aria-label="Email" style={{ borderRadius: "0px" }} />
      
    </div>
   <div className='col-1 g-0'>
   <button className="btn text-end mb-5" style={{ backgroundColor: "teal", color: "white", borderRadius: "0px" }}>
              <SendIcon />
            </button>
   </div>
   </div>
    {/* <div className="input-group mb-5">
  <input type="text" className="form-control border-radius-none"  placeholder="Email" aria-label="Email"style={{borderRadius:"0px"}} />
  <button className=" btn text-end" style={{backgroundColor:"teal",color:"white",borderRadius:"0px"}}><SendIcon/></button>
        </div> */}

  
    </div>
</div>
    </>
   )
}
