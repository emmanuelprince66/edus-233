import studentImg from "@/assets/images/student-img.png";
import LoginForm from "@/components/ui/LoginForm";

export default function AdminLogin() {
  return (
    <>
      <LoginForm role="Student" img={studentImg} />
    </>
  );
}
