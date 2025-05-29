import { request, response } from "express";
import AddressModel from "../models/address.model.js";
import userModel from "../models/user.model.js";

export const addAddressController = async (request, response) => {
  try {
    const {
      address_line,
      city,
      state,
      pincode,
      country,
      mobile,
      status,
      userId,
    } = request.body;

    if (
      !address_line ||
      !city ||
      !state ||
      !pincode ||
      !country ||
      !mobile ||
      !userId
    ) {
      return response.status(400).json({
        message: "Please provide all the fields",
        error: true,
        success: false,
      });
    }

    const address = new AddressModel({
      address_line,
      city,
      state,
      pincode,
      country,
      mobile,
      status,
      userId,
    });

    const savedAddress = await address.save();

    await userModel.updateOne(
      { _id: userId },
      {
        $push: {
          address_details: savedAddress._id,
        },
      }
    );

    return response.status(200).json({
      data: savedAddress,
      message: "Address added successfully",
      error: false,
      success: true,
    });
  } catch (error) {
    return response.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
};

export const getAddressController = async (request, response) => {
  try {
    const address = await AddressModel.find({
      userId: request?.query?.userId,
    });

    if (!address) {
      return response.status(500).json({
        message: "Address not found",
        error: true,
        success: false,
      });
    } else {
      const updateUser = await userModel.updateOne(
        { _id: request?.query?.userId },
        {
          $push: {
            address: address?._id,
          },
        }
      );

      return response.status(200).json({
        data: address,
        error: false,
        success: true,
      });
    }
  } catch (error) {
    return response.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
};
