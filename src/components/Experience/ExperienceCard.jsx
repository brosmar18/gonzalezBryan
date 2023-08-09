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
            <div>
                <h3 className='text-white text-[24px] font-bold'>{title}</h3>
                <p className='text-secondary text-[16px] font-semibold' style={{ margin: 0 }}>{companyName}</p>
            </div>

            <ul className='mt-5 list-disc ml-5 space-y-2'>
                {points.map((point, index) => (
                    <li key={`job-point-${index}`} className='text-white-100 text-[14px] pl-1 tracking-wider'>
                        {point}
                    </li>
                ))}
            </ul>
        </VerticalTimelineElement>
    );
};

export default ExperienceCard;
