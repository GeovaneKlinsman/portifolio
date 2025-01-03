import Avatar from '../../components/Avatar'
import Paragraph from '../../components/Paragraph'
import Title from '../../components/Title'

import { Description, ThemeButton, SidebarContainer } from './styles'

type Props = {
  changeTheme: () => void
}

const Sidebar = (props: Props) => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Title fontSize={20}>Klinsman Gondim</Title>
      <Paragraph type="secondary" fontSize={16}>
        GeovaneKlinsman
      </Paragraph>
      <Description type="principal" fontSize={12}>
        Python Full Stack Developer
      </Description>
      <ThemeButton onClick={props.changeTheme}>Dark & Light</ThemeButton>
    </SidebarContainer>
  </aside>
)

export default Sidebar
