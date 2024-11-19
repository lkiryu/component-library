import Section from './components/Section/Section'
import Badge from './components/Badge/Badge'
import Banner from './components/Banner/Banner'
import Card from './components/Card/Card'
import Testimonial from './components/Testimonial'
import Tooltip from './components/ToolTip/Tooltip'
import { HiOutlineUpload } from "react-icons/hi";
import './App.css'

function App() {
  return (
    <main className='container'>
      <Section title="badge">
        <div className='badge-container'>
          <Badge color="Gray" shape="Square" />
          <Badge color="Red" shape="Square" />
          <Badge color="Yellow" shape="Square" />
          <Badge color="Green" shape="Square" />
          <Badge color="Blue" shape="Square" />
          <Badge color="Indigo" shape="Square" />
          <Badge color="Purple" shape="Square" />
          <Badge color="Pink" shape="Square" />
          <Badge color="Gray" shape="Pill" />
          <Badge color="Red" shape="Pill" />
          <Badge color="Yellow" shape="Pill" />
          <Badge color="Green" shape="Pill" />
          <Badge color="Blue" shape="Pill" />
          <Badge color="Indigo" shape="Pill" />
          <Badge color="Purple" shape="Pill" />
          <Badge color="Pink" shape="Pill" />
        </div>
      </Section>
      <Section title="banners">
        <div className='banners-container'>
          <Banner status="Success"></Banner>
          <Banner status="Warning">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse cum eligendi, tempora dolor, odio, saepe molestiae totam perferendis fugiat quia consectetur sed ab dolorum porro quos. Nobis officiis dolores itaque.</Banner>
          <Banner status="Error"></Banner>
          <Banner status="Neutral">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse cum eligendi, tempora dolor, odio, saepe molestiae totam perferendis fugiat quia consectetur sed ab dolorum porro quos. Nobis officiis dolores itaque.</Banner>
        </div>
      </Section>
      <Section title="cards">
        <div className='cards-container'>
          <Card>
            <h2>Easy Deployment</h2>
            <p>Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.</p>
          </Card>
          <Card iconColor="red" icon={<HiOutlineUpload />}>
            <h2>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis accusantium eius, maiores, earum dolorum natus facere perferendis eaque nobis enim iste odit facilis reprehenderit tempora eligendi blanditiis. Corrupti, molestias quae.</p>
          </Card>
        </div>
      </Section>
      <Section title="Testimonials">
        <div className='testimonials-container'>
          <Testimonial src="testimonial-image" name="May Andersons" profession="Workcation, CTO">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit.
          </Testimonial>
          <Testimonial name='James Rodrigues' profession='Workcation, CTO'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit.
          </Testimonial>
        </div>
      </Section>
      <Section title="Tooltip">
        <div className='tooltips-container'>
          <Tooltip title="Archive notes" style="bold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </Tooltip>
          <Tooltip title="Archive notes" style="light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </Tooltip>
          <Tooltip title="Archive notes" style="bold" color="blue">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </Tooltip>
          <Tooltip title="Archive notes" style="light" color="blue">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </Tooltip>
          <Tooltip title="Archive notes" style="bold" color="pink">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </Tooltip>
          <Tooltip title="Archive notes" style="light" color="pink">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </Tooltip>
          <Tooltip title="Archive notes" style="bold" color="green">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </Tooltip>
          <Tooltip title="Archive notes" style="light" color="green">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </Tooltip>
        </div>
      </Section>
    </main>
  )
}

export default App
