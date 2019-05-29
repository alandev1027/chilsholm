import Meta from "../components/global/Meta";
import Header from "../components/Header"

const Page = (props) => {
  const { children } = props;

  return (
    <div>
      <Meta />
      <Header/>
      <section id="main" role="main">
        {children}        
      </section> 
      <style jsx>{`
      #main {
        
      }
    `}</style>
    </div>
  )
};
export default Page;