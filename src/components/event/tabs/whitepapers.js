import { Space, Typography } from 'antd'

const { Title } = Typography

export const CallForWhitepapersTab = ({ url }) => {
  return (
    <Space direction="vertical">
      <Title level={ 2 }>Call for Whitepapers</Title>
      <iframe src={ url } width="700" height="800" frameBorder="0" marginHeight="0" marginWidth="0">Loading…</iframe>
    </Space>
  )
}

