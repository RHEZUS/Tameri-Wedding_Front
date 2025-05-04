import React, { useEffect, Suspense } from "react";
import Header from "@/components/front-office/Header";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Loading from "@/components/Loading";
const AuthLayout = () => {
  const navigate = useNavigate();

  return (
    <>
      <Suspense fallback={<Loading />}>
        <ToastContainer />
        <Header />
        {<Outlet />}
      </Suspense>
    </>
  );
};

export default AuthLayout;