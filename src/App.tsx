import { FormEvent, useState } from 'react';
import { ligthTheme, darkTheme } from './styles/theme';
import {BsSun, BsFillMoonFill, BsSearch, BsLink45Deg, BsTwitter, BsFillBuildingsFill} from 'react-icons/bs';
import {FaLocationDot} from "react-icons/fa6"
import useThemeState from './hook/useThemeState';
import { Container, Body,Navbar, Card, Image, Informations, CardHeader, Bio, DivMoreInformations, MoreInformations, DivLocationsAndLinks, LocationsAndLinks, Form, Button, Input, IconMood, IconSearch, DivCard, Imageloading} from './styles/styles';
import {ThemeProvider} from 'styled-components';
import { GlobalStyles } from './styles/GlobalStyles';
import ImageLoading from '../src/assets/loader-primary.svg'
import './App.css';

interface UserData {
  avatar_url: StaticRangeInit;
  name: string;
  created_at: string;
  email: string | null;
  bio: string | null;
  public_repos: number;
  followers: number;
  following: number;
  location: string | null;
  twitter_username: string | null;
  company: string | null;
}

function App() {
  const [theme, setTheme] = useThemeState('theme', "light")
  const themeToggler = () =>{
    theme === "light" ? setTheme('dark') : setTheme("light")
  }
  const [userName, setUsername] = useState<string>("")
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [userData, setUserData] = useState<UserData | null>(null)

    const fetchData = async(userName: string) =>{
        try {
          setIsLoading(true)
          const res = await fetch(`https://api.github.com/users/${userName}`)
          const data = await res.json()
          if(res.ok){
            setUserData(data)
            setIsLoading(false)
          }
          else{
            alert("O usuário não foi encontrado")
            setIsLoading(false)
          }
        } catch (error) {
          setIsLoading(false)
          alert("Erro ao carregar usuário")
          console.log("Error " + error)
        }
    }

  const handleSubmit = (e: FormEvent):void => {
    e.preventDefault()
    fetchData(userName)
    setUsername('')
  }

  const formatCreatedAtDate = (createdAt: string) => {
    const date = new Date(createdAt);
    return date.toLocaleDateString();
  };
  return (
    <>
    <ThemeProvider theme={theme === 'light' ? ligthTheme : darkTheme}>
      <GlobalStyles/>
      <Body>
        <Container>
          <Navbar>
          <h1>devfinder</h1>
          {theme === "light" ? ( 
          <IconMood>
          <span>Dark</span> <BsFillMoonFill onClick={() => themeToggler()}/>
          </IconMood> )  : (
          <IconMood>
          <span>Light</span>
          <BsSun onClick={() => themeToggler()}/>
          </IconMood>
          ) }
          </Navbar>
          <Form onSubmit={handleSubmit}>
            <Input type="text" placeholder='Search GitHub username' value={userName} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}>
            </Input>
            <IconSearch>
              <BsSearch/>
            </IconSearch>
              <Button type="submit">
                Search
              </Button>
          </Form>
          <Card>
            {isLoading ? (
              <Imageloading>
                <img src={ImageLoading} alt="loading" className='loading-image' />
              </Imageloading>
              
            ) : userData !== null ? (
              <DivCard>
              <Image>
                <img src={userData.avatar_url} alt={userData?.name}/>
              </Image>
              <Informations>
                <CardHeader>
                  <h1>{userData.name}</h1>
                  <p>Joined {formatCreatedAtDate(userData?.created_at)}</p>
                </CardHeader>
                <Bio>
                {userData.email !== null ? (
                      <p className='email'>{userData.email}</p>
                  ) : (
                      <p className='email'>No email</p>
                  )}
                {userData.bio !== null ? (
                      <p>{userData?.bio}</p>
                    ) : (
                      <p>This profile has no bio</p>
                    )}
                </Bio>
                <MoreInformations>
                  <DivMoreInformations>
                    <h3>Repos</h3>
                    <p>{userData.public_repos}</p>
                  </DivMoreInformations>
                  <DivMoreInformations>
                    <h3>Followers</h3>
                    <p>{userData.followers}</p>
                  </DivMoreInformations>
                  <DivMoreInformations>
                    <h3>Following</h3>
                    <p>{userData.following}</p>
                  </DivMoreInformations>
                </MoreInformations>
                <LocationsAndLinks>
                  <DivLocationsAndLinks>
                    <FaLocationDot/>
                    {userData.location !== null ? (
                      <p>{userData.location}</p>
                    ) : (
                      <p>No location</p>
                    )}
                  </DivLocationsAndLinks>
                  <DivLocationsAndLinks>
                    <BsTwitter/>
                    {userData.twitter_username !== null ? (
                      <p>{userData.twitter_username}</p>
                    ) : (
                      <p>Not avaliable</p>
                    )}
                  </DivLocationsAndLinks>
                  <DivLocationsAndLinks>
                    <BsLink45Deg/>
                    <a href="https://github.blog">https://github.blog</a>
                  </DivLocationsAndLinks>
                  <DivLocationsAndLinks>
                    <BsFillBuildingsFill/>
                    {userData.company !== null ? (
                      <p>{userData.company}</p>
                    ) : (
                      <p></p>
                    )}
                  </DivLocationsAndLinks>
                </LocationsAndLinks>
              </Informations>
              </DivCard>
            ) : (
              <div></div>
            )}
             
          </Card>
        </Container>
      </Body>
    </ThemeProvider>
    </>
  )
}

export default App
