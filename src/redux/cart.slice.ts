import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { setStorageData } from "../utils/useLocalStorage";

const CART: string = "CART";

interface Coupon {
  code: string;
  discount: number;
}

interface Item {
  _id: string;
  qty: number;
  color?: { name: string };
  attribute?: { name: string };
  uid: string;
}

interface BillingInfo {
  fullName: string;
  phone: string;
  email: string;
  house: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

interface ShippingInfo {
  fullName: string;
  phone: string;
  email: string;
  house: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

interface DeliveryInfo {
  type: string;
  area: string;
  cost: number;
}

interface CartState {
  loaded: boolean;
  coupon: Coupon;
  items: Item[];
  billingInfo: BillingInfo;
  shippingInfo: ShippingInfo;
  deliveryInfo: DeliveryInfo;
  wishlist: number;
  compare: Item[];
}

const initialState: CartState = {
  loaded: false,
  coupon: {
    code: "",
    discount: 0,
  },
  items: [],
  billingInfo: {
    fullName: "",
    phone: "",
    email: "",
    house: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
  },
  shippingInfo: {
    fullName: "",
    phone: "",
    email: "",
    house: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
  },
  deliveryInfo: {
    type: "",
    area: "",
    cost: 0,
  },
  wishlist: 0,
  compare: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state: CartState, action: PayloadAction<Item>) => {
      const itemExists = state.items.find(
        (item) => item._id === action.payload._id
      );
      const itemExistsWithQty = itemExists && action.payload.qty > 1;
      if (itemExistsWithQty) {
        itemExists.qty = itemExists.qty + action.payload.qty;
      } else if (itemExists) {
        itemExists.qty++;
      } else {
        state.items.push({ ...action.payload });
      }
      setStorageData(CART, state);
    },
    addVariableProductToCart: (state: CartState, action: PayloadAction<Item>) => {
      const itemExists = state.items.find(
        (item) =>
          item._id === action.payload._id &&
          item.color?.name === action.payload.color?.name &&
          item.attribute?.name === action.payload.attribute?.name
      );
      const itemExistsWithQty = itemExists && action.payload.qty > 1;
      if (itemExistsWithQty) {
        itemExists.qty = itemExists.qty + action.payload.qty;
      } else if (itemExists) {
        itemExists.qty++;
      } else {
        state.items.push({ ...action.payload });
      }
      setStorageData(CART, state);
    },
    incrementQuantity: (state: CartState, action: PayloadAction<string>) => {
      const item = state.items.find((item) => item.uid === action.payload);
      if (item) {
        item.qty++;
      }
      setStorageData(CART, state);
    },
    decrementQuantity: (state: CartState, action: PayloadAction<string>) => {
      const item = state.items.find((item) => item.uid === action.payload);
      if (item) {
        if (item.qty === 1) {
          const index = state.items.findIndex(
            (item) => item.uid === action.payload
          );
          state.items.splice(index, 1);
        } else {
          item.qty--;
        }
      }
      setStorageData(CART, state);
    },
    removeFromCart: (state: CartState, action: PayloadAction<string>) => {
      const index = state.items.findIndex(
        (item) => item.uid === action.payload
      );
      if (index !== -1) {
        state.items.splice(index, 1);
      }
      setStorageData(CART, state);
    },
    updateCart: (state: CartState, action: PayloadAction<Partial<CartState>>) => {
      const {
        coupon,
        items,
        shippingInfo,
        billingInfo,
        deliveryInfo,
        compare,
        wishlist,
      } = action.payload;
      state.coupon = coupon || { code: "", discount: 0 };
      state.items.push(...(items || []));
      state.billingInfo = billingInfo || initialState.billingInfo;
      state.shippingInfo = shippingInfo || initialState.shippingInfo;
      state.deliveryInfo = deliveryInfo || initialState.deliveryInfo;
      state.compare = compare || [];
      state.wishlist = wishlist || 0;
      state.loaded = true;
    },
    resetCart: (state: CartState) => {
      const { coupon, items, billingInfo, shippingInfo, deliveryInfo } =
        initialState;
      state.coupon = coupon;
      state.items = items;
      state.billingInfo = billingInfo;
      state.shippingInfo = shippingInfo;
      state.deliveryInfo = deliveryInfo;
      setStorageData(CART, state);
    },
    applyCoupon: (state: CartState, action: PayloadAction<Coupon>) => {
      state.coupon = action.payload;
      setStorageData(CART, state);
    },
    updateBillingData: (state: CartState, action: PayloadAction<{ billingInfo: BillingInfo; shippingInfo: ShippingInfo; deliveryInfo: DeliveryInfo; }>) => {
      state.billingInfo = action.payload.billingInfo;
      state.shippingInfo = action.payload.shippingInfo;
      state.deliveryInfo = action.payload.deliveryInfo;
      setStorageData(CART, state);
    },
    updateWishlist: (state: CartState, action: PayloadAction<number>) => {
      state.wishlist = action.payload;
      setStorageData(CART, state);
    },
    updateComparelist: (state: CartState, action: PayloadAction<Item[]>) => {
      state.compare = action.payload;
      setStorageData(CART, state);
    },
  },
});

export const cartReducer = cartSlice.reducer;

export const {
  addToCart,
  addVariableProductToCart,
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
  updateCart,
  resetCart,
  applyCoupon,
  updateBillingData,
  updateWishlist,
  updateComparelist,
} = cartSlice.actions;
