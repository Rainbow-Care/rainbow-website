import Quote from '@/components/Quote';

const TITLE = 'Our Team at Rainbow';
const teamBgColors = ['#ED6C30', '#D7598B', '#40C0E7', '#F3FFA4', '#FFD96C'];
const TEAM_MEMBERS = [
  {
    memberName: 'Anuradha Karkare',
    imgSrc: '/images/teamMembers/AnuradhaKarkare.png',
    designation: 'Founder, Rainbow Day Care Centre',
    description:
      'A seasoned Social Worker and Psychotherapist with 20+ years of experience in de-addiction, family, marriage, and individual counseling. She has been a key figure in various social organizations, contributing to their growth and quality programs. A writer, poet, and certified REBT expert, she blends her knowledge of literature, music, and therapy to facilitate transformative sessions and empower individuals.',
  },
  {
    memberName: 'Vaishali Joshi',
    imgSrc: '/images/teamMembers/VaishaliJoshi.png',
    designation: 'Psychotherapist',
    description:
      'A skilled Consulting Psychotherapist with 15+ years of experience in de-addiction, family, marriage, and individual counseling. Known for her innovative cognitive exercises and engaging word games, she designs stimulating activities to boost mental acuity. Her energetic approach and expertise in REBT make her a valuable contributor to various non-profit organizations and therapeutic sessions',
  },
  {
    memberName: 'Neha Khaladkar',
    imgSrc: '/images/teamMembers/NehaKhaladkar.png',
    designation: 'Family & Child Development',
    description:
      'A Sociology and Social Work graduate specializing in Family and Child Development, Neha is passionate about engaging with senior citizens. She combines her interests in music and literature to facilitate enriching activities at Rainbow Day Care Centre, where she has dedicated six years of service.',
  },
  {
    memberName: 'Vartika Gupta',
    imgSrc: '/images/teamMembers/VartikaGupta.png',
    designation: 'Psychologist',
    description:
      'Vartika is a Consulting Psychologist and Arts-Based Therapy Practitioner with 12+ years of experience in de-addiction and working with vulnerable populations. She founded Machhli, a social enterprise providing arts-based therapy and non-therapeutic sessions. Vartika also designs and executes social campaigns and programs on diverse issues, utilizing various art forms for effective engagement.',
  },
  {
    memberName: 'Yogini Mandke',
    imgSrc: '/images/teamMembers/YoginiMandke.png',
    designation: 'Administrator',
    description:
      'A seasoned Accountant with 20+ years of experience, she ensures smooth financial operations at Rainbow Day Care Centre. Beyond her accounting role, she actively contributes to the team as a facilitator in music therapy and other sessions. Her dedication to social work and passion for learning make her a valuable asset to the centre.',
  },
  {
    memberName: 'Nivedita Deo',
    imgSrc: '/images/teamMembers/NiveditaDeo.png',
    designation: 'Support Staff',
    description:
      'Nivedita has completed her B.A. in Sanskrit and is a skilled beautician with 20 years of experience. Currently, she is studying Bach flower remedies and biochemic salts as supportive medicine therapies. She recently joined us at Rainbow, and works closely with Neha, assisting in exercise sessions by demonstrating the movements. In addition, she leads book reading activities, reading aloud to seniors. Always ready to help, she is fully active, with excellent observation skills that make her an invaluable part of the team.',
  },
  {
    memberName: 'Jayashree Bhure',
    imgSrc: '/images/teamMembers/JayashreeBhure.png',
    designation: 'Support Staff',
    description: `Jayshree completed her B.Sc. and worked for 3-4 years as a social worker on projects related to child development and women's health at the residential level. She joined Rainbow Day Care Centre a year ago and enjoys leading memory games, fun activities, and puzzle-solving sessions with the seniors, who respond enthusiastically to her initiatives. She also conducts book reading sessions on occasion.`,
  },
];

const Team = ({ className }) => {
  return (
    <section className={className}>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-5'>
          <h2 className='mx-auto md:mx-0'>{TITLE}</h2>
          <div className='flex flex-col gap-16 md:gap-4 md:w-11/12'>
            {TEAM_MEMBERS.map(
              ({ memberName, imgSrc, designation, description }, index) => {
                const imgBgColor = teamBgColors[index % teamBgColors.length];
                return (
                  <div
                    key={memberName}
                    className='flex flex-col md:flex-row gap-y-8'
                  >
                    <div className='flex flex-col gap-4 place-items-center'>
                      <div className='relative overflow-hidden w-[160px] md:w-[260px] px-1'>
                        <img
                          src={imgSrc}
                          alt={memberName}
                          className='z-[10] relative'
                          style={{ minWidth: '150px' }}
                        />
                        <div
                          className='absolute z-[5] bottom-0 left-0 w-full h-[9rem] md:h-[15rem] bg-blue-500 rounded-t-full'
                          style={{ backgroundColor: `${imgBgColor}` }}
                        ></div>
                      </div>
                      <div className='w-full text-center md:text-left'>
                        <div className='w-full text-center md:text-left font-bold'>
                          {memberName}
                        </div>
                        {designation}
                      </div>
                    </div>
                    <div className='self-center mx-auto md:pl-[75px] text-center md:text-left'>
                      <Quote color={imgBgColor}>{description}</Quote>
                    </div>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
