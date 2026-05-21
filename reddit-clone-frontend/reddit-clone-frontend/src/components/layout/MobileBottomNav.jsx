import {
  Home,
  Users,
  PlusSquare,
  User,
} from "lucide-react";

import { Link } from "react-router-dom";

export default function MobileBottomNav() {

  return (
    <div
      className="
      lg:hidden
      fixed
      bottom-0
      left-0
      right-0
      bg-white
      border-t
      z-50
      flex
      justify-around
      py-3
    "
    >

      <Link to="/">
        <Home />
      </Link>

      <Link to="/communities">
        <Users />
      </Link>

      <Link to="/create-post">
        <PlusSquare />
      </Link>

      <Link to="/profile">
        <User />
      </Link>

    </div>
  );
}