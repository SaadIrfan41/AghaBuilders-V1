import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';

import About from './Pages/About';
import Services from './Pages/Services';
import BlogListing from './Pages/BlogListing';
import Faq from './Pages/Faq';
import Error from './Pages/Error';
import ContactUs from './Pages/ContactUs';
import PostSidebar from './Pages/PostSidebar';

import Blogpostdetails from './Pages/Blogpostdetails';

import ProjectDetail from './Pages/ProjectDetail';
import SupremeCourtPakistan from './Pages/SupremeCourtPakistan';
import House349 from './Pages/House349';
import Plaza232 from './Pages/Plaza232';
import BOPDemolition from './Pages/BOPDemolition';
import SuzukiMotors from './Pages/SuzukiMotors';    
import TechnoEngineering from './Pages/TechnoEngineering';
import UnionCafe from './Pages/UnionCafe';
import RendezvousXpress from './Pages/RendezvousXpress';
import House08 from './Pages/House08';
import CHElectronics from './Pages/CHElectronics';
import House354 from './Pages/House354';
import SikaInstallations from './Pages/SikaInstallations';
import Gallery from './Pages/Gallery';
import ProjectsPortfolio from './Pages/ProjectsPortfolio';



import ScrollToTop from './Common/ScrollToTop';

class Components extends React.Component {
    render() {
        return (
            <BrowserRouter basename="/">
                <ScrollToTop />
                <div className="page-wraper">
                        <Routes>
                            <Route path="/"  element={<Home/>} />
                         

                            <Route path='/about' element={<About/>} />
                            <Route path='/services' element={<Services/>} />


                            <Route path='/blogpostdetails' element={<Blogpostdetails/>} />
                            <Route path='/blog-listing' element={<BlogListing/>} />
                            <Route path='/faq' element={<Faq/>} />
                            <Route path='/error' element={<Error/>} />
                            <Route path='/contactus' element={<ContactUs/>} />

                            <Route path='/post-sidebar' element={<PostSidebar/>} />

                            <Route path='/project-detail' element={<ProjectDetail/>} />           
                            <Route path='/House349' element={<House349/>} />     
                            <Route path='/Plaza232' element={<Plaza232/>} />
                            <Route path='/BOPDemolition' element={<BOPDemolition/>} />
                            <Route path='/SuzukiMotors' element={<SuzukiMotors/>} />
                            <Route path='/SupremeCourtPakistan' element={<SupremeCourtPakistan/>} /> 
                            <Route path='/TechnoEngineering' element={<TechnoEngineering/>} />  
                            <Route path='/UnionCafe' element={<UnionCafe/>} />       
                            <Route path='/RendezvousXpress' element={<RendezvousXpress/>} />
                            <Route path='/House08' element={<House08/>} />
                            <Route path='/CHElectronics' element={<CHElectronics/>} />
                            <Route path='/House354' element={<House354/>} />
                            <Route path='/SikaInstallations' element={<SikaInstallations/>} />  

                            <Route path='/gallery' element={<Gallery/>} />


                            <Route path='/ProjectsPortfolio' element={<ProjectsPortfolio/>} />


                         

                            <Route path="*" element={<Error/>} />
                        </Routes>
                </div>
            </BrowserRouter>
        );
    };
};

export default Components;