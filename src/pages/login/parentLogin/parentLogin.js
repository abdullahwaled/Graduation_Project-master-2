import { Link } from 'react-router-dom';
import boss from '../../../asset/image/Icons/boss.png';
import family from '../../../asset/image/Icons/family.png';
import teacher2 from '../../../asset/image/Icons/teacher (2).png';
// import './attendance.css'


const loginOwaner = () => {

    return (
        <div className='login-sec py-5'>
            <div className='container'>
                <div className='row gy-4'>
                    <div className='col-md-6'>
                        <form className='login-form' action=''>
                            <div className='login-img-con'>
                                <img className='login-img' src={family} alt='boss' />
                            </div>
                            <h3 className='login-title'>Parent Or Child Login</h3>

                            <div className='input-g'>
                                <label>Id *</label>
                                <input type='number'  />
                            </div>
                            <div className='input-g'>
                                <label>Password *</label>
                                <input type='password' />
                            </div>
                            <div className='input-g'>
                                <Link to='/regParent'>create account</Link>
                            </div>

                            <button type='submit' className='form-btn up'>Login</button>
                        </form>
                    </div>

                    <div className='col-md-6'>
                        <div className='login-form mb-4'>
                            <div className='login-img-con'>
                                <img className='login-img sm' src={boss} alt='boss' />
                            </div>
                            <h3 className='login-title'>Owner Login</h3>

                            <div className='text-center'>
                                <Link to='/loginOwaner' className='form-btn up log'>Login In Here</Link>
                            </div>
                        </div>

                        <div className='login-form'>
                            <div className='login-img-con'>
                                <img className='login-img sm' src={teacher2} alt='boss' />
                            </div>
                            <h3 className='login-title'>Staff Login</h3>

                            <div className='text-center'>
                                <Link to='/satffLogin' className='form-btn up log'>Login In Here</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      );
}


export default loginOwaner