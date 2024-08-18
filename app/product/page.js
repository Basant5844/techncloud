import Images from "../components/Images";
import Description from "../components/Description";



const page = () => {
  return (
    <div class = "overflow-hidden">
    <section class="h-screen pt-6 flex items-center gap-16 px-36 py-20 max-lg:flex-col max-sm:py-0 max-sm:px-0 mb-10">
      <Images></Images>
      <Description></Description>
    </section>
    </div>
  )
}

export default page