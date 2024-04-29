const socialMediaIcons = ['instagram', 'facebook', 'twitter', 'linkedin'];
const designers = [
  {
    name: 'Sane',
    description: `Meticulous attention to detail is the hallmark of Sane's work.
    Their dedication to precision craftsmanship ensures that every
    piece is not just furniture, but a true work of art.`,
    role: 'Interior Designer',
    profileUrl: 'profile-1',
  },
  {
    name: 'Kevin',
    description: `With a passion for avant-garde design, Kevin constantly pushes
    the boundaries of creativity. Their visionary approach results
    in statement pieces that redefine modern living, adding a touch
    of innovation to every room.`,
    role: 'Interior Designer',
    profileUrl: 'profile-2',
  },
  {
    name: 'Heera',
    description: `Elegance and functionality converge seamlessly in the designs of
    Heera. Their refined aesthetic sensibility transforms living
    spaces into showcases of style and sophistication.`,
    role: 'Interior Designer',
    profileUrl: 'profile-3',
  },
];
const About = () => {
  return (
    <div className="flex flex-col gap-10 my-4">
      <div className="mt-4 flex flex-col gap-4 md:flex-row">
        <div className="md:w-1/2">
          <img src="/assets/imgs/bed.png" alt="bed" />
        </div>
        <div className="md:w-1/2 flex text-orange-100 justify-center">
          <p className="text-xl font-bold text-center flex items-center uppercase tracking-widest">
            <p className="">Prioritize your comfort</p>
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center text-balance text-center text-[16px] md:text-xs">
        <p>
          We love to deliver furniture that fits your taste, comfortable. We aim
          to “do it right the first time,” with a focus on developing a culture
          of continual improvement. This culture is fostered by maintaining a
          positive and productive work environment that promotes employee
          engagement and satisfaction. The performance of our quality system is
          continually reviewed through monitoring and measurement of company
          performance indicators and regular management reviews.
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-xl font-bold text-center">OUR TEAM</p>
        <p className="text-[12px] text-center text-balance">
          Meet our visionary furniture designers, the creative minds behind our
          stunning collections. With an unwavering passion for innovation and a
          keen eye for detail, they transform imagination into tangible
          elegance. Their dedication to craftsmanship and design excellence
          ensures each piece embodies timeless beauty and functionality.
          Discover the artisans who bring inspiration to life, shaping the way
          you experience comfort and style in your home.
        </p>
        <div className="flex flex-col md:flex-row gap-6 justify-center mt-4 mx-12">
          {designers.map((designer) => (
            <div className="flex flex-col gap-2 bg-gray-100 text-center p-10 rounded-full">
              <img
                src={`/assets/imgs/${designer.profileUrl}.png`}
                alt="profile"
                className="h-32 w-32 rounded-full"
              />
              <div>
                <h3 className="text-md font-semibold">{designer.name}</h3>
                <p>{designer.role}</p>
                <p className="text-[12px] text-balance text-center">
                  {designer.description}
                </p>
                <div className="flex">
                  {socialMediaIcons.map((x) => (
                    <div className="hover:bg-gray-100 rounded-full h-4 w-4 m-1 lg:m-2 flex justify-center items-center">
                      <img
                        key={x}
                        src={`/assets/icons/${x}.png`}
                        alt={x}
                        className="h-2 w-2"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
