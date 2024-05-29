// import { get } from "../api/APIController";

import toast from "react-hot-toast";
import { getOrdersSuccess } from "../../Redux/Admin/Orders/ActionCreator";
import store from "../../Redux/Store";
import { deleteCall, get, post, putCall } from "../../api/config/APIController";


export const getCartItems = () => {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      get("cart")
        .then((response) => {
          if (response.status === 200) {
            console.log("this is new cart response", response.data);
            dispatch({
              type: "GET_CART_ITEMS",
              cartItems: response?.data,
            });
            resolve(response.data);
          }
        })
        .catch((error) => {
          dispatch({
            type: "GET_CART_ITEMS",
            cartItems: {},
          });
          reject(error);
        })
        .finally();
    });
  };
};

// public addToCart = (data: any) => {
//   return new Promise((resolve: any, reject: any) => {
//     this.instance
//       .post(API.ADD_TO_CART + "/" + Cart.getCartId(), data)
//       .then((response) => {
//         if (response.status == 200) {
//           let message = response.data.msg ?? "";
//           let cartItems: any = LocalStorageService.getCartItems();

//           if (cartItems) {
//             cartItems.push(data.data.id);
//           } else {
//             cartItems = [data.data.id];
//           }

//           LocalStorageService.setCartItems(cartItems);
//           useCartStore.setState({
//             count: cartItems.length,
//             cartItems: cartItems,
//           });
//           resolve(response);
//         } else {
//           let message = response.data.msg ?? "";
//           Toast.showError(message);
//           reject(response);
//         }
//       })
//       .catch((error) => {
//         console.log("Error", error);
//         Toast.showError(
//           JSON.parse(error.response.request.response).msg.detail
//         );
//         reject(error);
//       });
//   });
// };

export const getCutomerOrdersNew = () => {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      get("orders")
        .then((response) => {
          if (response.status === 200) {
            // console.log("this getCutomerOrdersNew", response.data);
            dispatch({
              type: "GET_ORDER_HISTORY_NEW",
              order: response?.data,
            });
            resolve(response.data);
          }
        })
        .catch((error) => {
          reject(error);
        })
        .finally();
    });
  };
};

export const AddItemToCartNew = (data) => {
  // let data = {
  //   productVariantId: id,
  //   quantity: 1,
  // };
  // return (dispatch) => {
    return new Promise((resolve, reject) => {
      post("cart", data)
        .then((response) => {
          if (response.status === 200) {
          
            store.dispatch({
              type: "GET_ORDER_HISTORY_NEW",
              order: response?.data,
            });
            resolve(response.data);
            toast.success('Product Added into Cart Successfully')
          }
        })
        .catch((error) => {
          reject(error);
        })
        .finally();
    });
  // };
};
export const RemoveCartItemNew = (lineId) => {
  let url = `/cart?lineId=${lineId}`;
  // const {orderId,orderItemId}=reqdata;
  // const data = { orderId, orderItemId };

  return (dispatch) => { // Return a function that accepts dispatch
    return deleteCall(url)
      .then((response) => {
        if (response.status === 200) {
          // Dispatch an action to update the cart after item removal
          dispatch(getCartItems());
          toast.success("Item has been removed from cart");
        } else {
          // Handle other status codes if needed
          toast.error("Failed to remove item from cart");
          console.error("Failed to remove item from cart:", response.data);
        }
      })
      .catch((error) => {
        // Log or handle the error
        toast.error("Failed to remove item from cart");
        console.error("Error removing item from cart:", error);
      });
  };
};

export const updateCartQtyNEW = (reqdata,toast) => {
  // const { orderId, orderItemId, productId, quantity } = reqdata;
  const payload = {
    lineId: reqdata.lineId,
    quantity: reqdata.quantity,
};
console.log(payload)
  return new Promise((resolve, reject) => {
    putCall(`cart`, payload)
      .then((response) => {
        console.log('response',response.data,response.status)
        if (response.status==200) {
          toast.success('Quantity Updated Successfully');

          resolve(response.data);
        } else {
          toast.success('Failed to update cart quantity');

          reject(new Error('Failed to update cart quantity'));
        }
      })
      .catch((error) => {
        console.error('Error updating cart quantity:', error);
        toast.error("Failed to update cart quantity");
        reject(error);
      });
  });
};

export const updateCartQtyModel = (reqdata,toast) => {
  // const { orderId, orderItemId, productId, quantity } = reqdata;
  const payload = {
    lineId: reqdata.lineId,
    quantity: reqdata.quantity,
};
console.log(payload)
  return new Promise((resolve, reject) => {
    putCall(`cart`, payload)
      .then((response) => {
        console.log('response',response.data,response.status)
        if (response.status==200) {
          // toast.success('Quantity Updated Successfully');

          resolve(response.data);
        } else {
          // toast.success('Failed to update cart quantity');

          reject(new Error('Failed to update cart quantity'));
        }
      })
      .catch((error) => {
        console.error('Error updating cart quantity:', error);
        // toast.error("Failed to update cart quantity");
        reject(error);
      });
  });
};

export const placeOrder = async (data) => {

console.log(data,"paymentData")
  return new Promise((resolve, reject) => {
    return post("checkout", data)
      .then((res) => {
       
        resolve(res);
        // getCustomerLoginCart();
      })
      .catch((error) => {
        reject(false);
        console.log(error);
      })
      .finally();
  });
};
