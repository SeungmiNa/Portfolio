import React from "react";
import { useNavigate } from "react-router-dom";

interface mainProps {
  defaultClassName?: string;
}

const Delivious: React.FC<mainProps> = ({ defaultClassName }) => {
  const navigate = useNavigate();

  const DeliviousPage = () => {
    return (
      <div className="container mx-auto">
        <div className="grid grid-col-1 sm:grid-cols-2 px-6">
            <div>d</div>
            <p>
            Delivious means delivery and delicious. It is a service for ordering
            and delivering an order to dine at a table. User can order and check
            the order history. Admin user can deliver the food using the Robot.
            </p>
        </div>
        <div className="bg-[#4963AE] overflow-x-scroll flex px-8 py-6 gap-6">
          <div className="bg-white h-8">sssss</div>
          <div className="bg-white h-8">afdsafdsaf</div>
          <div className="bg-white h-8">asdfafdsa</div>
          <div className="bg-white h-8">aadfsafdsaf</div>
          <div className="bg-white h-8">afdsfafdsa</div>
          <div className="bg-white h-8">afdsafdsa</div>
          <div className="bg-white h-8">afdsfasdf</div>
          <div className="bg-white h-8">afdsafdsa</div>
          <div className="bg-white h-8">afdsfasdf</div>
        </div>

        <div className="bg-[#F4F5F5] h-40"></div>
      </div>
    );
  };
  return <>{DeliviousPage()}</>;
};

export default Delivious;
