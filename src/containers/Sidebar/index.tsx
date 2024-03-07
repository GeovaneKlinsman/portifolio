import Avatar from '../../components/Avatar'
import Paragraph from '../../components/Paragraph'
import Title from '../../components/Title'

import { Description, ThemeButton, SidebarContainer } from './styles'

const Sidebar = () => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Title fontSize={20}>Schorchi Hutschinski</Title>
      <Paragraph type="secondary" fontSize={16}>
        schorchi-GH
      </Paragraph>
      <Description type="principal" fontSize={12}>
        Python Full Stack Developer
      </Description>
      <ThemeButton>Dark & Light</ThemeButton>
    </SidebarContainer>
  </aside>
)

export default Sidebar
