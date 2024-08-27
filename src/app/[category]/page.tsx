import CategoryPage from '@/app/[category]/categorypage'

const Page=({params}:{params:{category:string}})=> {
  return (
    <div className='mb-[100px] mt-[50px]'>
      <CategoryPage params={params}/>
      </div>
  )
}

export default Page
