import teacherImg from "@/assets/images/teacher-img.png";
import LoginForm from "@/components/ui/LoginForm";

export default function TeacherLogin() {
  return (
    <>
      <LoginForm img={teacherImg} role="Teacher" />
    </>
  );
}
