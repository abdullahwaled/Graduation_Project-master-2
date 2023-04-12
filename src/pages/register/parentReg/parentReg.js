import { Link } from 'react-router-dom';
import radio_button from '../../../asset/image/Icons/radio_button_1.png';
import radio_button_ac from '../../../asset/image/Icons/radio_button_2.png';

// import './attendance.css'


const RegParent = () => {

    return (
        <div className='py-5'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-7 mx-auto'>
                        <div className='reg-top'>
                            Already Have Account ? 
                            <Link to='/parentLogin' className='sec-btn'>Login</Link>
                        </div>
                        <div className='project-name'>Baby Daycare</div>
                        <div className='tabs-m'>
                            <Link to='/regParent' className='tab-m active'>
                                <img src={radio_button_ac} alt='radio_button' />
                                Parent
                            </Link>
                            <Link to='/regStaff' className='tab-m'>
                                <img src={radio_button} alt='radio_button' />
                                Staff
                            </Link>
                            <Link to='/regOwaner' className='tab-m'>
                                <img src={radio_button} alt='radio_button_ac' />
                                Owner
                            </Link>
                        </div>
                        <form  action='' className='mt-4'>
                            <div className='row'>
                    
                                <div className='col-md-6'>
                                    <div className='input-g'>
                                        <label>User Name *</label>
                                        <input type='text'  />
                                    </div>
                                </div>
                    
                                <div className='col-md-6'>
                                    <div className='input-g'>
                                        <label>Daycare Id *</label>
                                        <input type='number'  />
                                    </div>
                                </div>
                    
                                <div className='col-12'>
                                    <div className='input-g'>
                                        <label>Email *</label>
                                        <input type='email'  />
                                    </div>
                                </div>
                    
                                <div className='col-12'>
                                    <div className='input-g'>
                                        <label>Password *</label>
                                        <input type='password'  />
                                    </div>
                                </div>
                    
                                <div className='col-12'>
                                    <div className='input-g'>
                                        <label>Confirm Password *</label>
                                        <input type='password'  />
                                    </div>
                                </div>
                    
                            </div>
                            <button type='submit' className='form-btn up'>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
      );
}


export default RegParent