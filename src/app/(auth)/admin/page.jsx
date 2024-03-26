import adminimg from "@/assets/images/admin-img.png";
import LoginForm from "@/components/ui/LoginForm";

export default function AdminLogin() {
  return (
    <>
      <LoginForm role="Admin" img={adminimg} />
    </>
  );
}
