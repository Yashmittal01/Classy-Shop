import CartProductModel from "../models/cartproduct.model.js";
import userModel from "../models/user.model.js";

export async function addToCartItemController(request, response) {
  try {
    const userId = request.userId;
    const { productId } = request.body;

    if (!productId) {
      return response.status(402).json({
        message: "Provide ProductId",
        error: true,
        success: false,
      });
    }

    const checkItemCart = await CartProductModel.findOne({
      userId: userId,
      productId: productId,
    });

    if (checkItemCart) {
      return response.status(400).json({
        message: "Item already in the cart",
      });
    }

    const cartItem = new CartProductModel({
      quantity: 1,
      userId: userId,
      productId: productId,
    });

    const save = await cartItem.save();

    const updateCartUser = await userModel.updateOne(
      { _id: userId },
      {
        $push: {
          shopping_cart: productId,
        },
      }
    );

    return response.status(200).json({
      data: save,
      message: "Item added successfully",
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
}

export async function getCartItemController(request, response) {
  try {
    const userId = request.userId;

    const cartItem = await CartProductModel.find({
      userId: userId,
    }).populate("productId");

    return response.json({
      data: cartItem,
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
}

export async function updateCartItemQtyController(request, response) {
  try {
    const userId = request.userId;
    const { _id, qty } = request.body;

    if (!_id || !qty) {
      return response.status(400).json({
        message: "Provide _id and qty",
      });
    }

    const updateCartitem = await CartProductModel.updateOne(
      {
        _id: _id,
        userId: userId,
      },
      {
        quantity: qty,
      }
    );

    return response.status(200).json({
      message: "cart Updated",
      error: false,
      success: true,
      data: updateCartitem
    });

  } catch (error) {
    return response.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
}


export async function deleteCartItemQtyController(request, response) {
  try {
    const userId = request.userId;
    const { _id, productId } = request.body;

    if(!_id){
      return response.status(400).json({
        message: "Provide _id",
        error: true,
        success: false,
      });
    }

    const deleteCartItem = await CartProductModel.deleteOne({ _id : _id, userId: userId })

    if(!deleteCartItem){
      response.status(404).json({
        message: "The Product in the cart is not found",
        error: true,
        success: false
      })
    }

    const user = await userModel.findOne({
      _id: userId
    })

    const cartItem = user?.shopping_cart

    const updatedUserCart = [...cartItem.slice(0, cartItem.indexOf(productId)),...cartItem.slice(cartItem.indexOf(productId) + 1)]

    user.shopping_cart = updatedUserCart;

    await user.save()

    return response.status(200).json({
      message: "Item removed",
      error: false,
      success: true,
      data: deleteCartItem
    });

  } catch (error) {
    return response.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
}

