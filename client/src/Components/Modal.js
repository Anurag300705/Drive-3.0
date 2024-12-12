import { useEffect } from "react";
import "./Modal.css"
const Modal = ({ setModalOpen, contract }) => {
    const sharing = async () => {
        const address = document.querySelector(".address").value;
        await contract.allow(address);
        console.log("shared")
        setModalOpen(false);
    };

    return <>
        <div className="modalBAckground">
            <div className="modalContainer">
                <div className="title">Share with</div>
                <div className="body">
                    <input type="text" className="address" />
                </div>
                <form action="" id="myform">
                    <select name="" id="" className="selectNumber">
                        <option value="" className="address">People with Access</option>
                    </select>
                </form>
                <div className="footer">
                    <button id="cancelBtn" onClick={() => { setModalOpen(false) }}>Cancel</button>
                    <button id="cancelBtn" onClick={() => sharing()}>Share</button>
                </div>
            </div>
        </div>
    </>;
};

export default Modal;