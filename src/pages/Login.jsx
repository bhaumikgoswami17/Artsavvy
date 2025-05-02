import Template from "../components/core/Template"
import LoginImg from "../assets/login.png"
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

function Login() {
  return (
    <>
    <Header />
    <Template
      title="Welcome Back"
      description1="Discover, support, and invest in art that lasts a lifetime while securing"
      description2="timeless pieces for your collection."
      image={LoginImg}
      formType="login"
    />
    <Footer />
    </>
  )
}

export default Login
