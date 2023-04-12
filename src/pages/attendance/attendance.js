import { Link } from 'react-router-dom';
import parent1 from '../../asset/image/35.jpg';
import parent2 from '../../asset/image/36.jpg';
import parent3 from '../../asset/image/22.jpg';
import parent4 from '../../asset/image/23.jpg';
import './attendance.css'


const Attendance = () => {

    const childData=[
        { id:"1",image:parent1 , name:"Abdallah" , class:'Class 1', time:'Full Time', attendance:'Signed In'},
        { id:"2",image:parent2 , name:"nader" , class:'Class 1', time:'Full Time', attendance:'Signed In'},
        { id:"3",image:parent3 , name:"Ali" , class:'Class 2', time:'Full Time', attendance:'Signed In'},
        { id:"4",image:parent4 , name:"Omar" , class:'Class 1', time:'Half Time', attendance:'Absent '},
        { id:"5",image:parent1 , name:"Alaa" , class:'Class 3', time:'Full Time', attendance:'Signed In'},
        { id:"6",image:parent2 , name:"Mostafa" , class:'Class 1', time:'Full Time', attendance:'Signed In'},
    ];

    return (
        <div className='gallary'>
          <section className="top">
            <div>
              <h1>Attendance</h1>
              <Link to="/">Home &gt;</Link>
              <span> Parent </span>
            </div>
          </section>

          <section className='parents-page py-5'>
                <div className='container'>
                    <h2 className='main-title blue text-center'>Mange Your Child's attendance</h2>

                    <div className='attendance-top mt-5'>

                        <div className='attendance-left'>
                            <div className='attendance-input'>
                                <label className='filter-label'>choose your class</label>
                                <select className='filter-input'>
                                    <option value='0'>class 1</option>
                                    <option value='1'>class 2</option>
                                    <option value='2'>class 3</option>
                                </select>
                            </div>
                            <div className='attendance-input'>
                                <label className='filter-label'>Date</label>
                                <input type='date' className='filter-input' />
                            </div>
                        </div>

                        <div className='attendance-right'>
    
                            <div className='attendance-card'>
                                <div className='attendance-card-tit'>Signed In</div>
                                <div className='attendance-card-con'>
                                    <h5 className='attendance-total'>total</h5>
                                    <h5 className='attendance-num'>15</h5>
                                </div>
                            </div>
    
                            <div className='attendance-card'>
                                <div className='attendance-card-tit absent'>Absent</div>
                                <div className='attendance-card-con'>
                                    <h5 className='attendance-total'>total</h5>
                                    <h5 className='attendance-num'>15</h5>
                                </div>
                            </div>
    
                        </div>

                    </div>

                    <div className='attendance-con mt-5'>

                        <table className='attendance-table'>
                            <thead>
                                <th></th>
                                <th>Children</th>
                                <th>Class</th>
                                <th>Shedule</th>
                                <th>Status</th>
                            </thead>
                            <tbody>
                                

                                {childData.map(child =>{
                                        return (
                                            <tr key={child.id}>
                                                <td>{child.id}</td>
                                                <td className='td-img'>
                                                    <img className='child-img' src={child.image} alt='child' />
                                                    {child.name}
                                                </td>
                                                <td>{child.class}</td>
                                                <td className={child.time === 'Half Time' ? 'half' : ''}>{child.time}</td>
                                                <td className={child.attendance === 'Signed In' ? 'signed' : ''} >{child.attendance}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>

                    </div>
                </div>
          </section>
        </div>
      );
}


export default Attendance