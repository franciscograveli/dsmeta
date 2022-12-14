import axios from 'axios';
import icon from '../../assets/img/notification-icon.svg'
import { BASE_URL } from '../../utils/request';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './styles.css'

type Props = {
    saleId: number;
}
function handleClick(id : number){
    axios(`${BASE_URL}/sales/${id}/notification`)
    .then(response => {
        toast('SMS enviado com sucesso !', {
            position: toast.POSITION.TOP_CENTER,
            className: 'toast-message',
            progressClassName: 'bar'
        });
    });
}
function NotificationButton( {saleId} : Props) {

    return (
        <>
            <div className="dsmeta-red-btn" onClick={()=> {handleClick(saleId)}}>
                <img src={icon} alt="Notificar" />
            </div>
        </>
    )
}

export default NotificationButton
