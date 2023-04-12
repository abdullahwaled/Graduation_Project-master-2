import { Link } from 'react-router-dom';
// import './contact.css'


const Complaints = () => {
    return (
        <div className='gallary'>
          <section className="top">
            <div>
              <h1>Sending Complaints</h1>
              <Link to="/">Home &gt;</Link>
              <span> Parent </span>
            </div>
          </section>
          <section className='contact-con py-5'>
                <div className='container'>
                    <h2 className='main-title text-center'>Want To Send Your Complaints</h2>
                    <h3 className='main-info text-center'>The nursery administration will review the complaint and will contact you via email</h3>
                    <form action='' className='mt-5'>
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
            
                            <div className='col-12'>
                                <div className='input-g'>
                                    <label>ID *</label>
                                    <input type='number' />
                                </div>
                            </div>
            
                            <div className='col-12'>
                                <div className='input-g'>
                                    <label> Your Message *</label>
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


export default Complaints