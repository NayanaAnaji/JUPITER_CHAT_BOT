// import LoginForm from "@forms/LoginForm";
// import { useData } from "@hooks/useData";
// import { headers, labels } from "@resources";
// import { Paths } from "@routes/paths";
import { FC } from "react";
import LoginForm from "./login-form";
import headers from "@/lang/headers";
import labels from "@/lang/labels";

// import useAuth from "@/hooks/useAuth";

const Login: FC = () => {
  // const { navigateToSpecificRoute } = useData();
  // const loggedIn = useAuth();

  // useLayoutEffect(() => {
  //   if (loggedIn) {
  //     navigateToSpecificRoute(Paths.HOME);
  //   }
  // }, []);

  return (
    <main className="bg-login bg-no-repeat bg-cover min-h-screen w-full bg-center flex justify-center items-center">
      <section className="w-3/4 h-2/4 md:h-3/4 md:grid grid-cols-1 lg:grid-cols-2">
        <div className="bg-primary-white flex-col p-6 md:px-28 md:py-20">
          <div className="space-y-1 text-center mb-12">
            <h1 className="text-xl text-secondary-blue font-extrabold">{headers.jupiter}</h1>
            <h3 className="text-md text-primary-blue font-medium">{labels.airlinePricingImagined}</h3>
          </div>
          <LoginForm />
        </div>
        <div className="bg-login-side bg-cover bg-no-repeat bg-center" />
      </section>
    </main >
  );
};

export default Login;
