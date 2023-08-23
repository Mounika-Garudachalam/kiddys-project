import React from "react";

//font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {faHouse} from "@fortawesome/free-solid-svg-icons";
import { faIndianRupeeSign } from "@fortawesome/free-solid-svg-icons";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";
import { faHouseLaptop } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faNewspaper } from "@fortawesome/free-regular-svg-icons";
import { faClipboard } from "@fortawesome/free-regular-svg-icons";

export const SidebarData=[
    {   title:'Home',
        icon: <FontAwesomeIcon icon={faHouse} />,
        link: '/Home'
    },
    {
        title:"Feed & Activity",
        icon:  <FontAwesomeIcon icon={faNewspaper}/>,
        link: "/feed"
    },
    {
        title:"Home Works",
        icon:  <FontAwesomeIcon icon={faHouseLaptop} />,
        link: "/homeworks"
    },
    {
        title:"Student Information",
        icon: <FontAwesomeIcon icon={faUser} />,
        link: "/studentinformation"
    },
    {
        title:"Attendance",
        icon: <FontAwesomeIcon icon={faCalendarDays} />,
        link: "/attendance"
    },
    {
        title:"Exams & Results",
        icon:  <FontAwesomeIcon icon={faClipboard}/>,
        link: "/exams"
    },
    {
        title:"Fee Structure",
        icon: <FontAwesomeIcon icon={faIndianRupeeSign} />,
        link: "/fee"
    },
    {
        title:"About Us",
        icon: <FontAwesomeIcon icon={faCircleInfo}/>,
        link: "/about"
    }
];

