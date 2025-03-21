import { MdOutlineMenu } from "react-icons/md";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-10 flex py-10 px-[60px] items-center justify-end">
      <MdOutlineMenu className="text-custom-white" size={32} />
    </div>
  );
};

export default Navbar;
