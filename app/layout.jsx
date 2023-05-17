import "@styles/globals.css";
import { Nav, Provider } from "@components";

export const metadata = {
    title: "Promptia",
    description: "Discover and share AI prompts"
}

const Rootlayout = ({ children }) => {
  return (
    <html lang="en">
        <body>
            <Provider>
                <div className="main">
                    <div className="gradient"/>
                </div>
                
                <main className="app">
                    <Nav />
                    {children}
                </main>
            </Provider>
        </body>
    </html>
  )
}

export default Rootlayout 