import Paragraph from '../Paragraph'
import Title from '../Title'
import { Card, LinkButton } from './styles'

const Project = () => (
  <Card>
    <Title>Project Lista de Tarefas</Title>
    <Paragraph type="secondary">To-do list using VueJS.</Paragraph>
    <LinkButton href="#">Check it</LinkButton>
  </Card>
)

export default Project
