import Image from "next/image";
import FormNewPost from "./components/FormNewPost";

export default function Home() {
  return (
    <div className="flex items-center justify-center">
      <FormNewPost />
    </div>
  );
}
