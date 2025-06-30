import React, { useEffect, useState } from "react";
import Header from "./../Common/Header";
import Banner from "./../Elements/Banner";
import { NavLink } from "react-router-dom";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import Footer from "./../Common/Footer";

var bnrimg = require("./../../images/banner/6.jpg");

const filters = [
  { label: "House 349", filter: "cat-1" },
  { label: "House 354", filter: "cat-2" },
  { label: "House 08", filter: "cat-3" },
  { label: "house no 333", filter: "cat-10" },
  { label: "Electric Automation", filter: "cat-16" },
  { label: "Elevator Installations", filter: "cat-15" },
  { label: "Ch Electronics", filter: "cat-4" },
  { label: "Allied School", filter: "cat-5" },
  { label: "Indian High Commission", filter: "cat-6" },
  { label: "Suzuki Motors Islamabad", filter: "cat-7" },
  { label: "Techno Engineering", filter: "cat-8" },
  { label: "Union Cafe", filter: "cat-9" },
  { label: "BOP Demolition", filter: "cat-11" },
  { label: "Plaza 232", filter: "cat-12" },
  { label: "Sika Installations", filter: "cat-14" },
  { label: "Solar Solutions", filter: "cat-17" },
  { label: "Misc", filter: "cat-18" },
];

const projects = [
  // Electric Automation
  {
    thumb: require("./../../images/gallery/ElectricAutomation/1.jpg"),
    image: require("./../../images/gallery/ElectricAutomation/1.jpg"),
    filter: "cat-16",
  },
  {
    thumb: require("./../../images/gallery/ElectricAutomation/2.jpg"),
    image: require("./../../images/gallery/ElectricAutomation/2.jpg"),
    filter: "cat-16",
  },
  {
    thumb: require("./../../images/gallery/ElectricAutomation/3.jpg"),
    image: require("./../../images/gallery/ElectricAutomation/3.jpg"),
    filter: "cat-16",
  },
  {
    thumb: require("./../../images/gallery/ElectricAutomation/4.jpg"),
    image: require("./../../images/gallery/ElectricAutomation/4.jpg"),
    filter: "cat-16",
  },
  {
    thumb: require("./../../images/gallery/ElectricAutomation/5.jpg"),
    image: require("./../../images/gallery/ElectricAutomation/5.jpg"),
    filter: "cat-16",
  },
  {
    thumb: require("./../../images/gallery/ElectricAutomation/6.jpg"),
    image: require("./../../images/gallery/ElectricAutomation/6.jpg"),
    filter: "cat-16",
  },
  {
    thumb: require("./../../images/gallery/ElectricAutomation/7.jpg"),
    image: require("./../../images/gallery/ElectricAutomation/7.jpg"),
    filter: "cat-16",
  },
  {
    thumb: require("./../../images/gallery/ElectricAutomation/8.jpg"),
    image: require("./../../images/gallery/ElectricAutomation/8.jpg"),
    filter: "cat-16",
  },
  {
    thumb: require("./../../images/gallery/ElectricAutomation/9.jpg"),
    image: require("./../../images/gallery/ElectricAutomation/9.jpg"),
    filter: "cat-16",
  },
  {
    thumb: require("./../../images/gallery/ElectricAutomation/10.jpg"),
    image: require("./../../images/gallery/ElectricAutomation/10.jpg"),
    filter: "cat-16",
  },

  // Lift Installations //-----------------------------------------------------------------------------------

  {
    thumb: require("./../../images/gallery/LiftInstallations/1.jpg"),
    image: require("./../../images/gallery/LiftInstallations/1.jpg"),
    filter: "cat-15",
  },
  {
    thumb: require("./../../images/gallery/LiftInstallations/2.jpg"),
    image: require("./../../images/gallery/LiftInstallations/2.jpg"),
    filter: "cat-15",
  },
  // Solar Solutions //-----------------------------------------------------------------------------------

  {
    thumb: require("./../../images/gallery/SolarSolutions/1.jpg"),
    image: require("./../../images/gallery/SolarSolutions/1.jpg"),
    filter: "cat-17",
  },
  {
    thumb: require("./../../images/gallery/SolarSolutions/2.jpg"),
    image: require("./../../images/gallery/SolarSolutions/2.jpg"),
    filter: "cat-17",
  },
  {
    thumb: require("./../../images/gallery/SolarSolutions/3.jpg"),
    image: require("./../../images/gallery/SolarSolutions/3.jpg"),
    filter: "cat-17",
  },
  {
    thumb: require("./../../images/gallery/SolarSolutions/4.jpg"),
    image: require("./../../images/gallery/SolarSolutions/4.jpg"),
    filter: "cat-17",
  },
  {
    thumb: require("./../../images/gallery/SolarSolutions/5.jpg"),
    image: require("./../../images/gallery/SolarSolutions/5.jpg"),
    filter: "cat-17",
  },
  {
    thumb: require("./../../images/gallery/SolarSolutions/6.jpg"),
    image: require("./../../images/gallery/SolarSolutions/6.jpg"),
    filter: "cat-17",
  },

  // House 349 //-----------------------------------------------------------------------------------

  {
    thumb: require("./../../images/gallery/House349/1.jpg"),
    image: require("./../../images/gallery/House349/1.jpg"),
    filter: "cat-1",
  },
  {
    thumb: require("./../../images/gallery/House349/2.jpg"),
    image: require("./../../images/gallery/House349/2.jpg"),
    filter: "cat-1",
  },
  {
    thumb: require("./../../images/gallery/House349/3.jpg"),
    image: require("./../../images/gallery/House349/3.jpg"),
    filter: "cat-1",
  },
  {
    thumb: require("./../../images/gallery/House349/4.jpg"),
    image: require("./../../images/gallery/House349/4.jpg"),
    filter: "cat-1",
  },
  {
    thumb: require("./../../images/gallery/House349/5.jpg"),
    image: require("./../../images/gallery/House349/5.jpg"),
    filter: "cat-1",
  },
  {
    thumb: require("./../../images/gallery/House349/6.jpg"),
    image: require("./../../images/gallery/House349/6.jpg"),
    filter: "cat-1",
  },
  {
    thumb: require("./../../images/gallery/House349/7.jpg"),
    image: require("./../../images/gallery/House349/7.jpg"),
    filter: "cat-1",
  },
  {
    thumb: require("./../../images/gallery/House349/8.jpg"),
    image: require("./../../images/gallery/House349/8.jpg"),
    filter: "cat-1",
  },
  {
    thumb: require("./../../images/gallery/House349/9.jpg"),
    image: require("./../../images/gallery/House349/9.jpg"),
    filter: "cat-1",
  },
  {
    thumb: require("./../../images/gallery/House349/10.jpg"),
    image: require("./../../images/gallery/House349/10.jpg"),
    filter: "cat-1",
  },
  {
    thumb: require("./../../images/gallery/House349/11.jpg"),
    image: require("./../../images/gallery/House349/11.jpg"),
    filter: "cat-1",
  },
  {
    thumb: require("./../../images/gallery/House349/12.jpg"),
    image: require("./../../images/gallery/House349/12.jpg"),
    filter: "cat-1",
  },
  // House 354  //-----------------------------------------------------------------------------------
  {
    thumb: require("./../../images/gallery/House354/1.jpg"),
    image: require("./../../images/gallery/House354/1.jpg"),
    filter: "cat-2",
  },
  {
    thumb: require("./../../images/gallery/House354/2.jpg"),
    image: require("./../../images/gallery/House354/2.jpg"),
    filter: "cat-2",
  },
  {
    thumb: require("./../../images/gallery/House354/3.jpg"),
    image: require("./../../images/gallery/House354/3.jpg"),
    filter: "cat-2",
  },
  {
    thumb: require("./../../images/gallery/House354/4.jpg"),
    image: require("./../../images/gallery/House354/4.jpg"),
    filter: "cat-2",
  },
  {
    thumb: require("./../../images/gallery/House354/5.jpg"),
    image: require("./../../images/gallery/House354/5.jpg"),
    filter: "cat-2",
  },
  {
    thumb: require("./../../images/gallery/House354/6.jpg"),
    image: require("./../../images/gallery/House354/6.jpg"),
    filter: "cat-2",
  },
  {
    thumb: require("./../../images/gallery/House354/7.jpg"),
    image: require("./../../images/gallery/House354/7.jpg"),
    filter: "cat-2",
  },
  {
    thumb: require("./../../images/gallery/House354/8.jpg"),
    image: require("./../../images/gallery/House354/8.jpg"),
    filter: "cat-2",
  },
  {
    thumb: require("./../../images/gallery/House354/9.jpg"),
    image: require("./../../images/gallery/House354/9.jpg"),
    filter: "cat-2",
  },
  {
    thumb: require("./../../images/gallery/House354/10.jpg"),
    image: require("./../../images/gallery/House354/10.jpg"),
    filter: "cat-2",
  },
  {
    thumb: require("./../../images/gallery/House354/11.jpg"),
    image: require("./../../images/gallery/House354/11.jpg"),
    filter: "cat-2",
  },
  {
    thumb: require("./../../images/gallery/House354/12.jpg"),
    image: require("./../../images/gallery/House354/12.jpg"),
    filter: "cat-2",
  },
  {
    thumb: require("./../../images/gallery/House354/13.jpg"),
    image: require("./../../images/gallery/House354/13.jpg"),
    filter: "cat-2",
  },
  {
    thumb: require("./../../images/gallery/House354/14.jpg"),
    image: require("./../../images/gallery/House354/14.jpg"),
    filter: "cat-2",
  },
  {
    thumb: require("./../../images/gallery/House354/15.jpg"),
    image: require("./../../images/gallery/House354/15.jpg"),
    filter: "cat-2",
  },
  {
    thumb: require("./../../images/gallery/House354/16.jpg"),
    image: require("./../../images/gallery/House354/16.jpg"),
    filter: "cat-2",
  },
  {
    thumb: require("./../../images/gallery/House354/17.jpg"),
    image: require("./../../images/gallery/House354/17.jpg"),
    filter: "cat-2",
  },
  {
    thumb: require("./../../images/gallery/House354/18.jpg"),
    image: require("./../../images/gallery/House354/18.jpg"),
    filter: "cat-2",
  },
  {
    thumb: require("./../../images/gallery/House354/19.jpg"),
    image: require("./../../images/gallery/House354/19.jpg"),
    filter: "cat-2",
  },
  {
    thumb: require("./../../images/gallery/House354/20.jpg"),
    image: require("./../../images/gallery/House354/20.jpg"),
    filter: "cat-2",
  },
  {
    thumb: require("./../../images/gallery/House354/21.jpg"),
    image: require("./../../images/gallery/House354/21.jpg"),
    filter: "cat-2",
  },
  {
    thumb: require("./../../images/gallery/House354/22.jpg"),
    image: require("./../../images/gallery/House354/22.jpg"),
    filter: "cat-2",
  },
  {
    thumb: require("./../../images/gallery/House354/23.jpg"),
    image: require("./../../images/gallery/House354/23.jpg"),
    filter: "cat-2",
  },
  {
    thumb: require("./../../images/gallery/House354/24.jpg"),
    image: require("./../../images/gallery/House354/24.jpg"),
    filter: "cat-2",
  },
  {
    thumb: require("./../../images/gallery/House354/25.jpg"),
    image: require("./../../images/gallery/House354/25.jpg"),
    filter: "cat-2",
  },
  {
    thumb: require("./../../images/gallery/House354/26.jpg"),
    image: require("./../../images/gallery/House354/26.jpg"),
    filter: "cat-2",
  },
  {
    thumb: require("./../../images/gallery/House354/27.jpg"),
    image: require("./../../images/gallery/House354/27.jpg"),
    filter: "cat-2",
  },
  {
    thumb: require("./../../images/gallery/House354/28.jpg"),
    image: require("./../../images/gallery/House354/28.jpg"),
    filter: "cat-2",
  },
  {
    thumb: require("./../../images/gallery/House354/29.jpg"),
    image: require("./../../images/gallery/House354/29.jpg"),
    filter: "cat-2",
  },
  {
    thumb: require("./../../images/gallery/House354/30.jpg"),
    image: require("./../../images/gallery/House354/30.jpg"),
    filter: "cat-2",
  },
  {
    thumb: require("./../../images/gallery/House354/31.jpg"),
    image: require("./../../images/gallery/House354/31.jpg"),
    filter: "cat-2",
  },
  {
    thumb: require("./../../images/gallery/House354/32.jpg"),
    image: require("./../../images/gallery/House354/32.jpg"),
    filter: "cat-2",
  },
  {
    thumb: require("./../../images/gallery/House354/33.jpg"),
    image: require("./../../images/gallery/House354/33.jpg"),
    filter: "cat-2",
  },
  {
    thumb: require("./../../images/gallery/House354/34.jpg"),
    image: require("./../../images/gallery/House354/34.jpg"),
    filter: "cat-2",
  },
  {
    thumb: require("./../../images/gallery/House354/35.jpg"),
    image: require("./../../images/gallery/House354/35.jpg"),
    filter: "cat-2",
  },
  {
    thumb: require("./../../images/gallery/House354/36.jpg"),
    image: require("./../../images/gallery/House354/36.jpg"),
    filter: "cat-2",
  },
  // {
  //   thumb: require('./../../images/gallery/House354/37.jpg'),
  //   image: require('./../../images/gallery/House354/37.jpg'),
  //   filter: 'cat-2',
  // },
  // {
  //   thumb: require('./../../images/gallery/House354/38.jpg'),
  //   image: require('./../../images/gallery/House354/38.jpg'),
  //   filter: 'cat-2',
  // },
  // {
  //   thumb: require('./../../images/gallery/House354/39.jpg'),
  //   image: require('./../../images/gallery/House354/39.jpg'),
  //   filter: 'cat-2',
  // },
  {
    thumb: require("./../../images/gallery/House354/40.jpg"),
    image: require("./../../images/gallery/House354/40.jpg"),
    filter: "cat-2",
  },
  {
    thumb: require("./../../images/gallery/House354/41.jpg"),
    image: require("./../../images/gallery/House354/41.jpg"),
    filter: "cat-2",
  },
  {
    thumb: require("./../../images/gallery/House354/42.jpg"),
    image: require("./../../images/gallery/House354/42.jpg"),
    filter: "cat-2",
  },

  // House 08  //-----------------------------------------------------------------------------------
  {
    thumb: require("./../../images/gallery/House08/1.jpg"),
    image: require("./../../images/gallery/House08/1.jpg"),
    filter: "cat-3",
  },
  {
    thumb: require("./../../images/gallery/House08/2.jpg"),
    image: require("./../../images/gallery/House08/2.jpg"),
    filter: "cat-3",
  },
  {
    thumb: require("./../../images/gallery/House08/3.jpg"),
    image: require("./../../images/gallery/House08/3.jpg"),
    filter: "cat-3",
  },
  {
    thumb: require("./../../images/gallery/House08/4.jpg"),
    image: require("./../../images/gallery/House08/4.jpg"),
    filter: "cat-3",
  },
  {
    thumb: require("./../../images/gallery/House08/5.jpg"),
    image: require("./../../images/gallery/House08/5.jpg"),
    filter: "cat-3",
  },
  {
    thumb: require("./../../images/gallery/House08/6.jpg"),
    image: require("./../../images/gallery/House08/6.jpg"),
    filter: "cat-3",
  },
  {
    thumb: require("./../../images/gallery/House08/7.jpg"),
    image: require("./../../images/gallery/House08/7.jpg"),
    filter: "cat-3",
  },
  {
    thumb: require("./../../images/gallery/House08/8.jpg"),
    image: require("./../../images/gallery/House08/8.jpg"),
    filter: "cat-3",
  },
  {
    thumb: require("./../../images/gallery/House08/9.jpg"),
    image: require("./../../images/gallery/House08/9.jpg"),
    filter: "cat-3",
  },
  {
    thumb: require("./../../images/gallery/House08/10.jpg"),
    image: require("./../../images/gallery/House08/10.jpg"),
    filter: "cat-3",
  },
  {
    thumb: require("./../../images/gallery/House08/11.jpg"),
    image: require("./../../images/gallery/House08/11.jpg"),
    filter: "cat-3",
  },
  {
    thumb: require("./../../images/gallery/House08/12.jpg"),
    image: require("./../../images/gallery/House08/12.jpg"),
    filter: "cat-3",
  },
  {
    thumb: require("./../../images/gallery/House08/13.jpg"),
    image: require("./../../images/gallery/House08/13.jpg"),
    filter: "cat-3",
  },
  {
    thumb: require("./../../images/gallery/House08/14.jpg"),
    image: require("./../../images/gallery/House08/14.jpg"),
    filter: "cat-3",
  },
  {
    thumb: require("./../../images/gallery/House08/15.jpg"),
    image: require("./../../images/gallery/House08/15.jpg"),
    filter: "cat-3",
  },
  {
    thumb: require("./../../images/gallery/House08/16.jpg"),
    image: require("./../../images/gallery/House08/16.jpg"),
    filter: "cat-3",
  },
  {
    thumb: require("./../../images/gallery/House08/17.jpg"),
    image: require("./../../images/gallery/House08/17.jpg"),
    filter: "cat-3",
  },
  {
    thumb: require("./../../images/gallery/House08/18.jpg"),
    image: require("./../../images/gallery/House08/18.jpg"),
    filter: "cat-3",
  },
  {
    thumb: require("./../../images/gallery/House08/19.jpg"),
    image: require("./../../images/gallery/House08/19.jpg"),
    filter: "cat-3",
  },
  {
    thumb: require("./../../images/gallery/House08/20.jpg"),
    image: require("./../../images/gallery/House08/20.jpg"),
    filter: "cat-3",
  },
  {
    thumb: require("./../../images/gallery/House08/21.jpg"),
    image: require("./../../images/gallery/House08/21.jpg"),
    filter: "cat-3",
  },
  {
    thumb: require("./../../images/gallery/House08/22.jpg"),
    image: require("./../../images/gallery/House08/22.jpg"),
    filter: "cat-3",
  },
  {
    thumb: require("./../../images/gallery/House08/23.jpg"),
    image: require("./../../images/gallery/House08/23.jpg"),
    filter: "cat-3",
  },
  {
    thumb: require("./../../images/gallery/House08/24.jpg"),
    image: require("./../../images/gallery/House08/24.jpg"),
    filter: "cat-3",
  },

  // Ch Electronics  //-----------------------------------------------------------------------------------
  {
    thumb: require("./../../images/gallery/CHElectronics/1.jpg"),
    image: require("./../../images/gallery/CHElectronics/1.jpg"),
    filter: "cat-4",
  },
  {
    thumb: require("./../../images/gallery/CHElectronics/2.jpg"),
    image: require("./../../images/gallery/CHElectronics/2.jpg"),
    filter: "cat-4",
  },
  {
    thumb: require("./../../images/gallery/CHElectronics/3.jpg"),
    image: require("./../../images/gallery/CHElectronics/3.jpg"),
    filter: "cat-4",
  },
  {
    thumb: require("./../../images/gallery/CHElectronics/4.jpg"),
    image: require("./../../images/gallery/CHElectronics/4.jpg"),
    filter: "cat-4",
  },
  {
    thumb: require("./../../images/gallery/CHElectronics/5.jpg"),
    image: require("./../../images/gallery/CHElectronics/5.jpg"),
    filter: "cat-4",
  },
  {
    thumb: require("./../../images/gallery/CHElectronics/6.jpg"),
    image: require("./../../images/gallery/CHElectronics/6.jpg"),
    filter: "cat-4",
  },
  {
    thumb: require("./../../images/gallery/CHElectronics/7.jpg"),
    image: require("./../../images/gallery/CHElectronics/7.jpg"),
    filter: "cat-4",
  },
  {
    thumb: require("./../../images/gallery/CHElectronics/8.jpg"),
    image: require("./../../images/gallery/CHElectronics/8.jpg"),
    filter: "cat-4",
  },
  {
    thumb: require("./../../images/gallery/CHElectronics/9.jpg"),
    image: require("./../../images/gallery/CHElectronics/9.jpg"),
    filter: "cat-4",
  },
  {
    thumb: require("./../../images/gallery/CHElectronics/10.jpg"),
    image: require("./../../images/gallery/CHElectronics/10.jpg"),
    filter: "cat-4",
  },
  // Allied School  //-----------------------------------------------------------------------------------
  {
    thumb: require("./../../images/gallery/AlliedSchool/1.jpg"),
    image: require("./../../images/gallery/AlliedSchool/1.jpg"),
    filter: "cat-5",
  },
  // IndianHighCommission  //-----------------------------------------------------------------------------------
  {
    thumb: require("./../../images/gallery/IndianHighCommission/1.jpg"),
    image: require("./../../images/gallery/IndianHighCommission/1.jpg"),
    filter: "cat-6",
  },
  {
    thumb: require("./../../images/gallery/IndianHighCommission/2.jpg"),
    image: require("./../../images/gallery/IndianHighCommission/2.jpg"),
    filter: "cat-6",
  },
  {
    thumb: require("./../../images/gallery/IndianHighCommission/3.jpg"),
    image: require("./../../images/gallery/IndianHighCommission/3.jpg"),
    filter: "cat-6",
  },
  {
    thumb: require("./../../images/gallery/IndianHighCommission/4.jpg"),
    image: require("./../../images/gallery/IndianHighCommission/4.jpg"),
    filter: "cat-6",
  },
  // Suzuki Motors //-----------------------------------------------------------------------------------

  {
    thumb: require("./../../images/gallery/SuzukiMotorsIslamabad/1.jpg"),
    image: require("./../../images/gallery/SuzukiMotorsIslamabad/1.jpg"),
    filter: "cat-7",
  },
  {
    thumb: require("./../../images/gallery/SuzukiMotorsIslamabad/2.jpg"),
    image: require("./../../images/gallery/SuzukiMotorsIslamabad/2.jpg"),
    filter: "cat-7",
  },
  {
    thumb: require("./../../images/gallery/SuzukiMotorsIslamabad/3.jpg"),
    image: require("./../../images/gallery/SuzukiMotorsIslamabad/3.jpg"),
    filter: "cat-7",
  },
  {
    thumb: require("./../../images/gallery/SuzukiMotorsIslamabad/4.jpg"),
    image: require("./../../images/gallery/SuzukiMotorsIslamabad/4.jpg"),
    filter: "cat-7",
  },
  {
    thumb: require("./../../images/gallery/SuzukiMotorsIslamabad/5.jpg"),
    image: require("./../../images/gallery/SuzukiMotorsIslamabad/5.jpg"),
    filter: "cat-7",
  },
  {
    thumb: require("./../../images/gallery/SuzukiMotorsIslamabad/6.jpg"),
    image: require("./../../images/gallery/SuzukiMotorsIslamabad/6.jpg"),
    filter: "cat-7",
  },

  // Techno Engineering //-----------------------------------------------------------------------------------
  {
    thumb: require("./../../images/gallery/TechnoEngineering/1.jpg"),
    image: require("./../../images/gallery/TechnoEngineering/1.jpg"),
    filter: "cat-8",
  },
  {
    thumb: require("./../../images/gallery/TechnoEngineering/2.jpg"),
    image: require("./../../images/gallery/TechnoEngineering/2.jpg"),
    filter: "cat-8",
  },

  {
    thumb: require("./../../images/gallery/TechnoEngineering/3.jpg"),
    image: require("./../../images/gallery/TechnoEngineering/3.jpg"),
    filter: "cat-8",
  },

  {
    thumb: require("./../../images/gallery/TechnoEngineering/4.jpg"),
    image: require("./../../images/gallery/TechnoEngineering/4.jpg"),
    filter: "cat-8",
  },

  {
    thumb: require("./../../images/gallery/TechnoEngineering/5.jpg"),
    image: require("./../../images/gallery/TechnoEngineering/5.jpg"),
    filter: "cat-8",
  },

  {
    thumb: require("./../../images/gallery/TechnoEngineering/6.jpg"),
    image: require("./../../images/gallery/TechnoEngineering/6.jpg"),
    filter: "cat-8",
  },
  // Union Cafe //-----------------------------------------------------------------------------------
  {
    thumb: require("./../../images/gallery/UnionCafe/1.jpg"),
    image: require("./../../images/gallery/UnionCafe/1.jpg"),
    filter: "cat-9",
  },
  {
    thumb: require("./../../images/gallery/UnionCafe/2.jpg"),
    image: require("./../../images/gallery/UnionCafe/2.jpg"),
    filter: "cat-9",
  },
  {
    thumb: require("./../../images/gallery/UnionCafe/3.jpg"),
    image: require("./../../images/gallery/UnionCafe/3.jpg"),
    filter: "cat-9",
  },
  {
    thumb: require("./../../images/gallery/UnionCafe/4.jpg"),
    image: require("./../../images/gallery/UnionCafe/4.jpg"),
    filter: "cat-9",
  },
  {
    thumb: require("./../../images/gallery/UnionCafe/5.jpg"),
    image: require("./../../images/gallery/UnionCafe/5.jpg"),
    filter: "cat-9",
  },
  {
    thumb: require("./../../images/gallery/UnionCafe/6.jpg"),
    image: require("./../../images/gallery/UnionCafe/6.jpg"),
    filter: "cat-9",
  },
  {
    thumb: require("./../../images/gallery/UnionCafe/7.jpg"),
    image: require("./../../images/gallery/UnionCafe/7.jpg"),
    filter: "cat-9",
  },
  {
    thumb: require("./../../images/gallery/UnionCafe/8.jpg"),
    image: require("./../../images/gallery/UnionCafe/8.jpg"),
    filter: "cat-9",
  },
  {
    thumb: require("./../../images/gallery/UnionCafe/9.jpg"),
    image: require("./../../images/gallery/UnionCafe/9.jpg"),
    filter: "cat-9",
  },
  {
    thumb: require("./../../images/gallery/UnionCafe/10.jpg"),
    image: require("./../../images/gallery/UnionCafe/10.jpg"),
    filter: "cat-9",
  },
  {
    thumb: require("./../../images/gallery/UnionCafe/11.jpg"),
    image: require("./../../images/gallery/UnionCafe/11.jpg"),
    filter: "cat-9",
  },
  {
    thumb: require("./../../images/gallery/UnionCafe/12.jpg"),
    image: require("./../../images/gallery/UnionCafe/12.jpg"),
    filter: "cat-9",
  },
  {
    thumb: require("./../../images/gallery/UnionCafe/13.jpg"),
    image: require("./../../images/gallery/UnionCafe/13.jpg"),
    filter: "cat-9",
  },
  {
    thumb: require("./../../images/gallery/UnionCafe/14.jpg"),
    image: require("./../../images/gallery/UnionCafe/14.jpg"),
    filter: "cat-9",
  },
  {
    thumb: require("./../../images/gallery/UnionCafe/15.jpg"),
    image: require("./../../images/gallery/UnionCafe/15.jpg"),
    filter: "cat-9",
  },
  {
    thumb: require("./../../images/gallery/UnionCafe/16.jpg"),
    image: require("./../../images/gallery/UnionCafe/16.jpg"),
    filter: "cat-9",
  },
  // House 333 //-----------------------------------------------------------------------------------
  {
    thumb: require("./../../images/gallery/House333/1.jpg"),
    image: require("./../../images/gallery/House333/1.jpg"),
    filter: "cat-10",
  },
  {
    thumb: require("./../../images/gallery/House333/2.jpg"),
    image: require("./../../images/gallery/House333/2.jpg"),
    filter: "cat-10",
  },
  {
    thumb: require("./../../images/gallery/House333/3.jpg"),
    image: require("./../../images/gallery/House333/3.jpg"),
    filter: "cat-10",
  },
  {
    thumb: require("./../../images/gallery/House333/4.jpg"),
    image: require("./../../images/gallery/House333/4.jpg"),
    filter: "cat-10",
  },
  {
    thumb: require("./../../images/gallery/House333/5.jpg"),
    image: require("./../../images/gallery/House333/5.jpg"),
    filter: "cat-10",
  },

  {
    thumb: require("./../../images/gallery/House333/7.jpg"),
    image: require("./../../images/gallery/House333/7.jpg"),
    filter: "cat-10",
  },
  {
    thumb: require("./../../images/gallery/House333/8.jpg"),
    image: require("./../../images/gallery/House333/8.jpg"),
    filter: "cat-10",
  },

  // Bop Demolition //-----------------------------------------------------------------------------------
  {
    thumb: require("./../../images/gallery/BopDemplition/1.jpg"),
    image: require("./../../images/gallery/BopDemplition/1.jpg"),
    filter: "cat-11",
  },
  {
    thumb: require("./../../images/gallery/BopDemplition/2.jpg"),
    image: require("./../../images/gallery/BopDemplition/2.jpg"),
    filter: "cat-11",
  },
  {
    thumb: require("./../../images/gallery/BopDemplition/3.jpg"),
    image: require("./../../images/gallery/BopDemplition/3.jpg"),
    filter: "cat-11",
  },
  {
    thumb: require("./../../images/gallery/BopDemplition/4.jpg"),
    image: require("./../../images/gallery/BopDemplition/4.jpg"),
    filter: "cat-11",
  },
  {
    thumb: require("./../../images/gallery/BopDemplition/5.jpg"),
    image: require("./../../images/gallery/BopDemplition/5.jpg"),
    filter: "cat-11",
  },
  // Plaza 232 //-----------------------------------------------------------------------------------
  {
    thumb: require("./../../images/gallery/Plaza232/1.jpg"),
    image: require("./../../images/gallery/Plaza232/1.jpg"),
    filter: "cat-12",
  },
  {
    thumb: require("./../../images/gallery/Plaza232/2.jpg"),
    image: require("./../../images/gallery/Plaza232/2.jpg"),
    filter: "cat-12",
  },
  {
    thumb: require("./../../images/gallery/Plaza232/3.jpg"),
    image: require("./../../images/gallery/Plaza232/3.jpg"),
    filter: "cat-12",
  },
  {
    thumb: require("./../../images/gallery/Plaza232/4.jpg"),
    image: require("./../../images/gallery/Plaza232/4.jpg"),
    filter: "cat-12",
  },
  {
    thumb: require("./../../images/gallery/Plaza232/5.jpg"),
    image: require("./../../images/gallery/Plaza232/5.jpg"),
    filter: "cat-12",
  },
  {
    thumb: require("./../../images/gallery/Plaza232/6.jpg"),
    image: require("./../../images/gallery/Plaza232/6.jpg"),
    filter: "cat-12",
  },
  {
    thumb: require("./../../images/gallery/Plaza232/7.jpg"),
    image: require("./../../images/gallery/Plaza232/7.jpg"),
    filter: "cat-12",
  },
  {
    thumb: require("./../../images/gallery/Plaza232/8.jpg"),
    image: require("./../../images/gallery/Plaza232/8.jpg"),
    filter: "cat-12",
  },
  {
    thumb: require("./../../images/gallery/Plaza232/9.jpg"),
    image: require("./../../images/gallery/Plaza232/9.jpg"),
    filter: "cat-12",
  },
  {
    thumb: require("./../../images/gallery/Plaza232/10.jpg"),
    image: require("./../../images/gallery/Plaza232/10.jpg"),
    filter: "cat-12",
  },
  {
    thumb: require("./../../images/gallery/Plaza232/11.jpg"),
    image: require("./../../images/gallery/Plaza232/11.jpg"),
    filter: "cat-12",
  },
  {
    thumb: require("./../../images/gallery/Plaza232/12.jpg"),
    image: require("./../../images/gallery/Plaza232/12.jpg"),
    filter: "cat-12",
  },
  {
    thumb: require("./../../images/gallery/Plaza232/13.jpg"),
    image: require("./../../images/gallery/Plaza232/13.jpg"),
    filter: "cat-12",
  },
  {
    thumb: require("./../../images/gallery/Plaza232/14.jpg"),
    image: require("./../../images/gallery/Plaza232/14.jpg"),
    filter: "cat-12",
  },
  {
    thumb: require("./../../images/gallery/Plaza232/15.jpg"),
    image: require("./../../images/gallery/Plaza232/15.jpg"),
    filter: "cat-12",
  },
  // Sika //-----------------------------------------------------------------------------------
  {
    thumb: require("./../../images/gallery/Sika/1.jpg"),
    image: require("./../../images/gallery/Sika/1.jpg"),
    filter: "cat-14",
  },
  {
    thumb: require("./../../images/gallery/Sika/2.jpg"),
    image: require("./../../images/gallery/Sika/2.jpg"),
    filter: "cat-14",
  },
  {
    thumb: require("./../../images/gallery/Sika/3.jpg"),
    image: require("./../../images/gallery/Sika/3.jpg"),
    filter: "cat-14",
  },

  // Misc //-----------------------------------------------------------------------------------
  {
    thumb: require("./../../images/gallery/Misc/1.jpg"),
    image: require("./../../images/gallery/Misc/1.jpg"),
    filter: "cat-18",
  },
  {
    thumb: require("./../../images/gallery/Misc/2.jpg"),
    image: require("./../../images/gallery/Misc/2.jpg"),
    filter: "cat-18",
  },
  {
    thumb: require("./../../images/gallery/Misc/3.jpg"),
    image: require("./../../images/gallery/Misc/3.jpg"),
    filter: "cat-18",
  },
  {
    thumb: require("./../../images/gallery/Misc/4.jpg"),
    image: require("./../../images/gallery/Misc/4.jpg"),
    filter: "cat-18",
  },
  {
    thumb: require("./../../images/gallery/Misc/5.jpg"),
    image: require("./../../images/gallery/Misc/5.jpg"),
    filter: "cat-18",
  },
  {
    thumb: require("./../../images/gallery/Misc/6.jpg"),
    image: require("./../../images/gallery/Misc/6.jpg"),
    filter: "cat-18",
  },
  {
    thumb: require("./../../images/gallery/Misc/7.jpg"),
    image: require("./../../images/gallery/Misc/7.jpg"),
    filter: "cat-18",
  },
  {
    thumb: require("./../../images/gallery/Misc/8.jpg"),
    image: require("./../../images/gallery/Misc/8.jpg"),
    filter: "cat-18",
  },
  {
    thumb: require("./../../images/gallery/Misc/9.jpg"),
    image: require("./../../images/gallery/Misc/9.jpg"),
    filter: "cat-18",
  },
  {
    thumb: require("./../../images/gallery/Misc/10.jpg"),
    image: require("./../../images/gallery/Misc/10.jpg"),
    filter: "cat-18",
  },
  {
    thumb: require("./../../images/gallery/Misc/11.jpg"),
    image: require("./../../images/gallery/Misc/11.jpg"),
    filter: "cat-18",
  },
  {
    thumb: require("./../../images/gallery/Misc/12.jpg"),
    image: require("./../../images/gallery/Misc/12.jpg"),
    filter: "cat-18",
  },
  {
    thumb: require("./../../images/gallery/Misc/13.jpg"),
    image: require("./../../images/gallery/Misc/13.jpg"),
    filter: "cat-18",
  },
  {
    thumb: require("./../../images/gallery/Misc/14.jpg"),
    image: require("./../../images/gallery/Misc/14.jpg"),
    filter: "cat-18",
  },
  {
    thumb: require("./../../images/gallery/Misc/15.jpg"),
    image: require("./../../images/gallery/Misc/15.jpg"),
    filter: "cat-18",
  },
  {
    thumb: require("./../../images/gallery/Misc/16.jpg"),
    image: require("./../../images/gallery/Misc/16.jpg"),
    filter: "cat-18",
  },
  {
    thumb: require("./../../images/gallery/Misc/17.jpg"),
    image: require("./../../images/gallery/Misc/17.jpg"),
    filter: "cat-18",
  },
  {
    thumb: require("./../../images/gallery/Misc/18.jpg"),
    image: require("./../../images/gallery/Misc/18.jpg"),
    filter: "cat-18",
  },
  {
    thumb: require("./../../images/gallery/Misc/19.jpg"),
    image: require("./../../images/gallery/Misc/19.jpg"),
    filter: "cat-18",
  },
  {
    thumb: require("./../../images/gallery/Misc/20.jpg"),
    image: require("./../../images/gallery/Misc/20.jpg"),
    filter: "cat-18",
  },
  {
    thumb: require("./../../images/gallery/Misc/21.jpg"),
    image: require("./../../images/gallery/Misc/21.jpg"),
    filter: "cat-18",
  },
  {
    thumb: require("./../../images/gallery/Misc/22.jpg"),
    image: require("./../../images/gallery/Misc/22.jpg"),
    filter: "cat-18",
  },
  {
    thumb: require("./../../images/gallery/Misc/23.jpg"),
    image: require("./../../images/gallery/Misc/23.jpg"),
    filter: "cat-18",
  },
  {
    thumb: require("./../../images/gallery/Misc/24.jpg"),
    image: require("./../../images/gallery/Misc/24.jpg"),
    filter: "cat-18",
  },
  {
    thumb: require("./../../images/gallery/Misc/25.jpg"),
    image: require("./../../images/gallery/Misc/25.jpg"),
    filter: "cat-18",
  },
  {
    thumb: require("./../../images/gallery/Misc/26.jpg"),
    image: require("./../../images/gallery/Misc/26.jpg"),
    filter: "cat-18",
  },
  {
    thumb: require("./../../images/gallery/Misc/27.jpg"),
    image: require("./../../images/gallery/Misc/27.jpg"),
    filter: "cat-18",
  },
  {
    thumb: require("./../../images/gallery/Misc/28.jpg"),
    image: require("./../../images/gallery/Misc/28.jpg"),
    filter: "cat-18",
  },
  {
    thumb: require("./../../images/gallery/Misc/29.jpg"),
    image: require("./../../images/gallery/Misc/29.jpg"),
    filter: "cat-18",
  },
  {
    thumb: require("./../../images/gallery/Misc/30.jpg"),
    image: require("./../../images/gallery/Misc/30.jpg"),
    filter: "cat-18",
  },
  {
    thumb: require("./../../images/gallery/Misc/31.jpg"),
    image: require("./../../images/gallery/Misc/31.jpg"),
    filter: "cat-18",
  },
  {
    thumb: require("./../../images/gallery/Misc/32.jpg"),
    image: require("./../../images/gallery/Misc/32.jpg"),
    filter: "cat-18",
  },
  {
    thumb: require("./../../images/gallery/Misc/33.jpg"),
    image: require("./../../images/gallery/Misc/33.jpg"),
    filter: "cat-18",
  },
  {
    thumb: require("./../../images/gallery/Misc/34.jpg"),
    image: require("./../../images/gallery/Misc/34.jpg"),
    filter: "cat-18",
  },
  {
    thumb: require("./../../images/gallery/Misc/35.jpg"),
    image: require("./../../images/gallery/Misc/35.jpg"),
    filter: "cat-18",
  },
  {
    thumb: require("./../../images/gallery/Misc/36.jpg"),
    image: require("./../../images/gallery/Misc/36.jpg"),
    filter: "cat-18",
  },
  {
    thumb: require("./../../images/gallery/Misc/37.jpg"),
    image: require("./../../images/gallery/Misc/37.jpg"),
    filter: "cat-18",
  },
  {
    thumb: require("./../../images/gallery/Misc/38.jpg"),
    image: require("./../../images/gallery/Misc/38.jpg"),
    filter: "cat-18",
  },
  {
    thumb: require("./../../images/gallery/Misc/39.jpg"),
    image: require("./../../images/gallery/Misc/39.jpg"),
    filter: "cat-18",
  },
  {
    thumb: require("./../../images/gallery/Misc/40.jpg"),
    image: require("./../../images/gallery/Misc/40.jpg"),
    filter: "cat-18",
  },
  {
    thumb: require("./../../images/gallery/Misc/41.jpg"),
    image: require("./../../images/gallery/Misc/41.jpg"),
    filter: "cat-18",
  },
  {
    thumb: require("./../../images/gallery/Misc/42.jpg"),
    image: require("./../../images/gallery/Misc/42.jpg"),
    filter: "cat-18",
  },
  {
    thumb: require("./../../images/gallery/Misc/43.jpg"),
    image: require("./../../images/gallery/Misc/43.jpg"),
    filter: "cat-18",
  },
  {
    thumb: require("./../../images/gallery/Misc/44.jpg"),
    image: require("./../../images/gallery/Misc/44.jpg"),
    filter: "cat-18",
  },
  {
    thumb: require("./../../images/gallery/Misc/45.jpg"),
    image: require("./../../images/gallery/Misc/45.jpg"),
    filter: "cat-18",
  },
  {
    thumb: require("./../../images/gallery/Misc/46.jpg"),
    image: require("./../../images/gallery/Misc/46.jpg"),
    filter: "cat-18",
  },
  {
    thumb: require("./../../images/gallery/Misc/47.jpg"),
    image: require("./../../images/gallery/Misc/47.jpg"),
    filter: "cat-18",
  },
  {
    thumb: require("./../../images/gallery/Misc/48.jpg"),
    image: require("./../../images/gallery/Misc/48.jpg"),
    filter: "cat-18",
  },
  {
    thumb: require("./../../images/gallery/Misc/49.jpg"),
    image: require("./../../images/gallery/Misc/49.jpg"),
    filter: "cat-18",
  },
  {
    thumb: require("./../../images/gallery/Misc/50.jpg"),
    image: require("./../../images/gallery/Misc/50.jpg"),
    filter: "cat-18",
  },
  {
    thumb: require("./../../images/gallery/Misc/51.jpg"),
    image: require("./../../images/gallery/Misc/51.jpg"),
    filter: "cat-18",
  },
  {
    thumb: require("./../../images/gallery/Misc/52.jpg"),
    image: require("./../../images/gallery/Misc/52.jpg"),
    filter: "cat-18",
  },
  {
    thumb: require("./../../images/gallery/Misc/53.jpg"),
    image: require("./../../images/gallery/Misc/53.jpg"),
    filter: "cat-18",
  },
  {
    thumb: require("./../../images/gallery/Misc/54.jpg"),
    image: require("./../../images/gallery/Misc/54.jpg"),
    filter: "cat-18",
  },
  {
    thumb: require("./../../images/gallery/Misc/55.jpg"),
    image: require("./../../images/gallery/Misc/55.jpg"),
    filter: "cat-18",
  },
  {
    thumb: require("./../../images/gallery/Misc/56.jpg"),
    image: require("./../../images/gallery/Misc/56.jpg"),
    filter: "cat-18",
  },
  {
    thumb: require("./../../images/gallery/Misc/57.jpg"),
    image: require("./../../images/gallery/Misc/57.jpg"),
    filter: "cat-18",
  },
  {
    thumb: require("./../../images/gallery/Misc/58.jpg"),
    image: require("./../../images/gallery/Misc/58.jpg"),
    filter: "cat-18",
  },
  {
    thumb: require("./../../images/gallery/Misc/59.jpg"),
    image: require("./../../images/gallery/Misc/59.jpg"),
    filter: "cat-18",
  },
  {
    thumb: require("./../../images/gallery/Misc/60.jpg"),
    image: require("./../../images/gallery/Misc/60.jpg"),
    filter: "cat-18",
  },
];

