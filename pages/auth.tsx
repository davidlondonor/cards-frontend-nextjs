import FirebaseAuth from "components/layout";
import Layout from "../components/Layout";

const Logout = () => {
  return (
    <h1 className="text-center text-2xl mt-96 bg-red-100 rounded-2xl w-96 m-auto">
      Saliendo de la aplicacion
      <Layout main={<FirebaseAuth />} />
    </h1>
  );
};

export default Logout;
