import React, { useState, useEffect } from 'react';
import './modal.css';
import { sendProof } from '../../store/actions/userActions'; 
import { connect } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';

let Modal = (props) => {
    const {profile, matched} = props.auth;
    const payID = profile && profile.matchedToPay && profile.matchedToPay.payID;
    // console.log('modal props: ', p)
    const [desc, setDesc] = useState({ description: '', file: null });
    const [err, setErr] = useState({ descriptionErr: '', fileErr: '' })
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setDesc({ ...desc, [e.target.name]: e.target.value })
        setErr({ ...err, descriptionErr: '' })
    }

    useEffect(() => {

    }, [matched])

    const fileSelectedHandler = (e) => {
        setDesc({ ...desc, file: e.target.files[0] })
        setErr({...err, fileErr: ''})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (desc.description.length < 1) {
            setErr({ ...err, descriptionErr: 'describe how the payment is done' })
        } else {
            if (!desc.file || !(/\.(jpe?g|png|gif)$/i.test(desc.file.name))) {
                setErr({ ...err, fileErr: 'you cannot upload file of this nature' })
            } else if (desc.file.size > 5242880) {
                setErr({ ...err, fileErr: 'you cannot upload file greater than 5MB' })
            } else {
                const data = {
                    description: desc.description, file: desc.file
                }
                setLoading(true)
                props.sendProof(data, matched.payID).then(res => {
                    if(res.success) {
                        setLoading(false)
                        toast.success(res.message);
                        setTimeout(() => {
                            window.location.reload();
                        }, 2000)
                    }
                }).catch(err => {
                    toast.success(err.err)
                    setLoading(false)
                    setTimeout(() => {
                        window.location.reload();
                    }, 2000)
                })
            }
        }
    }

    return (
        <>
        <ToastContainer autoClose={2000} />
        <div className="container cont_">

            <div className="modal fade" id="myModal" role="dialog">
                <div className="modal-dialog">

                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>
                        <div className="modal-body">
                            <p><strong>Send proof of payment.</strong></p>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className='my_modal_form'>
                                <textarea type='text' placeholder='description' name='description' onChange={handleChange}></textarea>
                                {err.descriptionErr.length > 0 && <div className='auth_errors' style={{ marginBottom: '15px' }}>{err.descriptionErr}</div>}
                                <input type='file' onChange={fileSelectedHandler} />
                                {err.fileErr.length > 0 && <div className='auth_errors' style={{ marginBottom: '15px' }}>{err.fileErr}</div>}
                            </div>
                            <div className="modal-footer">
                                <button style={{ backgroundColor: '#d9534f', color: 'white' }} type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                                <button style={{ backgroundColor: '#5cb85c', color: 'white' }} id='submit_btn' data-dismiss='' type="submit" className="btn btn-default" >{loading ? 'loading...' : 'Send'}</button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>

        </div>
</>
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

Modal = connect(mapStateToProps, { sendProof })(Modal)

export { Modal }