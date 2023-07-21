import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { certificates } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const CertificateCard = ({ certificate }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#0C090A",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #ffff" }}
      date={certificate.date}
      iconStyle={{ background: certificate.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={certificate.icon}
            alt={certificate.name}
            className='w-[60%] h-[60%] object-contain'
          />
        </div>
      }
    >

      {/* Left and right Card */}

      <div>
          <img src ={certificate.img} className=""/>
      </div>
    </VerticalTimelineElement>
  );
};

const Certificate = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Certificates
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {certificates.map((certificate, index) =>( 
            <CertificateCard
              key={`certificate-${index}`}
              certificate={certificate}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Certificate, "certificate");