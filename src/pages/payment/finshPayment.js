import { Link } from 'react-router-dom';
import img1 from '../../asset/image/Icons/visa.png';


const finshPayment = () => {
    return (
        <div className='gallary'>
          <section className="top">
            <div>
              <h1>Payment</h1>
              <Link to="/">Home &gt;</Link>
              <span> Parents </span>
            </div>
          </section>
          <section className='contact-con py-5'>
                <div className='container'>

                    <div className='row'>
                        <div className='col-md-6 mx-auto'>

                        <ul className="nav nav-pills mb-3">
                            <li className="nav-item">
                                <Link to='/payment' className="nav-link">
                                    <img src={img1} alt='img' />
                                </Link>
                            </li>
                        </ul>
                        <h2 className='contact-head sm mb-4'>You Can use the reference number to pay through any of  the fawry channels</h2>
        
                        <form action='' className='mt-4'>

                            <div className='input-g'>
                                <label>Reference Number *</label>
                                <input type='number'  />
                            </div>

                            <div className='input-g'>
                                <label>Service Code *</label>
                                <input type='number' />
                            </div>

                            <button type='submit' className='form-btn up'>Finish</button>
                            
                        </form>

                        </div>
                    </div>
                </div>
          </section>
        </div>
      );
}


export default finshPayment