const SkeletonImage = ({ src, alt, ...props }) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <div style={{ position: "relative", width: "100%", minHeight: "200px" }}>
      {!loaded && (
        <div
          className="skeleton-img"
          style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }}
        />
      )}
      <img
        src={src}
        alt={alt}
        style={{
          width: "100%",
          display: loaded ? "block" : "none",
          objectFit: "cover",
        }}
        onLoad={() => setLoaded(true)}
        {...props}
      />
    </div>
  );
};

const NewPage = () => {
  const [activeFilter, setActiveFilter] = useState("cat-1");
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [animationParent] = useAutoAnimate();

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };
  useEffect(() => {
    console.log("Filter changed:", activeFilter);
    setFilteredProjects(
      projects.filter((project) => project.filter === activeFilter)
    );
    // console.log(filteredProjects)
    // Apply filter logic here
  }, [activeFilter]);

  // const filteredProjects =
  //   activeFilter === '*'
  //     ? projects
  //     : projects.filter((project) => project.filter === activeFilter)
  console.log(filteredProjects);
  return (
    <>
      <Header />
      <div className="page-content min-h-screen">
        <Banner
          title="Where Steel Meets Soul – A Gallery of Grit & Glory"
          pagename="Gallery"
          bgimage={bnrimg}
        />

        <div className="section-full p-tb80 inner-page-padding">
          <div className="container">
            <div className="row">
              <div className="col-md-3 col-sm-4">
                <div className="hover-navigation bg-white m-b10">
                  <ul className=" text-uppercase" style={{ width: "100%" }}>
                    {/* <li>
                      <NavLink
                        to={'#'}
                        data-filter='*'
                        data-hover='All'
                        onClick={(e) => {
                          e.preventDefault()
                          handleFilterChange('*')
                        }}
                      >
                        All
                      </NavLink>
                    </li> */}
                    {filters.map((item, index) => (
                      <li key={index}>
                        <NavLink
                          style={{
                            color:
                              activeFilter === item.filter
                                ? "#ff5e14"
                                : "black",
                          }}
                          // className={${activeFilter===item.filter?}}
                          to={"#"}
                          data-filter={item.filter}
                          data-hover={item.label}
                          onClick={(e) => {
                            e.preventDefault();
                            handleFilterChange(item.filter);
                          }}
                        >
                          {item.label}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="col-md-9 col-sm-8">
                <div
                  ref={animationParent}
                  className="gallery-grid-container mfp-gallery"
                >
                  {filteredProjects.map((item, index) => (
                    <div
                      key={index}
                      className={`${item.filter} masonry-item gallery-grid-item col-lg-4 col-md-4 col-sm-6 m-b10`}
                      style={{ paddingLeft: "5px", paddingRight: "5px" }}
                    >
                      <div className="image-effect-one hover-shadow">
                        <SkeletonImage src={item.thumb} alt="" />
                        <a className="mfp-link" href={item.image}>
                          <i className="fa fa-arrows-alt" />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NewPage;
