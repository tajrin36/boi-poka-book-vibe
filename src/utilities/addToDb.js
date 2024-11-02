import { toast } from "react-toastify";

const getStoredReadList = () => {
  const storedListStr = localStorage.getItem('read-list');
  if (storedListStr) {
    const storedList = JSON.parse(storedListStr);
    return storedList;
  } else {
    return [];
  }
};

const addToStoredReadList = (id) => {
  const storedList = getStoredReadList();
  if (storedList.includes(id)) {
    toast.error('Book already exist in read list!', {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  } else {
    storedList.push(id);
    const storedListStr = JSON.stringify(storedList);
    localStorage.setItem('read-list', storedListStr);
    toast.success('Successfully added in the read list book!', {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light"
      });
  }
};

const getStoredWishlist = () => {
  const storedWishlistStr = localStorage.getItem('wish-list');
  if (storedWishlistStr) {
    const storedWishlist = JSON.parse(storedWishlistStr);
    return storedWishlist;
  } else {
    return [];
  }
};

const addToStoredWishlist = (id) => {
  const storedWishlist = getStoredWishlist();
  if (storedWishlist.includes(id)) {
    toast.error('Book already exist in wish list!', {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  } else {
    storedWishlist.push(id);
    const storedWishlistStr = JSON.stringify(storedWishlist);
    localStorage.setItem('wish-list', storedWishlistStr);
    toast.success('Successfully added in the wish list book!', {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light"
      });
  }
};

export {
  addToStoredReadList,
  addToStoredWishlist,
  getStoredReadList,
  getStoredWishlist,
};
