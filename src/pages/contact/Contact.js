import { Link } from 'react-router-dom';
import './contact.css'


const Contact = () => {
    return (
        <div className='gallary'>
          <section className="top">
            <div>
              <h1> Contact</h1>
              <Link to="/">Home &gt;</Link>
              <span> Contact </span>
            </div>
          </section>
          <section className='contact-con py-5'>
                <div className='container'>
                    <h2 className='contact-head'>Contact Information</h2>
                    <h3 className='contact-text'>Communication With Us If You Need Help</h3>
                    <form action='' className='mt-4'>
                        <div className='row'>
                            <div className='col-md-6'>
                                <div className='input-g'>
                                    <label>Name *</label>
                                    <input type='text'  />
                                </div>
                            </div>
            
                            <div className='col-md-6'>
                                <div className='input-g'>
                                    <label>Email *</label>
                                    <input type='email' />
                                </div>
                            </div>
            
                            <div className='col-md-6'>
                                <div className='input-g'>
                                    <label>Phone *</label>
                                    <input type='number' />
                                </div>
                            </div>
            
                            <div className='col-md-6'>
                                <div className='input-g'>
                                    <label>Subject *</label>
                                    <input type='text' />
                                </div>
                            </div>
            
                            <div className='col-12'>
                                <div className='input-g'>
                                    <label>Message *</label>
                                    <textarea />
                                </div>
                            </div>

                        </div>
                        <button type='submit' className='form-btn up'>Send</button>
                        
                    </form>
                </div>
          </section>
        </div>
      );
}


export default Contact