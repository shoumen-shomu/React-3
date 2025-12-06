import Image from "../Image"
import Banner from "../layouts/Banner"
import Blog from "../layouts/Blog"
import Creative from "../layouts/Creative"
import Footer from "../layouts/Footer"
import Introduction from "../layouts/Introduction"
import Review from "../layouts/Review"
import Service from "../layouts/Service"
import Work from "../layouts/Work"

const Home = () => {
  return (
    <>
<Banner/>
<Service/>
<Introduction/>
<Work/>
<Creative/>
<Review/>
<Blog/>
    </>
  )
}

export default Home