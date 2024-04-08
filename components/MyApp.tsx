import { UserButton, } from "@clerk/nextjs";



const App = () => {

    return (
        <div>
            home page
            <UserButton afterSignOutUrl="/sign-in"/>
        </div>
    );
}

export default App;