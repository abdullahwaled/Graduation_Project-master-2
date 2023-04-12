import { Link } from 'react-router-dom';
import img1 from '../../asset/image/Icons/visa.png';
import img2 from '../../asset/image/Icons/fawry.jpg';
// import './contact.css'


const Payment = () => {
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
                    <h2 className='main-title text-center'>Payment</h2>
                    <h3 className='main-info text-center'>Choose Payment Method Below</h3>

                    <div className='row'>
                        <div className='col-md-6 mx-auto'>

                        <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">
                                    <img src={img1} alt='img' />
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">
                                    <img src={img2} alt='img' />
                                </button>
                            </li>
                        </ul>
                        <div className="tab-content" id="pills-tabContent">
                            <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">

                                <form action='' className='mt-4'>
                                    <h3 className='contact-text'>Credit Card Info</h3>
        
                                    <div className='input-g'>
                                        <label>Card Number *</label>
                                        <input type='number'  />
                                    </div>
                                    <div className='input-g'>
                                        <label>Expire Data *</label>
                                        <input type='number' />
                                    </div>
                                    <div className='input-g'>
                                        <label>Cvv *</label>
                                        <input type='number' />
                                    </div>

                                    <button type='submit' className='form-btn up'>Pay</button>
                                    
                                </form>

                            </div>
                            <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">

                                <form action='' className='mt-4'>
        
                                    <div className='input-g'>
                                        <label>Email *</label>
                                        <input type='number'  />
                                    </div>

                                    <div className='input-g'>
                                        <label>Your Phone(optional) *</label>
                                        <input type='number' />
                                    </div>

                                    <Link to='/finshPayment' className='form-btn up'>Continue</Link>
                                    
                                </form>

                            </div>
                        </div>
                





                        </div>
                    </div>
                </div>
          </section>
        </div>
      );
}


export default Payment