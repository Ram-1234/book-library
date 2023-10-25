import React from "react";
import CloseIcon from '@mui/icons-material/Close';
import './style.css';



const Modal = ({ data, closeHandle }) => {
        
    return (
        <React.Fragment>
            <div className="backgroundcss"></div>
            <div className="container">
                <div className="title">{data?.title}, {" "} Description</div>
                <CloseIcon onClick={() => closeHandle(false)} style={{ position: "absolute", top: "8px", right: "10px", cursor: "pointer", fontSize: "14px" }} />
                {data?.discreption ? <p>{data?.discreption
                }</p> : <p className="subtitle">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>}
            </div>
        </React.Fragment>
    )
}

export default Modal
