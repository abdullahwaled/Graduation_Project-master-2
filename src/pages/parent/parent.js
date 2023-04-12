import { Link } from 'react-router-dom';
import { BiCheck } from "react-icons/bi";
import parent1 from '../../asset/image/35.jpg';
import parent2 from '../../asset/image/36.jpg';
import parent3 from '../../asset/image/22.jpg';
import parent4 from '../../asset/image/23.jpg';
import wingImg from '../../asset/image/Icons/pngwing.com (1).png';
import healthImg1 from '../../asset/image/Icons/wheat.png';
import healthImg2 from '../../asset/image/Icons/fruits.png';
import healthImg3 from '../../asset/image/Icons/vegetable.png';
import './parent.css'


const Parent = () => {

    const parentdata=[
        { id:"1",image:parent1 , text:"Communication" , info:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"},
        { id:"2",image:parent2 , text:"Communication" , info:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"},
        { id:"3",image:parent3 , text:"Communication" , info:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"},
        { id:"4",image:parent4 , text:"Communication" , info:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"},
    ];

    return (
        <div className='gallary'>
          <section className="top">
            <div>
              <h1>Parent Info</h1>
              <Link to="/">Home &gt;</Link>
              <span> Parent </span>
            </div>
          </section>

          <section className='parents-page py-5'>
                <div className='container'>
                    <h2 className='main-title blue text-center'>Information For Parent</h2>
                    <h3 className='main-info text-center'>
                        Established relationships with parents means we 
                        can share information positively and effectively to support children as mush as possible 
                    </h3>
                    

                    <div className='parents-con mt-5'>
                        <div className='row gy-5'>

                            {parentdata.map(parent =>{
                                return (
                                    <div className='col-lg-6' key={parent.id}>
                                        <div className='parent-card'>
                                            <img className='parent-img' src={parent.image} alt='parent' />
                                            <div className='parent-right'>
                                                <div className='parent-top'>
                                                    <div className='ic'><BiCheck /></div>
                                                    <span className='parent-text'>{parent.text}</span>
                                                </div>

                                                <p className='parent-info'>
                                                    {parent.info}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}

                        </div>
                    </div>
                </div>
          </section>

          <div className='parent-info-sec py-5'>
            <div className='container'>
                <div className='parent-info-flex'>
                    <img className='health-img' src={wingImg} alt='wingImg' />

                    <div className='health-right'>
                        <h2 className='health-title'>
                            <span className='blue'>Healthy </span>
                            Nutrition For Growing children
                        </h2>

                        <p className='health-text'>
                            The three week rotating menu is planned accordion to the food Guide and recommendations from our loacl Public
                            The three week rotating menu is planned accordion to the food Guide and recommendations from our loacl Public
                            The three week rotating menu is planned accordion to the food Guide and recommendations from our loacl Public
                            The three week rotating menu is planned accordion to the food Guide and recommendations from our loacl Public
                            The three week rotating menu is planned accordion to the food Guide and recommendations from our loacl Public
                        </p>

                        <div className='health-cards'>
                            <div className='health-card'>
                                <img  className='health-card-img' src={healthImg1} alt='healthImg' />
                                <div className='health-card-text'>Grains</div>
                            </div>
                            <div className='health-card'>
                                <img  className='health-card-img' src={healthImg2} alt='healthImg' />
                                <div className='health-card-text'>Fruits</div>
                            </div>
                            <div className='health-card'>
                                <img  className='health-card-img' src={healthImg3} alt='healthImg' />
                                <div className='health-card-text'>Vegetables</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      );
}


export default Parent