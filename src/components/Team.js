const TITLE = 'Our Team at Rainbow';
const TeamMembers = [
  {
    memberName: 'Anuradha Karkare',
    imgSrc: '/images/teamMembers/AnuradhaKarkare.jpg',
    designation: 'Founder, Rainbow Day Care Centre',
    description:
      'A seasoned Social Worker and Psychotherapist with 20+ years of experience in de-addiction, family, marriage, and individual counseling. She has been a key figure in various social organizations, contributing to their growth and quality programs. A writer, poet, and certified REBT expert, she blends her knowledge of literature, music, and therapy to facilitate transformative sessions and empower individuals.',
  },
  {
    memberName: 'Vaishali Joshi',
    imgSrc: '/images/teamMembers/VaishaliJoshi.jpg',
    designation: 'Psychotherapist',
    description:
      'A skilled Consulting Psychotherapist with 15+ years of experience in de-addiction, family, marriage, and individual counseling. Known for her innovative cognitive exercises and engaging word games, she designs stimulating activities to boost mental acuity. Her energetic approach and expertise in REBT make her a valuable contributor to various non-profit organizations and therapeutic sessions',
  },
  {
    memberName: 'Neha Khaladkar',
    imgSrc: '/images/teamMembers/NehaKhaladkar.jpg',
    designation: 'Family & Child Development',
    description:
      'A Sociology and Social Work graduate specializing in Family and Child Development, Neha is passionate about engaging with senior citizens. She combines her interests in music and literature to facilitate enriching activities at Rainbow Day Care Centre, where she has dedicated six years of service.',
  },
  {
    memberName: 'Vartika Gupta',
    imgSrc: '/images/teamMembers/VartikaGupta.jpg',
    designation: 'Psychologist',
    description:
      'Vartika is a Consulting Psychologist and Arts-Based Therapy Practitioner with 12+ years of experience in de-addiction and working with vulnerable populations. She founded Machhli, a social enterprise providing arts-based therapy and non-therapeutic sessions. Vartika also designs and executes social campaigns and programs on diverse issues, utilizing various art forms for effective engagement.',
  },
  {
    memberName: 'Yogini Mandke',
    imgSrc: '/images/teamMembers/YoginiMandke.jpg',
    designation: 'Administrator',
    description:
      'A seasoned Accountant with 20+ years of experience, she ensures smooth financial operations at Rainbow Day Care Centre. Beyond her accounting role, she actively contributes to the team as a facilitator in music therapy and other sessions. Her dedication to social work and passion for learning make her a valuable asset to the centre.',
  },
];

const Team = ({ className }) => {
  return (
    <section className={className}>
      <div className='flex flex-col gap-5'>
        <h2>{TITLE}</h2>
        <div className='flex flex-col gap-5 w-11/12'>
          <div className='flex flex-row'>
            <div className='flex flex-col gap-4'>
              <img
                src={TeamMembers[0].imgSrc}
                alt='Anuradha Karkare'
                style={{ minWidth: '150px' }}
              />
              <div>
                <div class='font-bold'>{TeamMembers[0].memberName}</div>
                {TeamMembers[0].designation}
              </div>
            </div>
            <div className='self-center pl-[75px]'>
              {TeamMembers[0].description}
            </div>
          </div>

          <div className='flex flex-row'>
            <div className='flex flex-col gap-4'>
              <img
                src={TeamMembers[1].imgSrc}
                alt='Vaishali Joshi'
                style={{ minWidth: '150px' }}
              />
              <div>
                <div class='font-bold'>{TeamMembers[1].memberName}</div>
                {TeamMembers[1].designation}
              </div>
            </div>
            <div className='self-center pl-[75px]'>
              {TeamMembers[1].description}
            </div>
          </div>

          <div className='flex flex-row'>
            <div className='flex flex-col gap-4'>
              <img
                src={TeamMembers[2].imgSrc}
                alt='Vaishali Joshi'
                style={{ minWidth: '150px' }}
              />
              <div>
                <div class='font-bold'>{TeamMembers[2].memberName}</div>
                {TeamMembers[2].designation}
              </div>
            </div>
            <div className='self-center pl-[75px]'>
              {TeamMembers[2].description}
            </div>
          </div>

          <div className='flex flex-row'>
            <div className='flex flex-col gap-4'>
              <img
                src={TeamMembers[3].imgSrc}
                alt='Vartika Gupta'
                style={{ minWidth: '150px' }}
              />
              <div>
                <div class='font-bold'>{TeamMembers[3].memberName}</div>
                {TeamMembers[3].designation}
              </div>
            </div>
            <div className='self-center pl-[75px]'>
              {TeamMembers[3].description}
            </div>
          </div>

          <div className='flex flex-row'>
            <div className='flex flex-col gap-4'>
              <img
                src={TeamMembers[4].imgSrc}
                alt='Yogini Mandke'
                style={{ minWidth: '150px' }}
              />
              <div>
                <div class='font-bold'>{TeamMembers[4].memberName}</div>
                {TeamMembers[4].designation}
              </div>
            </div>
            <div className='self-center pl-[75px]'>
              {TeamMembers[4].description}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
