import Profile from "./components/Profile";

export default function App(){
  return(
    <div className="app">
      <Profile
        avatar="https://avatar.iran.liara.run/public/49"
        name="John Doe"
        bio="Full-stack javascript developer at Acme Inc."
        phone="+5511987654321"
        email= "joao@dev.com"
        githubUrl="https://github.com/caminhajoao"
        linkedinUrl="https://www.linkedin.com/in/joaocaminha/"
      
      />
    </div>
  )
}