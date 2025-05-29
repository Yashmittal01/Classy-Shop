import React from "react";
import { LiaShippingFastSolid } from "react-icons/lia";
import { PiKeyReturn } from "react-icons/pi";
import { BsWallet2 } from "react-icons/bs";
import { LiaGiftSolid } from "react-icons/lia";
import { BiSupport } from "react-icons/bi";
import { Link } from "react-router-dom";
import { IoChatboxOutline } from "react-icons/io5";
import { Button } from "@mui/material";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { FaFacebookF } from "react-icons/fa"; 
import { AiOutlineYoutube } from "react-icons/ai";
import { FaPinterestP } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

// images
import img1 from '../../assets/carte_bleue.png/'
import img2 from '../../assets/visa.png/'
import img3 from '../../assets/master_card.png/'
import img4 from '../../assets/american_express.png/'
import img5 from '../../assets/paypal.png/'

function Footer() {
  return (
    <>
    <footer className="py-6 bg-[#FAFAFA]">
      <div className="container">
        <div className="flex items-center justify-center gap-5 py-8 pb-8">
          <div className="col flex items-center justify-center flex-col group w-[15%]">
            <LiaShippingFastSolid className="text-[40px] transition-all duration-300 group-hover:text-[#ff5252] group-hover:-translate-y-1" />
            <h3 className="text-[16px] font-[600] mt-3">Free Shipping</h3>
            <p className="text-[12px] font-[500]">
              For all Orders Over Rs.1000
            </p>
          </div>

          <div className="col flex items-center justify-center flex-col group w-[15%]">
            <PiKeyReturn className="text-[40px] transition-all duration-300 group-hover:text-[#ff5252] group-hover:-translate-y-1" />
            <h3 className="text-[16px] font-[600] mt-3">30 Days Returns</h3>
            <p className="text-[12px] font-[500]">For an Exchange Product</p>
          </div>

          <div className="col flex items-center justify-center flex-col group w-[15%]">
            <BsWallet2 className="text-[40px] transition-all duration-300 group-hover:text-[#ff5252] group-hover:-translate-y-1" />
            <h3 className="text-[16px] font-[600] mt-3">Secured Payment</h3>
            <p className="text-[12px] font-[500]">Payment Cards Accepted</p>
          </div>

          <div className="col flex items-center justify-center flex-col group w-[15%]">
            <LiaGiftSolid className="text-[40px] transition-all duration-300 group-hover:text-[#ff5252] group-hover:-translate-y-1" />
            <h3 className="text-[16px] font-[600] mt-3">Special Gifts</h3>
            <p className="text-[12px] font-[500]">Our First Product Order</p>
          </div>

          <div className="col flex items-center justify-center flex-col group w-[15%]">
            <BiSupport className="text-[40px] transition-all duration-300 group-hover:text-[#ff5252] group-hover:-translate-y-1" />
            <h3 className="text-[16px] font-[600] mt-3">Support 24/7</h3>
            <p className="text-[12px] font-[500]">Contact us Anytime</p>
          </div>
        </div>

        {/* <hr /> */}

        <div className="footer border-t-1 border-[rgba(0,0,0,0.1)] flex py-8">
          <div className="part1 w-[23%] border-r border-[rgba(0,0,0,0.1)] pr-16">
            <h2 className="font-[600] mb-4" style={{fontSize: "18px"}}>Contact us</h2>
            <p className="font-[400] pb-4" style={{fontSize:"13px"}}>
              Classyshop - Mega Super Store 507-Union Trade Centre France
            </p>
            <Link to="mailto:someone@example.com" className="link text-[14px]">
              sales@yourcompany.com
            </Link>
            <span className="text-[25px] font-[500] block w-full mt-3 text-[#ff5252]">
              +977-9815811311
            </span>

            <div className="flex items-center gap-2">
              <IoChatboxOutline className="text-[40px] text-[#ff5252]" />
              <span className="text-[16px] font-[600]">Online Chat <br />
                Get Expert Help
              </span>
            </div>
          </div>

          <div className="part-2 pl-8 w-[40%] flex">
            <div className="part2_col1 w-[50%]">
              <h2 className="text-[18px] font-[600] mb-4">Products</h2>

              <ul className="list">
                <li className="list-none text-[14px]w-full mb-2"><Link to='/' className="link">Prices drop</Link></li>

                <li className="list-none text-[14px]w-full mb-2"><Link to='/' className="link">New Products</Link></li>

                <li className="list-none text-[14px]w-full mb-2"><Link to='/' className="link">Best Sales</Link></li>

                <li className="list-none text-[14px]w-full mb-2"><Link to='/' className="link">Contact us</Link></li>

                <li className="list-none text-[14px]w-full mb-2"><Link to='/' className="link">Sidemap</Link></li>

                <li className="list-none text-[14px]w-full mb-2"><Link to='/' className="link">Stores</Link></li>
              </ul>
            </div>

            <div className="part2_col2 w-[50%]">
              <h2 className="text-[18px] font-[600] mb-4">Our company</h2>

              <ul className="list">
                <li className="list-none text-[14px]w-full mb-2"><Link to='/' className="link">Delivery
                </Link></li>

                <li className="list-none text-[14p]w-full mb-2"><Link to='/' className="link">Legal Notice</Link></li>

                <li className="list-none text-[14px]w-full mb-2"><Link to='/' className="link">Terms and conditions of use
                </Link></li>

                <li className="list-none text-[14px]w-full mb-2"><Link to='/' className="link">About us
                </Link></li>

                <li className="list-none text-[14px]w-full mb-2"><Link to='/' className="link">Secure payment
                </Link></li>

                <li className="list-none text-[14px]w-full mb-2"><Link to='/' className="link">Login
                </Link></li>
              </ul>
            </div>
          </div>

          <div className="part-3 pl-8 pr-8 w-[35%] flex flex-col">
          <h2 className="font-[600] mb-4" style={{fontSize: "18px"}}>Subscribe to newsletter</h2>
          <p className="font-[400] pb-4" style={{fontSize:"13px"}}>
          Subscribe to our latest newsletter to get news about special discounts.
            </p>

            <form action="" className="mt-5">
              <input type="text" className="w-full h-[45px] border pl-4 pr-4 rounded-sm outline-none mb-4 focus:!border-[rgba(0,0,0,0.3)]" placeholder="Your Email Address" />
              <Button className="!bg-[#ff5252] !text-[#fff] !px-5 !py-2">Subscribe</Button>

              <FormControlLabel control={<Checkbox />} label="I  agree to the terms and conditions and the privacy policy" />
            </form>
          </div>
        </div>
      </div>
    </footer>

    <div className="bottomstrip border-t border-[rgba(0,0,0,0.2)] py-3 bg-white">
      <div className="container flex items-center justify-between">
        <ul className="flex items-center gap-2">
          <li className="list-none"><Link to='/' target="_blank" className="w-[35px] h-[35px] rounded-full border border-[rgba(0,0,0,0.1)] flex items-center justify-center group hover:bg-[#ff5252] transition-all">
          <FaFacebookF className="text-[15px] group-hover:text-white" /> </Link></li>

          <li className="list-none"><Link to='/' target="_blank" className="w-[35px] h-[35px] rounded-full border border-[rgba(0,0,0,0.1)] flex items-center justify-center group hover:bg-[#ff5252] transition-all">
          <AiOutlineYoutube className="text-[20px] group-hover:text-white" /> </Link></li>

          <li className="list-none"><Link to='/' target="_blank" className="w-[35px] h-[35px] rounded-full border border-[rgba(0,0,0,0.1)] flex items-center justify-center group hover:bg-[#ff5252] transition-all">
          <FaPinterestP className="text-[15px] group-hover:text-white" /> </Link></li>

          <li className="list-none"><Link to='/' target="_blank" className="w-[35px] h-[35px] rounded-full border border-[rgba(0,0,0,0.1)] flex items-center justify-center group hover:bg-[#ff5252] transition-all">
          <FaInstagram className="text-[15px] group-hover:text-white" /> </Link></li>
        </ul>

        <p className="text-[13px] text-cente mb-0">© 2025 - Ecommerce Website</p>

        <div className="flex items-center gap-2">
          <img src={img1} alt="" />
          <img src={img2} alt="" />
          <img src={img3} alt="" />
          <img src={img4} alt="" />
          <img src={img5} alt="" />
        </div>
      </div>
    </div>
   </>
  );
}

export default Footer;
