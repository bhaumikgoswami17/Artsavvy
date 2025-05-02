import signupImg from "../assets/signUp.png"
import Template from "../components/core/Template"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"

function Signup() {
  return (
    <>
    <Header />
    <Template
      title="Connect with talented artists, showcase your unique art preferences, and explore curated collections"
      description1="Discover, support, and invest in art that lasts a lifetime while securing"
      description2="timeless pieces for your collection."
      image={signupImg}
      formType="signup"
    />
    <Footer />
    </>
  )
}

export default Signup
