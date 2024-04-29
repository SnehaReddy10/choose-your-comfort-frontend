import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const socialMediaIcons = [
  {
    label: 'instagram',
    route: 'https://www.instagram.com/',
  },
  {
    label: 'facebook',
    route: 'https://www.facebook.com/',
  },
  {
    label: 'twitter',
    route: 'https://twitter.com/',
  },
  {
    label: 'linkedin',
    route: 'https://in.linkedin.com/',
  },
];

const sections = [
  {
    label: 'Home',
    route: '/',
    imgUrl: 'home',
  },
  {
    label: 'Products',
    route: '/products',
    imgUrl: 'sofa',
  },
  {
    label: 'Cart',
    route: '/cart',
    imgUrl: 'grocery-store',
  },
  {
    label: 'Wishlist',
    route: '/wish-list',
    imgUrl: 'wish-list',
  },
  {
    label: 'About',
    route: '/about',
    imgUrl: 'information-button',
  },
  {
    label: 'FAQ',
    route: '/faq',
    imgUrl: 'help',
  },
];
const Navbar = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);

  const logoutUser = () => {
    localStorage.removeItem('token');
    navigate('/signin');
  };

  return (
    <div className="flex flex-col justify-center mx-3 md:mx-4">
      <div className="topNavbar flex flex-row justify-between text-[12px] lg:text-[0.55rem]">
        <div className="flex flex-row my-2 align-middle">
          <section className="flex mx-2 items-center">
            <img
              src="/assets/icons/phone.png"
              alt="phone"
              className="h-2 w-2 mx-1"
            />
            <p className="text-nowrap">+91 8900000001</p>
          </section>
          <section className="flex items-center">
            <img
              src="/assets/icons/email.png"
              alt="email"
              className="h-1 lg:h-2 w-1 lg:w-2 mx-1"
            />
            <p>furniture30@gmail.com</p>
          </section>
        </div>
        <div className="flex items-center">
          {socialMediaIcons.map((x) => (
            <Link to={x.route}>
              <div
                key={x.label}
                className="hover:bg-gray-100 rounded-full h-4 w-4 md:m-1 my-1 lg:m-2 flex justify-center items-center"
              >
                <img
                  key={x.label}
                  src={`/assets/icons/${x.label}.png`}
                  alt={x.label}
                  className="h-2 w-2"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="w-full border-[#e3e2e2] border-b-[1px]"></div>
      <div className="mt-2 bottomNavbar flex justify-between items-center text-sm">
        <div className="font-semibold text-base">Furniture</div>
        <div className="hidden lg:flex text-[8px] lg:text-[12px] md:gap-1 lg:gap-2">
          {sections.map((x) => {
            const isActive = pathname == x.route;
            return (
              <div key={x.label} className="hover:bg-gray-100 rounded-2xl px-1">
                <Link
                  to={x.route}
                  className={`p-1 text-nowrap hover:text-gray-400 ${
                    isActive ? 'text-gray-400 font-semibold' : 'text-gray-200'
                  }`}
                  key={x.label}
                >
                  {x.label}
                </Link>
              </div>
            );
          })}
        </div>

        <div className="flex gap-3 me-2">
          {localStorage.getItem('token') == '' ? (
            <div className="flex text-[12px] text-nowrap justify-between gap-2 lg:gap-3">
              <button
                onClick={() => navigate('/signin')}
                className="underline text-orange-100 hover:text-orange-400"
              >
                Sign In
              </button>
              <button
                onClick={() => navigate('/signup')}
                className="bg-orange-100 hover:bg-orange-400 text-white px-2 lg:px-3 flex rounded-xl"
              >
                Sign Up
              </button>
            </div>
          ) : (
            <div className="flex text-[12px] text-nowrap justify-between gap-2 lg:gap-3">
              <button
                onClick={logoutUser}
                className=" text-orange-100 hover:text-orange-400"
              >
                Logout
              </button>
            </div>
          )}

          <div className="md:hidden relative border-[2px] border-gray-200">
            <img
              src="/assets/icons/menu.png"
              alt="menu"
              className="h-5 w-5"
              onClick={() => setShowDropdown((x) => !x)}
            />
            <div
              className={`fixed z-10 top-20 end-5 ${
                showDropdown ? 'flex flex-col' : 'hidden'
              } bg-gray-300 rounded-md transition-all duration-300 ease-in-out`}
            >
              {sections.map((x) => {
                const isActive = pathname == x.route;
                return (
                  <div
                    key={x.label}
                    className="hover:bg-gray-100 px-4 py-1 border-b-[1px] flex gap items-center"
                  >
                    <img
                      src={`/assets/icons/${x.imgUrl}.png`}
                      alt={x.imgUrl}
                      className="h-4 w-4"
                    />
                    <Link
                      to={x.route}
                      className={`p-1 text-nowrap hover:text-gray-400 text-[16px] font-mono ${
                        isActive
                          ? 'text-black-900 font-semibold'
                          : 'text-black-100'
                      }`}
                      key={x.label}
                      onClick={() => setShowDropdown((x) => !x)}
                    >
                      {x.label}
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
