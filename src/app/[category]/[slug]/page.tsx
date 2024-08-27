import Slugpage from "@/app/[category]/[slug]/slugpage"

const Page = ({ params }: { params: { slug: string } }) => {
  return (
    <section className="mb-[100px] mt-[100px]" >
      <Slugpage params={params} />
    </section>
  )
}

export default Page
