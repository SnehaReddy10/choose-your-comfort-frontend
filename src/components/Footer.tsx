const categories = ['Living Room', 'Bed Room', 'Kitchen', 'Bath Room'];
const popularProducts = [
  'Single Sofa Black',
  'Wooden Bookcase',
  'Wooden Chair',
  'Luxury White Bed',
];
const sitemaps = ['Product', 'Services', 'Article', 'About Us'];
const followUs = ['Facebook', 'Instagram', 'TikTok', 'Youtube'];

const Footer = () => {
  return (
    <div className="mt-6">
      <div className="flex gap-2 md:gap-20 justify-evenly">
        <div className="w-1/3">
          <h3 className="text-xl md:text-3xl font-[900] tracking-tighter">
            LOGO
          </h3>
          <p className="text-[10px] lg:text-xs text-balance">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
        <div className="flex gap-2 lg:gap-10 lg:w-2/3">
          <div>
            <p className="text-[12px] font-bold">Popular Product</p>
            {categories.map((x) => (
              <p key={x} className="text-[12px] my-1">
                {x}
              </p>
            ))}
          </div>
          <div>
            <p className="text-[12px] font-bold">Sitemap</p>
            {popularProducts.map((x) => (
              <p key={x} className="text-[12px]  my-1">
                {x}
              </p>
            ))}
          </div>
          <div>
            <p className="text-[12px] font-bold">Follow Us</p>
            {sitemaps.map((x) => (
              <p key={x} className="text-[12px]  my-1">
                {x}
              </p>
            ))}
          </div>
          <div>
            <p className="text-[12px] font-bold">Category</p>
            {followUs.map((x) => (
              <p key={x} className="text-[12px]  my-1">
                {x}
              </p>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full border border-b-[1px] mt-4 border-gray-200"></div>
      <p className="text-[8px] mt-2">
        © 2023 by Logo Furniture. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
