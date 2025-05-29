import CategoryModel from "../models/category.model.js";

import { v2 as cloudinary } from "cloudinary";
import { error } from "console";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.cloudinary_Config_Cloud_Name,
  api_key: process.env.cloudinary_Config_api_key,
  api_secret: process.env.cloudinary_Config_api_secret,
  secure: true,
});

// image upload
var imageArr = [];
export async function uploadImages(request, response) {
  try {
    imageArr = [];

    const image = request.files;

    const options = {
      use_filename: true,
      unique_filename: false,
      overwrite: false,
    };

    for (let i = 0; i < image?.length; i++) {
      const img = await cloudinary.uploader.upload(
        image[i].path,
        options,
        function (error, result) {
          // console.log(result)
          imageArr.push(result.secure_url);
          fs.unlinkSync(`uploads/${request.files[i].filename}`);
          // console.log(request.files[i].filename)
        }
      );
    }

    return response.status(200).json({
      images: imageArr,
    });
  } catch (error) {
    return response.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
}

// create category
export async function createCategory(request, response) {
  try {
    let category = new CategoryModel({
      name: request.body.name,
      images: imageArr,
      parentId: request.body.parentId,
      parentCatName: request.body.parentCatName,
    });

    if (!category) {
      return response.status(500).json({
        message: "category not created",
        error: true,
        success: false,
      });
    }

    category = await category.save();

    imageArr = [];

    return response.status(200).json({
      message: "Category created",
      error: false,
      success: true,
      category: category,
    });
  } catch (error) {
    return response.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
}

// get category
export async function getCategories(request, response) {
  try {
    const categories = await CategoryModel.find();
    const categoryMap = {};

    categories.forEach((cat) => {
      categoryMap[cat._id] = { ...cat._doc, children: [] };
    });

    const rootCategories = [];

    categories.forEach((cat) => {
      if (cat.parentId) {
        categoryMap[cat.parentId].children.push(categoryMap[cat._id]);
      } else {
        rootCategories.push(categoryMap[cat._id]);
      }
    });

    return response.status(200).json({
      error: false,
      success: true,
      data: rootCategories,
    });
  } catch (error) {
    return response.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
}

// get category count
export async function getCategoriesCount(request, response) {
  try {
    const categoryCount = await CategoryModel.countDocuments({
      parentId: undefined,
    });

    if (!categoryCount) {
      response.status(500).json({
        success: false,
        error: true,
      });
    } else {
      response.send({
        categoryCount: categoryCount,
      });
    }
  } catch (error) {
    return response.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
}

// get sub category count
export async function getSubCategoriesCount(request, response) {
  try {
    const categoryCount = await CategoryModel.find();

    if (!categoryCount) {
      response.status(500).json({
        success: false,
        error: true,
      });
    } else {
      const subcatList = [];
      for (let cat of categoryCount) {
        if (cat.parentId !== undefined) {
          subcatList.push(cat);
        }
      }

      response.send({
        subcategoryCount: subcatList.length,
      });
    }
  } catch (error) {
    return response.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
}

// get single category
export async function getCategory(request, response) {
  try {
    const category = await CategoryModel.findById(request.params.id);

    if (!category) {
      response.status(500).json({
        message: "The category with the given ID was not found.",
        error: true,
        success: false,
      });
    }

    return response.status(200).json({
      error: false,
      success: true,
      category: category,
    });
  } catch (error) {
    return response.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
}

export async function removeImageFromCloudinary(request, response) {
  const imgUrl = request.query.img;
  const urlArr = imgUrl.split("/");

  const image = urlArr[urlArr.length - 1];
  const imageName = image.split(".")[0];

  if (imageName) {
    try {
      const res = await cloudinary.uploader.destroy(imageName);
      console.log(res);
      response.status(200).send(res);
    } catch (error) {
      console.error(error);
      response.status(500).send("Failed to delete image.");
    }
  } else {
    response.status(400).send("Invalid image name.");
  }
}

export async function deleteCategory(request, response) {
  const category = await CategoryModel.findById(request.params.id);
  const images = category.images;

  let img = ""
  for (img of images) {
    const imgUrl = img;
    const urlArr = imgUrl.split("/");
    const image = urlArr[urlArr.length - 1];

    const imageName = image.split(".")[0];

    if (imageName) {
      cloudinary.uploader.destroy(imageName, (error, result) => {
        // console.log(error, result);
      });
    }
  }

  const subCategory = await CategoryModel.find({
    parentId: request.params.id,
  });

  for (let i = 0; i < subCategory.length; i++) {
    const thirdsubCategory = await CategoryModel.find({
      parentId: subCategory[i]._id,
    });

    for (let i = 0; i < thirdsubCategory.length; i++) {
      const deleteThirdSubCat = await CategoryModel.findByIdAndDelete(
        thirdsubCategory[i]._id
      );
    }
    const deletedSubCat = await CategoryModel.findByIdAndDelete(
      subCategory[i]._id
    );
  }

  const deletedCat = await CategoryModel.findByIdAndDelete(request.params.id);

  if (!deletedCat) {
    response.status(404).json({
      message: "Category not found!",
      success: false,
      error: true,
    });
  }

  response.status(200).json({
    success: true,
    error: false,
    message: "Category Deleted!",
  });
}

export async function updatedCategory(request, response) {
  const category = await CategoryModel.findByIdAndUpdate(
    request.params.id,
    {
      name: request.body.name,
      images: imageArr.length > 0 ? imageArr[0] : request.body.images,
      parentId: request.body.parentId,
      parentCatName: request.body.parentCatName
    },
    { new: true }
  )

  if(!category){
    return response.status(500).json({
      message: "Category cannot be updated",
      success: false,
      error: true
    })
  }

  imageArr = []

  response.status(200).json({
    error: false,
    success: true,
    category: category
  })
}
