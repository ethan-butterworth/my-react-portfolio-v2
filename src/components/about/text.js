import React from 'react';

const text = () => {
  const sections = [
    {
      title: "2008 to 2017",
      content: "My journey into technology began with the Halo series on the Xbox. This initial spark ignited a passion for technology, leading me to build my own PC and indulge in my love for video games. Building upon this fascination, I pursued formal education in IT throughout high school and college, laying a solid foundation for my future career endeavors."
    },
    {
      title: "2018 to 2020",
      content: "Seeking to translate my academic knowledge into practical skills, I embarked on an apprenticeship at BNY Mellon. While the experience provided invaluable exposure to IT support, the call center environment and its emphasis on call statistics proved limiting. Fueled by a desire for greater technical challenges and growth opportunities, I made the decision to move on from BNY Mellon."
    },
    {
      title: "2021 to 2022",
      content: "At Crane Payment Innovations, I found an environment that fostered technical exploration and innovation. I was able to delve into complex technical issues and collaborate directly with various tech teams. However, despite the professional growth, concerns regarding work-life balance and career progression prompted me to seek a new opportunity."
    },
    {
      title: "2023 to Present",
      content: "Joining the team at Zuto marked a significant turning point in my professional journey. Embracing the role, my responsibilities expanded to include asset management and involvement in substantial projects such as office re-cabling. At Zuto, I found a supportive environment that values employee development, providing opportunities for growth and learning."
    },
    {
      title: "Future",
      content: "Looking towards the future, my sights are set on transitioning into a front-end developer role. Through dedicated study time and ongoing learning initiatives, I am actively honing my skills in web development. My goal is to leverage my diverse experience and technical expertise to contribute to innovative projects in the field of front-end development, driving impactful solutions and pushing the boundaries of digital experiences."
    }
  ];

  const renderSections = () => {
    return sections.map((section, index) => (
      <div key={index} className='mb-10 last:mb-0'>
        <h2 className='text-2xl font-black mb-5'>{section.title}</h2>
        <p className='ml-5'>{section.content}</p>
      </div>
    ));
  };

  return (
    <div>
      {renderSections()}
    </div>
  );
};

export default text;
