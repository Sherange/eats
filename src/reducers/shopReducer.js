import {
  SHOPS,
  SELECTED_SHOP,
  SHOP_PHOTOS,
  USER_SHOPS,
  SHOP_PHOTO_UPLOAD_SUCCESS,
  SHOP_PHOTO_UPLOAD_ERROR,
  SHOP_REGISTRATION_SUCCESS,
  SHOP_REGISTRATION_ERROR,
  IS_FETCHING,
  DONE_FETCHING
} from "../actions/types";

const initialState = {
  isFetching: false,
  shops: [],
  selectedShop: null,
  shopPhotos: [],
  userShops: [],
  shopRegistrationError: "",
  shopRegistrationSuccess: "",
  shopPhotoUploadError: "",
  shopPhotoUploadSuccess: ""
};

export default function(state = initialState, action) {
  switch (action.type) {
    case IS_FETCHING:
      return {
        ...state,
        isFetching: true
      };
    case DONE_FETCHING:
      return {
        ...state,
        isFetching: false
      };
    case SHOPS:
      return {
        ...state,
        shops: action.payload
      };
    case SHOP_REGISTRATION_SUCCESS:
      return {
        ...state,
        shopRegistrationSuccess: action.payload
      };
    case SHOP_REGISTRATION_ERROR:
      return {
        ...state,
        shopRegistrationError: action.payload
      };
    case SELECTED_SHOP:
      return {
        ...state,
        selectedShop: action.payload
      };
    case SHOP_PHOTOS:
      return {
        ...state,
        shopPhotos: action.payload
      };
    case SHOP_PHOTO_UPLOAD_SUCCESS:
      return {
        ...state,
        shopPhotoUploadSuccess: action.payload
      };
    case SHOP_PHOTO_UPLOAD_ERROR:
      return {
        ...state,
        shopPhotoUploadError: action.payload
      };
    case USER_SHOPS:
      return {
        ...state,
        userShops: action.payload
      };
    default:
      return state;
  }
}
