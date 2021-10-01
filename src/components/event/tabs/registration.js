import { Space, Typography } from 'antd'

const { Title } = Typography

export const RegistrationTab = ({ url }) => {
  return (
    <Space direction="vertical">
      <Title level={ 2 }>Registration</Title>
      <div className="iframe-wrapper">
        <iframe src={ url } width="800" height="900" frameBorder="0" marginHeight="0" marginWidth="0">Loading…</iframe>
      </div>
      <div className="form-note">
        The <em>Registration</em> form should be embedded above, but
        you may <a href={ url }>visit the form directly</a> if it is not showing.
      </div>
    </Space>
  )
}

