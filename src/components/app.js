import { EventCard } from './event/event-card'
import './app.scss'
import { Layout } from 'antd'
import Markdown, * as event from '../content/ai-for-networking.md'

const { Footer } = Layout

export const App = () => {
  return (
    <div className="app">
      <Layout className="layout">
        <EventCard event={ event } markdown={ <Markdown /> } />
      </Layout>
      <Footer className="footer">
        RENCI &copy; 2021
      </Footer>
    </div>
  )
}
