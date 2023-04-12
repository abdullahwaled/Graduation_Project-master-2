
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';

import Header from "./sections/header/Header";
import Home from "./pages/home/Home";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import About from 'pages/aboutus/About';
import Teacher from 'pages/teacher/Teacher';
import Event from 'pages/event/Event';
import Gallary from 'pages/gallary/Gallary';
import Testimonials from 'pages/testimonials/Testimonials';
import Contentupload from 'pages/contantupload/Contentupload';
import Timetable from 'pages/timetable/Timetable';
import Contact from 'pages/contact/Contact';
import Complaints from 'pages/complaints/complaints';
import Parent from 'pages/parent/parent';
import Attendance from 'pages/attendance/attendance';
import LoginOwaner from 'pages/login/ownerLogin/ownarLogin';
import ParentLogin from 'pages/login/parentLogin/parentLogin';
import SatffLogin from 'pages/login/satffLogin/staffLogin';
import RegOwaner from 'pages/register/ownerReg/ownerReg';
import ParentReg from 'pages/register/parentReg/parentReg';
import StaffReg from 'pages/register/staffReg/staffReg';
import Payment from 'pages/payment/payment';
import FinshPayment from 'pages/payment/finshPayment';
import Communication from 'pages/communication/communication';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Header />}>
      <Route index element={<Home />} />
      <Route  path='/about' element={<About />} />
      <Route path='/teacher' element={<Teacher />} />
      <Route path='/event' element={<Event />} />
      <Route path='/gallary' element={<Gallary />} />
      <Route path='/testimonials' element={<Testimonials />} />
      <Route path='/contantupload' element={<Contentupload />} />
      <Route path='/timetable' element={<Timetable />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/complaints' element={<Complaints />} />
      <Route path='/parent' element={<Parent />} />
      <Route path='/attendance' element={<Attendance />} />
      <Route path='/loginOwaner' element={<LoginOwaner />} />
      <Route path='/parentLogin' element={<ParentLogin />} />
      <Route path='/satffLogin' element={<SatffLogin />} />
      <Route path='/regOwaner' element={<RegOwaner />} />
      <Route path='/regParent' element={<ParentReg />} />
      <Route path='/regStaff' element={<StaffReg />} />
      <Route path='/payment' element={<Payment />} />
      <Route path='/finshPayment' element={<FinshPayment />} />
      <Route path='/communication' element={<Communication />} />
    </Route>
  )
);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
