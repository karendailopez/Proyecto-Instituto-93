import { forwardRef, useRef, useEffect, useState } from "react";
import Modal from 'bootstrap/js/dist/modal.js'

const MyInput = forwardRef(function MyInput({ title, children, icon, okText, variant, onOk }, ref) {
    const modalRef = useRef(null);

    useEffect(() => {
        ref.current = new Modal( modalRef.current );
    }, [ref]);

    const onOkClick = function () {
        if(onOk) {
            onOk();
        }

        ref.current.hide();
    }

    return <div ref={modalRef} className="modal fade" tabIndex="-1" aria-hidden="true" style={{marginTop: '0px', marginLeft: '0px', paddingLeft: '0px', zIndex: 10000}}>
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-body p-0">
                    { children }

                    <div className="px-5 pb-8 text-center">
                        <button type="button" className="btn btn-outline-secondary w-24 mr-1" onClick={() => { ref.current.hide() }}>Cancelar</button>
                        <button type="button" className={`btn btn-${variant ?? 'primary'} w-24`} onClick={onOkClick}>{okText}</button>
                    </div>
                </div>
            </div>
        </div>
    </div>;
});

export default MyInput;
