import { useSelector,useDispatch } from "react-redux";
import "./Announcment.css";
import { useEffect } from "react";
import { showcart,showorder, showwish } from "../../redux/apiCartRedux";
export const Announcment = () => {
  const dispatch=useDispatch()
  const userId = useSelector((state) => state.user.currentUser);
  useEffect(() => {
    try {
      const getcart = async () => {
        if(userId){
          dispatch(showcart(userId));
          dispatch(showorder(userId));
          dispatch(showwish(userId));
        }
      };
      getcart();
    } catch (error) {
      console.error("Error in useEffect:", error);
    }
  }, [userId]);
  return (
    <div className=" g-0 announce text-center">
      Super Deal! Free Shipping on Orders Over $50
    </div>
  );
};
