import React from 'react';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';

const ExperienceCard = ({ experience }) => {
  const imageUrl = experience.attributes?.image?.data?.attributes?.url;
  const companyName = experience.attributes?.company_name;
  const title = experience.attributes?.title;
  const description = experience.attributes?.description;

  const startDate = experience.attributes?.startDate;
  const endDate = experience.attributes?.endDate || experience.attributes?.Present;
  const points = description.split('\n').map(point => point.replace('-', '').trim());

  return (
    <VerticalTimelineElement
      contentStyle={{ background: "#1d1836", color: "#fff" }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={`${startDate} - ${endDate}`}
      iconStyle={{ background: '#383E56' }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={imageUrl}
            alt={companyName}
            className='w-[60%] h-[60%] object-contain'
          />
        </div>
      }
    >
      {/* ... rest of the code ... */}
    </VerticalTimelineElement>
  );
};

export default ExperienceCard;
