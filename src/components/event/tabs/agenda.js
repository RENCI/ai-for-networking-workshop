import { Space, Typography } from 'antd'

const { Title } = Typography

export const AgendaTab = ({ url }) => {
  return (
    <Space direction="vertical">
      <Title level={ 2 }>Agenda</Title>
      <iframe src={ url } height="1810" width="700"></iframe>
    </Space>
  )
}

