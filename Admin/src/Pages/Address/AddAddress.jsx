import { useContext, useEffect, useState } from "react";
import { Button } from "@mui/material";
import { FaCloudUploadAlt } from "react-icons/fa";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { postData } from "../../utils/api";
import { MyContext } from "../../App";

function AddAddress() {
  const [phone, setPhone] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState("");

  const context = useContext(MyContext);

  const [formField, setFormField] = useState({
    address_line: "",
    city: "",
    state: "",
    pincode: "",
    country: "",
    mobile: "",
    status: "",
    userId: context?.userData?._id,
  });

  useEffect(() => {
    setFormField((prevState) => ({
      ...prevState,
      userId: formField.userId,
    }));
  }, [context?.userData]);

  const handleChangeStatus = (event) => {
    setStatus(event.target.value);
    setFormField((prevState) => ({
      ...prevState,
      status: event.target.value,
    }));
  };

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setFormField(() => {
      return {
        ...formField,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsLoading(true);

    if (formField.address_line === "") {
      context.openAlertBox("error", "Please enter Address line");
      return false;
    }

    if (formField.city === "") {
      context.openAlertBox("error", "Please enter tour city name");
      return false;
    }

    if (formField.state === "") {
      context.openAlertBox("error", "Please enter your state name");
      return false;
    }

    if (formField.pincode === "") {
      context.openAlertBox("error", "Please enter your pincode");
      return false;
    }

    if (formField.country === "") {
      context.openAlertBox("error", "Please enter your country name");
      return false;
    }

    if (phone === "") {
      context.openAlertBox("error", "Please enter your 10 digit mobile number");
      return false;
    }

       console.log(formField)

    postData(`/api/address/add`, formField, {
      withCredentials: true,
    }).then((res) => {
      if (res?.error !== true) {
        setIsLoading(false);
        context.openAlertBox("success", res?.message);

        // context?.setIsOpenFullScreenPannel({
        //   open: false,
        // });
      } else {
        context.openAlertBox("error", res?.message);
        setIsLoading(false);
      }
    });
  };

  return (
    <section className="p-5 bg-gray-50">
      <form
        action=""
        className="form p-8 py-3 max-h-[75vh] overflow-y-scroll"
        onSubmit={handleSubmit}
      >
        <div className="grid grid-cols-2 mb-3 gap-4">
          <div className="col w-full">
            <h3 className="text-[14px] font-[500] mb-1 text-black">
              Address Line
            </h3>
            <input
              type="text"
              className="w-full h-[40px] border border-[rgba(0,0,0,0.2)] focus:outline-none focus:border-[rgba(0,0,0,0.4)] rounded-sm p-3 text-sm"
              name="address_line"
              onChange={onChangeInput}
              value={formField.address_line}
            />
          </div>

          <div className="col w-full">
            <h3 className="text-[14px] font-[500] mb-1 text-black">City</h3>
            <input
              type="text"
              className="w-full h-[40px] border border-[rgba(0,0,0,0.2)] focus:outline-none focus:border-[rgba(0,0,0,0.4)] rounded-sm p-3 text-sm"
              name="city"
              onChange={onChangeInput}
              value={formField.city}
            />
          </div>
        </div>

        <div className="grid grid-cols-3 mb-3 gap-4">
          <div className="col w-full">
            <h3 className="text-[14px] font-[500] mb-1 text-black">State</h3>
            <input
              type="text"
              className="w-full h-[40px] border border-[rgba(0,0,0,0.2)] focus:outline-none focus:border-[rgba(0,0,0,0.4)] rounded-sm p-3 text-sm"
              name="state"
              onChange={onChangeInput}
              value={formField.state}
            />
          </div>

          <div className="col w-full">
            <h3 className="text-[14px] font-[500] mb-1 text-black">Pincode</h3>
            <input
              type="text"
              className="w-full h-[40px] border border-[rgba(0,0,0,0.2)] focus:outline-none focus:border-[rgba(0,0,0,0.4)] rounded-sm p-3 text-sm"
              name="pincode"
              onChange={onChangeInput}
              value={formField.pincode}
            />
          </div>

          <div className="col w-full">
            <h3 className="text-[14px] font-[500] mb-1 text-black">country</h3>
            <input
              type="text"
              className="w-full h-[40px] border border-[rgba(0,0,0,0.2)] focus:outline-none focus:border-[rgba(0,0,0,0.4)] rounded-sm p-3 text-sm"
              name="country"
              onChange={onChangeInput}
              value={formField.country}
            />
          </div>

          <div className="col w-full">
            <h3 className="text-[14px] font-[500] mb-1 text-black">
              Mobile No
            </h3>
            <PhoneInput
              defaultCountry="np"
              value={phone}
              onChange={(phone) => {
                setPhone(phone);
                setFormField((prevState) => ({
                  ...prevState,
                  mobile: phone,
                }));
              }}
              disabled={isLoading === true ? true : false}
            />
          </div>

          <div className="col w-full">
            <h3 className="text-[14px] font-[500] mb-1 text-black">Status</h3>
            <Select
              value={status}
              onChange={handleChangeStatus}
              size="small"
              displayEmpty
              className="w-full"
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={true}>True</MenuItem>
              <MenuItem value={false}>False</MenuItem>
            </Select>
          </div>
        </div>

        <br />

        <Button type="submit" className="btn-org btn-lg gap-2 ">
          <FaCloudUploadAlt className="text-[25px] text-white" />
          Publish & View
        </Button>
      </form>
    </section>
  );
}
export default AddAddress;
