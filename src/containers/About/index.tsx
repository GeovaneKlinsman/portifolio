import Title from '../../components/Title'
import Paragraph from '../../components/Paragraph'
import { GithubSection } from './styles'

const About = () => (
  <section>
    <Title fontSize={16}>About me</Title>
    <Paragraph type="principal">
      Eu ea laboris occaecat ea laboris fugiat culpa dolore enim fugiat officia.
      Nulla sit culpa Lorem culpa. Proident nulla enim incididunt voluptate sit
      eu deserunt. Eu id elit ut sunt ut ex. Duis cupidatat consequat sit sit
      Lorem id aliqua Lorem ipsum sint ex.
    </Paragraph>
    <GithubSection>
      <img src="https://github-readme-stats.vercel.app/api?username=GeovaneKlinsman&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=schorchi-GH&layout=compact&langs_count=7&theme=dracula" />
    </GithubSection>
  </section>
)

export default About
