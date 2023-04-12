import { Link } from 'react-router-dom';
import social from '../../asset/image/Icons/social-media.png';

import './communication.css'


const Attendance = () => {


    return (
        <div className='gallary'>
          <section className="top">
            <div>
              <h1>Communication</h1>
              <Link to="/">Home &gt;</Link>
              <span> Parent </span>
            </div>
          </section>

          <section className='parents-page py-5'>
                <div className='container'>

                    <div className='communication-sec'>
                        <img className='communication-img' src={social} alt='communication' />

                        <div className='communication-content'>
                            <h2 className='communication-title'>Instant Messaging</h2>
                            <h1 className='communication-head'>Communication that's Fast Simple & Secure</h1>
                            <p className='communication-info'>
                                Email wasn't made for parent Communication. Update
                                parents , ask questions, and answer inquiries more efficiently with instant messaging. 
                            </p>
                        </div>
                    </div>

                </div>
          </section>
        </div>
      );
}


export default Attendance