import Images from "../components/Images";
import Description from "../components/Description";
import NavBar from "../components/NavBar";



const page = (context) => {
  const {id, Name} = context.searchParams;

  console.log(context)
  return (
    <div class = "h-screen overflow-hidden bg-white text-black">
      <NavBar></NavBar>
    <section class="h-screen pt-6 flex gap-16 px-36 max-lg:flex-col max-sm:py-0 max-sm:px-0 mb-10">
      <Images id={id}></Images>
      <Description id={id} Name={Name}></Description>
    </section>
    </div>
  )
}

export default page