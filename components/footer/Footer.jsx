import Link from "next/link";
import Container from "../Container";
import FooterList from "./FooterList";
// import {MdFacebook} from "react-icons/md"

const Footer = () => {
  return (
    <footer className="bg-slate-700 text-slate-200 text-sm mt-16">
      <Container>
        <div className="flex flex-col md:flex-row justify-between pt-16 pb-8">
          <FooterList>
            <h3 className="text-base font-bold mb-2">Course</h3>
            <Link href="#">Web Developer</Link>
            <Link href="#">Fulstack Web Developer</Link>
            <Link href="#">Frontend Web Developer</Link>
            <Link href="#">Backend Developer</Link>
            <Link href="#">Ui/Ue Designer</Link>
          </FooterList>
          <FooterList>
            <h3 className="text-base font-bold mb-2">Customer Service</h3>
            <Link href="#">Contact Us</Link>
            <Link href="#">Return & Exchanges</Link>
            <Link href="#">Watches</Link>
            <Link href="#">FAQs</Link>
          </FooterList>

          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-base font-bold mb-2">About Us</h3>
            <p className="mb-2">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Molestiae quia accusantium, unde iure minima error ipsam
              exercitationem blanditiis pariatur maxime rem optio possimus qui.
              Repellendus totam nesciunt corporis quo earum?
            </p>
            <p>
              &copy; {new Date().getFullYear()} MySkill. All right riserved{" "}
            </p>
          </div>
          <FooterList>
            <h3 className="text-base font-bold mb-2">Follow Us</h3>
            <div className="flex gap-2">
              <Link href="#">Facebook</Link>
              <Link href="#">Instagram</Link>
              <Link href="#">Linkedin</Link>
            </div>
          </FooterList>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
