import Hero from "@/components/home/hero";
import Topics from "@/components/home/topics";
import Content from "@/components/shared/content";
import Footer from "@/components/shared/footer";
import Header from "@/components/shared/header";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Home() {
  const router = useRouter();
  const [state, setState] = useState({});

  const handleClick = () => {
    alert("you clicked the button!");

    // make API call

    router.push("/books");
    // navigate to the books page
  }

  return (
    <div className="w-full">
      <Header name="Home" />

      <Hero
        imgUrl="/assets/image.jpeg"
        title="Amal"
        subtitle="I am a student engineer"
      />

      <Content>
        <div className="w-full flex flex-col">

          <Topics />


         <div>
          <button
              className="bg-pink-500 px-2 py-1 rounded"
              onClick={handleClick}
            >
              Click me!!!
            </button>
         </div>
        </div>
      </Content>
      
      <Footer href="/books" title="Books page" />
    </div>
  )
}